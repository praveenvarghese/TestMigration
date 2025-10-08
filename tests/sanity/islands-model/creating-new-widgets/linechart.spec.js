/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Line Chart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Line Chart widget "SmokeTest_LineChart"
	createWidget("LineChart", ["BB_X", "BB_Y"], "SmokeTest_LineChart", 8, 4);

	// Assert "SmokeTest_LineChart" is of widget type - Line chart
	findWidget("SmokeTest_LineChart").should.be.a.widgetOfType("linechart");

	// Assert the data on Line Chart
	findWidget("SmokeTest_LineChart")
		.getCountOfPoints()
		.should.be.equal(364);
});
