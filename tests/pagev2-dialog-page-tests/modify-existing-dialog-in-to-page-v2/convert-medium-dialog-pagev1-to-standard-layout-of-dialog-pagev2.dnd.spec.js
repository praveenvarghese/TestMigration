/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert medium dialog page to standard layout of dialog PageV2", () => {
	loadPage("Main Project/medium dp?_aimms_only_persistence.write=true"); // &_aimms_only_persistence.write=true"

	openPageConfigurator()
		.clickRightArrow()
		.selectLayout("Layout 2");

	getPageConfigurator()
		.dragWidget("table_Test")
		.toArea("Area A");

	findWidget("medium_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["table_Test"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("MediumDialog_1").click();

	findWidget("medium_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["table_Test"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
		]);
});
