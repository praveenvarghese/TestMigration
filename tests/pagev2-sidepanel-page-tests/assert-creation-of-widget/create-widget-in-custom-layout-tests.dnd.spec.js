/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Add a widget in custom layout sidepanel page without the flag", () => {
	loadPage("Main Project/KPIs/EmptyGLSidepanelCustomPage?_aimms_only_persistence.write=true");

	createWidget("scalar", ["Flag"], "SelectFlag");

	openPageConfigurator()
		.dragWidget("SelectFlag")
		.toArea("Area C");

	findWidget("emptyglsidepanelcustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: ["SelectFlag"] },
			{ areaName: "Area D", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/home/Load Dataset");

	findWidget("load_dataset")
		.getSidepanels()
		.openSidepanelTab("Custom Empty");

	findWidget("emptyglsidepanelcustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: ["SelectFlag"] },
			{ areaName: "Area D", widgets: [] },
		]);

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/EmptyGLSidepanelCustomPage");

	openWidgetManager().deleteWidget("SelectFlag");

	closeWidgetManager();

	findWidget("emptyglsidepanelcustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/home/Load Dataset");

	findWidget("load_dataset")
		.getSidepanels()
		.openSidepanelTab("Custom Empty");

	findWidget("emptyglsidepanelcustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);
});
