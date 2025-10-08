/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert medium dialog page to custom layout of dialog PageV2", () => {
	loadPage("Main Project/medium dp?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Custom3", "true");

	getPageConfigurator()
		.dragWidget("table_Test")
		.toArea("Area B");

	findWidget("medium_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: ["table_Test"] },
		]);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("MediumDialog_1").click();

	findWidget("medium_dp")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: ["table_Test"] },
		]);
});
