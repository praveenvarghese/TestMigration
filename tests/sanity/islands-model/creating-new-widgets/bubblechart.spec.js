/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Bubble Chart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Bubble Chart widget "SmokeTest_BubbleChart"
	createWidget("BubbleChart", ["BB_X", "BB_Y", "BB_Size"], "SmokeTest_BubbleChart", 8, 4);

	// Assert "SmokeTest_BubbleChart" is of widget type - Bubble chart
	findWidget("SmokeTest_BubbleChart").should.be.a.widgetOfType("bubblechart");

	// Assert the data on Bubble Chart
	findWidget("SmokeTest_BubbleChart")
		.getBubblesCount()
		.should.be.equal(182);
});
