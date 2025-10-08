const mixin = require("../mixin");
const { Widget } = require("./widget");

class WebUIJSONCustomWidget extends mixin(Widget) {
	getWebUIJSON() {
		const abc = JSON.parse(this.webElement.find(`.webuijson`).getText());
		return abc;
	}
}

module.exports = {
	WebUIJSONCustomWidget,
	onRegisterWidgetTypes(registry) {
		registry["webuijson-custom-widget"] = WebUIJSONCustomWidget;
	},
};
