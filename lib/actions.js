const url = require("url");
const autoLogia = require("./auto-logia");
const log = require("./log")(autoLogia());
const urlParamAppenders = require("./url-param-appenders");
const $$$ = require("./selenium/3xdollar");
const { isDndSpec, appNameAndVersion } = require("./globals");

const { bus, RootAction, options: yemenOptions } = require("yemen");

const yemenDelay = process.env.YEMEN_DELAY ? Number.parseInt(process.env.YEMEN_DELAY, 10) : 1500;

yemenOptions.delay = (callback) => {
	const delay = (delayInMs) => {
		const t0 = Date.now();
		while (Date.now() - t0 < delayInMs) {
			browser.pause(200);
		}
	};

	delay(yemenDelay);
	callback();
};

const baseUrl = require("./baseUrl");
const constructUrl = (pageUri) => {
	// Append all query paramets from pageUri to baseUrl
	let newBaseUrl = new url.URL(baseUrl);
	const myPageUri = new url.URL(pageUri, "http://example.com");
	const params = myPageUri.searchParams;
	for (const [key, value] of params) {
		newBaseUrl.searchParams.append(key, value);
	}

	newBaseUrl = urlParamAppenders.reduce(
		(newUrl, appender) => (newUrl = appender(newUrl)),
		newBaseUrl
	);

	newBaseUrl.pathname = (newBaseUrl.pathname + myPageUri.pathname).replace(/\/[/]*/g, "/");

	return url.format(newBaseUrl);
};

const loadPageWaitFor = process.env.LOADPAGE_WAITFOR
	? Number.parseInt(process.env.LOADPAGE_WAITFOR, 10)
	: 240555;

const loadPageRetryCount = process.env.LOADPAGE_RETRY_COUNT
	? Number.parseInt(process.env.LOADPAGE_RETRY_COUNT, 10)
	: 3;

const waitUntilPageLoaded = (urlOrPath) => {
	let pathname;
	if (urlOrPath.startsWith("http://")) {
		pathname = new URL(urlOrPath).pathname;
	} else {
		pathname = `/${appNameAndVersion}/${urlOrPath}`;
		pathname = encodeURI(pathname);
	}

	$(`[id="e2e-page-loaded"][data-e2e-page-pathname="${pathname}"]`).waitForExist({
		timeout: loadPageWaitFor,
	});

	if (isDndSpec) {
		$(`[id="dnd-is-ready"]`).waitForExist({
			timeout: loadPageWaitFor,
		});
	}
};

const loadUrlWithRetry = (urlToVisit, { retry, finalUri, inNewTab }) => {
	retry = retry - 1;
	try {
		log.info(`[remaining-retry=${retry}] Trying for to load page: ${urlToVisit}`);
		if (inNewTab) {
			browser.newWindow(urlToVisit);
		} else {
			browser.url(urlToVisit);
		}
		waitUntilPageLoaded(finalUri ?? urlToVisit);
	} catch (e) {
		if (retry > 0) {
			log.info(e);
			loadUrlWithRetry(urlToVisit, { retry, inNewTab });
		} else {
			throw e;
		}
	}
};

// Have to implement our own tab state, because WDIO functions are not idempotent,
// and e2e, because of auto retries, needs idempotency.
let currentTab = null;
let tabState = [];

const loadPage_internal = (rawPageUri, options = { inNewTab: false }) => {
	const pageUri = rawPageUri.replace(/\?.*/, "");

	if (!currentTab || currentTab === pageUri || !tabState.some((e) => e === pageUri)) {
		log.info(`loading page ${pageUri}`);

		if (!currentTab || options.inNewTab) {
			currentTab = pageUri;
			tabState = tabState.concat([pageUri]);
		}

		loadUrlWithRetry(constructUrl(rawPageUri), {
			retry: loadPageRetryCount,
			...options,
		});

		bus.trigger("pageLoaded", pageUri);
	} else {
		throw new Error(`Cannot load page: ${pageUri}; page already open in another tab`);
	}
};

