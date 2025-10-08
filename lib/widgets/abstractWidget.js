const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");

const findWidgetWebElement = (name) => $$$(`.aimms-widget[data-widget\\.uri="${name}"]`);

// Gets the type (string) of a webElement
const getWidgetType = (webElement) => {
	const widgetType = webElement.getAttribute("data-aimms.widget.type");

	if (widgetType) {
		return widgetType.replace(/[^:]*:["']([^"']*)["'].*/, "$1");
	}
	return "";
};
const getWidgetName = (webElement) => webElement.getAttribute("data-widget.uri");

class AbstractWidget extends FrameworkObject {
	constructor(webElement, widgetUri, widgetType) {
		super(webElement);

		this.name = widgetUri;
		this.widgetUri = widgetUri;
		this.type = widgetType;
	}
}
module.exports = {
	AbstractWidget,
	getWidgetType,
	getWidgetName,
	findWidgetWebElement,
};
