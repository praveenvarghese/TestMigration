/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert small dialog page to custom layout of dialog PageV2", () => {
	loadPage("Main Project/small dp?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("New layout Copy", "true");

	getPageConfigurator()
		.dragWidget("widget1")
		.toArea("Main");

	getPageConfigurator()
		.dragWidget("widget2")
		.dropAfter("widget1");

	findWidget("small_dp")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Main", widgets: ["widget1", "widget2"] }]);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("SmallDialog_1").click();

	findWidget("small_dp")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Main", widgets: ["widget1", "widget2"] }]);
});