const loadPage = (pageUri) => loadPage_internal(pageUri, { inNewTab: false });
const loadPageInNewTab = (pageUri) => loadPage_internal(pageUri, { inNewTab: true });

const loadPageWithRedirect = ({ initialUri, finalUri }) =>
	loadPage_internal(initialUri, { inNewTab: false, finalUri });

const loadPageWithError = ({ initialUri, finalUri }) =>
	loadPage_internal(initialUri, { inNewTab: false, finalUri });

const switchToTab = (pageUri) => {
	browser.switchWindow(new RegExp(pageUri));
	currentTab = pageUri;
};

const closeTab = (pageUri) => {
	let error;
	if (tabState.length <= 1) {
		error = "Cannot close tab, not enough open tabs.";
	} else if (!tabState.some((e) => e === pageUri)) {
		error = `Cannot close tab, no such tab: ${pageUri}.`;
	}

	if (!error) {
		tabState = tabState.filter((e) => e !== pageUri);
		browser.switchWindow(new RegExp(pageUri));
		browser.closeWindow();
		browser.switchWindow(new RegExp(tabState[0]));
	} else {
		throw new Error(error);
	}
};

const acceptAlert = () => {
	browser.alertAccept();
};

// Note that we need all browser.execute to be in es5 to support IE11 e2e
bus.on("executingAction", (action) => {
	log.info("executingAction", action.description);
	browser.execute((description) => {
		const $ = window.jQuery;
		if ($) {
			$("#onscreen-action-visualizer")
				.prepend("<div>" + description + "</div>")
				.find("div:eq(3)")
				.remove();
		}
		return true;
	}, action.description);
});

let pageLoaded = false;
module.exports = {
	RootAction,
	waitUntilPageLoaded,
	onRegisterActions(actionRegistry) {
		actionRegistry.push(new RootAction("getUrl", () => browser.getUrl()));
		actionRegistry.push(
			new RootAction("pageRefresh", () => {
				browser.refresh();
				browser.pause(1000);
			})
		);
		actionRegistry.push(new RootAction("loadPage", loadPage));
		actionRegistry.push(new RootAction("loadPageInNewTab", loadPageInNewTab));
		actionRegistry.push(new RootAction("loadPageWithRedirect", loadPageWithRedirect));
		actionRegistry.push(new RootAction("loadPageWithError", loadPageWithError));
		actionRegistry.push(new RootAction("switchToTab", switchToTab));
		actionRegistry.push(new RootAction("closeTab", closeTab));
		actionRegistry.push(new RootAction("acceptAlert", acceptAlert));
		actionRegistry.push(
			new RootAction(
				"waitUntilDataLoadedOnWidget",
				(widgetURI, waitTimeInMS = loadPageWaitFor) => {
					browser.waitUntil(
						() =>
							!$$$(`[data-widget\\.uri="${widgetURI}"]`).exists(
								".empty-widget-message"
							),
						{
							timeout: waitTimeInMS,
						}
					);
				}
			)
		);
		actionRegistry.push(
			new RootAction(
				"waitForBackgroundActionToComplete",
				(waitTimeInMS = loadPageWaitFor) => {
					browser.waitUntil(() => !$$$("body").exists(".veil-msg.state-busy"), {
						timeout: waitTimeInMS,
					});
				}
			)
		);
	},
	onExecutingScenario() {
		pageLoaded = false;
	},
	onExecutingRootAction(action) {
		const isPageLoadAction = ["loadPage", "loadPageWithRedirect", "loadPageWithError"].includes(
			action.description
		);
		if (!pageLoaded && !isPageLoadAction) {
			pageLoaded = true;
			loadPage("Main Project/home");
		} else if (/loadPage/.test(action.description)) {
			pageLoaded = true;
		}
	},
	onPageLoaded() {
		browser.execute(() => window.jQuery.awf.feature("_aimms_only_persistence.write", false));
	},
};
