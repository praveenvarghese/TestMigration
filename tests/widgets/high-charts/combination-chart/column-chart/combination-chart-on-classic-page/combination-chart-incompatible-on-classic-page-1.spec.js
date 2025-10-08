/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Combination chart widget on Grid page converted to Classic layout", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1").getEmptyWidgetMessage().should.not.exist;

	// Change the layout of the page to Classic layout
	openPageConfigurator().selectLayout("Layout: classic");

	findWidget("DemandColumnChart_1").getEmptyWidgetMessage().should.exist;
});
