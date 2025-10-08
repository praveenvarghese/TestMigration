/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert large dialog page to custom layout dialog PageV2", () => {
	loadPage("Main Project/large dp?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("CustomLayout1", "true");

	getPageConfigurator()
		.dragWidget("widget1_1")
		.toArea("Area A");

	getPageConfigurator()
		.dragWidget("widget2_1")
		.toArea("Area B");

	getPageConfigurator()
		.dragWidget("widget3")
		.toArea("Area C");

	findWidget("large_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widget1_1"] },
			{ areaName: "Area B", widgets: ["widget2_1"] },
			{ areaName: "Area C", widgets: ["widget3"] },
			{ areaName: "Area D", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("LargeDialog_1").click();

	findWidget("large_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widget1_1"] },
			{ areaName: "Area B", widgets: ["widget2_1"] },
			{ areaName: "Area C", widgets: ["widget3"] },
			{ areaName: "Area D", widgets: [] },
		]);
});
