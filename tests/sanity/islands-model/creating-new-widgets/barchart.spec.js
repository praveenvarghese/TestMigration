/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new BarChart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a BarChart widget "SmokeTest_BarChart"
	createWidget("BarChart", ["IA_JobStart", "IA_JobDuration"], "SmokeTest_BarChart", 8, 4);

	// Assert "SmokeTest_BarChart" is of widget type - Barchart
	findWidget("SmokeTest_BarChart").should.be.a.widgetOfType("barchart");

	// Assert the data on BarChart
	findWidget("SmokeTest_BarChart")
		.getNumberOfBars()
		.should.be.equal(1163);
});
