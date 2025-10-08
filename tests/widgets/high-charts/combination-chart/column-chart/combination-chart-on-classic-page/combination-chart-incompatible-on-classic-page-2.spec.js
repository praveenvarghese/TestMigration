/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Combination chart widget on Grid page when Disable Grid Layout", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1").getEmptyWidgetMessage().should.not.exist;

	// Check the box Disable Grid Layout in Experiemental Features
	openExperiementalFeatureConfigurator();

	getExperiementalFeatureConfigurator().enableExperiementalFeature("Disable Grid Layout");

	pageRefresh();

	findWidget("DemandColumnChart_1").getEmptyWidgetMessage().should.exist;
});
