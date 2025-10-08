const { Widget } = require("./widget");

class MyWidget extends Widget {}

module.exports = {
	MyWidget,
	onRegisterWidgetTypes(registry) {
		registry["my-widget"] = MyWidget;
	},
};
