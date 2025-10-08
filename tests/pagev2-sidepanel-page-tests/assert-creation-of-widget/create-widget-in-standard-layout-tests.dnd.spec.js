/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Add a widget in Standard layout sidepanel page without the flag", () => {
	loadPage("Main Project/KPIs/EmptyGLSidepanelStandardPage?_aimms_only_persistence.write=true");

	createWidget("scalar", ["Flag"], "SelectFlag");

	openPageConfigurator()
		.dragWidget("SelectFlag")
		.toArea("Area A");

	findWidget("emptyglsidepanelstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SelectFlag"] },
			{ areaName: "Area B", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/home/Load Dataset");

	findWidget("load_dataset")
		.getSidepanels()
		.openSidepanelTab("Standard Empty");

	findWidget("emptyglsidepanelstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SelectFlag"] },
			{ areaName: "Area B", widgets: [] },
		]);

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/EmptyGLSidepanelStandardPage");

	openWidgetManager().deleteWidget("SelectFlag");

	closeWidgetManager();

	findWidget("emptyglsidepanelstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/home/Load Dataset");

	findWidget("load_dataset")
		.getSidepanels()
		.openSidepanelTab("Standard Empty");

	findWidget("emptyglsidepanelstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);
});
