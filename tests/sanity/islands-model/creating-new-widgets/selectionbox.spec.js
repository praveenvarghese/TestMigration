/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new SelectionBox widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a SelectionBox widget "SmokeTest_SelectionBox"
	createWidget("SelectionBox", ["SelectedTeamInfinityMember"], "SmokeTest_SelectionBox");

	// Assert "SmokeTest_SelectionBox" is of widget type - SelectionBox
	findWidget("SmokeTest_SelectionBox").should.be.a.widgetOfType("selectionbox");

	// Assert the entries on the SelectionBox widget
	findWidget("SmokeTest_SelectionBox")
		.getAllFullyVisibleOptions()
		.should.eql([
			"GLD",
			"Harish Sunkerikar",
			"JayaPrakash Dasaria",
			"Madhu K Gowda",
			"MR",
			"Pratap Kumble",
		]);
});
