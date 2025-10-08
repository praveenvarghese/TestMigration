const { Widget } = require("./widget");

class Label extends Widget {
	getLabelText() {
		return this.webElement.find(".label").getText();
	}
}

module.exports = {
	Label,
	onRegisterWidgetTypes(registry) {
		registry["label"] = Label;
	},
};
