const { Widget } = require("./widget");

class GlobalInheritanceWidget extends Widget {
	getWidgetValue() {
		return this.webElement.find(".empty-widget-message").getText();
	}
}

module.exports = {
	GlobalInheritanceWidget,
	onRegisterWidgetTypes(registry) {
		registry["global-inheritance-widget"] = GlobalInheritanceWidget;
	},
};
