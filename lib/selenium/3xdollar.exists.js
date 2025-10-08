const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const Browser_exists = function Browser_exists(
	cssSelector,
	stabilizationPeriodInMS,
	maxTimeoutInMS,
	done
) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return done(false);
	};

	const $ = window.jQuery;
	const waitFor = $.awaitCondition.curry(
		"stabilized",
		(elQ) => elQ.any(),
		stabilizationPeriodInMS,
		maxTimeoutInMS
	);

	return waitFor(cssSelector)
		.then(() => done(true))
		.catch(() => done(false));
};

const stabilizationPeriod = process.env._3XDOLLAR_EXISTS_STABILIZATION_PERIOD
	? Number.parseInt(process.env._3XDOLLAR_EXISTS_STABILIZATION_PERIOD, 10)
	: 372;
const maxTimeout = process.env._3XDOLLAR_EXISTS_MAX_TIMEOUT
	? Number.parseInt(process.env._3XDOLLAR_EXISTS_MAX_TIMEOUT, 10)
	: 1372;

const executeStabilizedExistsInBrowser = (
	cssSelector,
	stabilizationPeriodInMS = stabilizationPeriod,
	maxTimeoutInMS = maxTimeout
) => {
	const seleniumResult = browser.executeAsync(
		Browser_exists,
		cssSelector,
		stabilizationPeriodInMS,
		maxTimeoutInMS
	);

	log.debug(
		`executeAsync(Browser_exists, '${cssSelector}') => ${JSON.stringify(seleniumResult)}`
	);

	if (seleniumResult === null) {
		throw new Error("Error while trying to remotely executing 'exists': " + cssSelector);
	}

	return seleniumResult;
};

module.exports = {
	exists(cssSelectorArgument) {
		const cssSelector = `${this.webElement.selector} ${cssSelectorArgument}`;
		return executeStabilizedExistsInBrowser(cssSelector);
	},
};
