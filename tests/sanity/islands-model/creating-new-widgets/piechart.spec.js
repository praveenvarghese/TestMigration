/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Pie Chart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Pie Chart widget "SmokeTest_PieChart"
	createWidget("PieChart", ["IA_JobStart", "IA_JobDuration"], "SmokeTest_PieChart", 8, 4);

	// Assert "SmokeTest_PieChart" is of widget type - Pie chart
	findWidget("SmokeTest_PieChart").should.be.a.widgetOfType("piechart");

	// Assert the data on Pie Chart
	findWidget("SmokeTest_PieChart")
		.getWedgesCount()
		.should.be.equal(9);
});
