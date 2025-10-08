/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Checking layouts dispalyed in the view port when right and left arrow is clicked", () => {
	loadPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectStandardLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	getPageConfigurator().clickRightArrow();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 3", "Layout 4", "Layout 9", "Layout 10"]);

	getPageConfigurator().clickRightArrow();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 5", "Layout 6", "Layout 11", "Layout: classic"]);

	getPageConfigurator().clickLeftArrow();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 3", "Layout 4", "Layout 9", "Layout 10"]);

	getPageConfigurator().clickLeftArrow();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);
});
