const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const $$$ = require("./3xdollar");

//////////////////////////////////////////////////////////////////////////////////////////////
//
// Execute a 'jQuery' search by css selector in the browser.
//
// `cssSelector` (_String_)             - the css selector to search for
// `stabilizationPeriodInMS` (_Number_) - the number of milliseconds for which the
//                                        element must have already been available in the DOM
// `maxTimeoutInMS` (_Number_)          - the number of milliseconds to wait for the element
//                                        to appear in the DOM before failing
// Note: Has the following dependencies in browser-context:
//         * jQuery
//         * genUUID (a v4 uuid generator; can be replaced by something
//                    implemented locally in this function if needed)
// Per selenium.executeAsync, we must return upon unload event:
const Browser_find = function Browser_find(
	cssSelector,
	stabilizationPeriodInMS,
	maxTimeoutInMS,
	done
) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return done([]);
	};

	const $ = window.jQuery;
	const waitFor = $.awaitCondition.curry(
		"found",
		(elQ) => elQ.any(),
		stabilizationPeriodInMS,
		maxTimeoutInMS
	);

	return waitFor(cssSelector)
		.then((foundElQs) => done(foundElQs.idify()))
		.catch(() => done([]));
};

const findInBrowserContext = (cssSelector, stabilizationPeriodInMS, maxTimeoutInMS) => {
	const ids = browser.executeAsync(
		Browser_find,
		cssSelector,
		stabilizationPeriodInMS,
		maxTimeoutInMS
	);

	log.debug(`execute(Browser_find, '${cssSelector}') => ${JSON.stringify(ids)}`);

	if (ids === null || !Array.isArray(ids) || ids.length === 0) {
		throw new Error("CSS selector yielded no result: " + cssSelector);
	}

	return ids;
};

const stabilizationPeriod = process.env._3XDOLLAR_FIND_STABILIZATION_PERIOD
	? Number.parseInt(process.env._3XDOLLAR_FIND_STABILIZATION_PERIOD, 10)
	: 251;
const maxTimeout = process.env._3XDOLLAR_FIND_MAX_TIMEOUT
	? Number.parseInt(process.env._3XDOLLAR_FIND_MAX_TIMEOUT, 10)
	: 10000;

const static_find = (
	cssSelector,
	stabilizationPeriodInMS = stabilizationPeriod,
	maxTimeoutInMS = maxTimeout
) => {
	const ids = findInBrowserContext(cssSelector, stabilizationPeriodInMS, maxTimeoutInMS);
	const webElements = ids.map((id) => {
		const webElement = $(`#${id}`);
		webElement.origCssSelector = cssSelector;
		return webElement;
	});
	return $$$.create(cssSelector, webElements);
};

const static_findIfAny = (...args) => {
	try {
		return static_find(...args);
	} catch (e) {
		return $$$.create();
	}
};

module.exports = {
	find(cssSelector, ...args) {
		try {
			// Should we also use this.apply for 'find'?
			return static_find(`${this.webElement.origCssSelector} ${cssSelector}`, ...args);
		} catch (e) {
			log.trace(`HTML dump: ${this.webElement.getHTML()}`);
			throw e;
		}
	},
	static_find,
	findIfAny(cssSelector, ...args) {
		// Should we also use this.apply for 'findIfAny'?
		return static_findIfAny(`${this.webElement.origCssSelector} ${cssSelector}`, ...args);
	},
	static_findIfAny,
};
