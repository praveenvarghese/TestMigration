/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new TreeMap widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a TreeMap widget "SmokeTest_TreeMapChart"
	createWidget("TreeMap", ["IA_JobStart", "IA_JobDuration"], "SmokeTest_TreeMapChart", 8, 4);

	// Assert "SmokeTest_TreeMapChart" is of widget type - TreeMap
	findWidget("SmokeTest_TreeMapChart").should.be.a.widgetOfType("treemap");

	// Assert the data on TreeMap
	findWidget("SmokeTest_TreeMapChart")
		.getRectanglesCount()
		.should.be.equal(7);
});
