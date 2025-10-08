/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Bar-Line Chart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Bar-Line Chart widget "SmokeTest_BarLineChart"
	createWidget("BarLineChart", ["XCoordinate", "YCoordinate"], "SmokeTest_BarLineChart", 14, 4);
	closeWidgetManager();

	// Assert "SmokeTest_BarLineChart" is of widget type - Bar-Line chart
	findWidget("SmokeTest_BarLineChart").should.be.a.widgetOfType("barlinechart");

	// Assert the data on Bar-Line Chart
	findWidget("SmokeTest_BarLineChart")
		.getCountOfPoints()
		.should.be.equal(7);
	findWidget("SmokeTest_BarLineChart")
		.getNumberOfBars()
		.should.be.equal(7);
});
