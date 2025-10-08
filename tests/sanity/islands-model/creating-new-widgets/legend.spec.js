/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Legend widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Legend widget "SmokeTest_Legend"
	createWidget("Legend", ["SelectedTeamInfinityMember"], "SmokeTest_Legend", 4, 2);

	// Assert "SmokeTest_Legend" is of widget type - Legend
	findWidget("SmokeTest_Legend").should.be.a.widgetOfType("legend");

	// Assert the entries on the Legend widget
	findWidget("SmokeTest_Legend")
		.getLegendEntries()
		.should.eql([
			"GLD",
			"Harish Sunkerikar",
			"JayaPrakash Dasaria",
			"Madhu K Gowda",
			"MR",
			"Pratap Kumble",
			"Praveen Varghese",
		]);
});
