const { Assertion } = require("chai");
const { getWidgetType, widgetTypeRegistry } = require("../widgets/widget");

module.exports = {
	widgetOfType(type) {
		const obj = this._obj;

		const widgetClass = widgetTypeRegistry.get(type);

		// first, our instanceof check, shortcut
		new Assertion(this._obj).to.be.instanceof(widgetClass);

		const webElement = obj.webElement;
		const actualWidgetType = getWidgetType(webElement);

		// second, our type check
		this.assert(
			actualWidgetType === type,
			"expected #{this} to be of type #{exp} but got #{act}",
			"expected #{this} to not be of type #{act}",
			type, // expected
			actualWidgetType // actual
		);
	},
};
