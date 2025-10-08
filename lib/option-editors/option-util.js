const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const Browser_resetOption = ({ widgetElementSelector, optionNameRegex }) => {
	const $ = window.jQuery;
	const widgetElQ = $(widgetElementSelector);

	Object.allKeys(widgetElQ.awf.specifiedOptions())
		.filter((k) => new RegExp(optionNameRegex).test(k))
		.forEach((optionName) => widgetElQ.awf.specifiedOptions(optionName, null));
};

const resetOptionInBrowserContext = (widgetWebElement, optionNameRegex) => {
	const optionNameRegexAsString = `${optionNameRegex}`.slice(1, -1);
	const seleniumResult = browser.execute(Browser_resetOption, {
		widgetElementSelector: widgetWebElement.selector,
		optionNameRegex: optionNameRegexAsString,
	});

	log.debug(
		`execute(Browser_resetOption, '${
			widgetWebElement.selector
		}', /${optionNameRegexAsString}/) => ${JSON.stringify(seleniumResult)}`
	);
};

const resetOption = resetOptionInBrowserContext;

module.exports = {
	resetOption,
};
