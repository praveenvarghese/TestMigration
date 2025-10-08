// Note: consider using $$$() instead of waitFor(), it is probably what you want to use.

const waitFor = (webElement, stabilizationPeriodInMS = 10, maxTimeoutInMS) => {
	let since = null;

	let selector;
	if (typeof webElement === "string") {
		selector = webElement;
		webElement = null;
	}

	const timeout = maxTimeoutInMS > 0 ? stabilizationPeriodInMS + maxTimeoutInMS : undefined;
	browser.waitUntil(() => {
		let result = false;

		if (selector) {
			webElement = $(selector);
		}

		if (webElement.isExisting()) {
			if (since === null) {
				since = Date.now();
			}

			result = Date.now() - since > stabilizationPeriodInMS;
		}

		return result;
	}, timeout);

	return webElement;
};

module.exports = waitFor;
