/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Create new combination chart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets?dnd=true&_aimms_only_highcharts=true");

	createWidget("combinationchart", [], "Test_combinationchart", 8, 4);

	openPageConfigurator();

	getPageConfigurator()
		.dragWidget("Test_combinationchart")
		.toArea("Area A");

	findWidget("Test_combinationchart").should.be.a.widgetOfType("combinationchart");

	findWidget("Test_combinationchart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Combination Chart");

	findWidget("Test_combinationchart").emptyWidgetMessageHasIcon("icon-bars").should.be.true;

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("combinationchart")
		.isContentsSectionDisplayed()
		.should.be.equal(false);
});
