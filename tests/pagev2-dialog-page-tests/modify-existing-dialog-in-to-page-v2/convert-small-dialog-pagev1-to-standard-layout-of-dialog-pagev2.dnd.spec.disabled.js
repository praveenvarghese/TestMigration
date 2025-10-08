/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert small dialog page to standard layout of dialog PageV2", () => {
	loadPage("Main Project/small dp?_aimms_only_persistence.write=true");

	openPageConfigurator()
		.clickRightArrow()
		.selectLayout("Layout 7");

	getPageConfigurator()
		.dragWidget("widget1")
		.toArea("Area A");

	getPageConfigurator()
		.dragWidget("widget2")
		.toArea("Area D");

	findWidget("small_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widget1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: ["widget2"] },
		]);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("SmallDialog_1").click();

	findWidget("small_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widget1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: ["widget2"] },
		]);
});
