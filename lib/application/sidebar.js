const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");

class Sidebar extends FrameworkObject {
	// Page Manager Sidebar
	getPageManager() {
		const pageManagerSidebar = this.webElement.findIfAny(".view.page-navigator-addon.open");
		return pageManagerSidebar.any() ? pageManagerSidebar : "None";
	}

	// Data Manager Sidebar
	getDataManager() {
		const dataManagerSidebar = this.webElement.findIfAny(".view.data-management-addon.open");
		return dataManagerSidebar.any() ? dataManagerSidebar : "None";
	}

	//Widget Manager Sidebar
	getWidgetManager() {
		const widgetManagerSidebar = this.webElement.findIfAny(".view.widget-manager-addon.open");
		return widgetManagerSidebar.any() ? widgetManagerSidebar : "None";
	}

	close() {
		const sidebarCloseButton = $$$.findIfAny(
			".aimms-widget.sidebar-container.open > .icon-close"
		);
		if (sidebarCloseButton.any()) {
			sidebarCloseButton.click();
		}
	}
}

Sidebar._getSidebar = () => new Sidebar($$$(".sidebar-container .sidebar"));

const getSidebar = new RootAction("getSidebar", () => Sidebar._getSidebar());

module.exports = {
	Sidebar,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getSidebar);
	},
};
