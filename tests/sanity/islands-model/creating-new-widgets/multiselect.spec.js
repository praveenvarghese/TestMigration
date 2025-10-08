/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new MultiSelect widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a MultiSelect widget "SmokeTest_MultiSelect"
	createWidget("MultiSelect", ["SelectedTeamInfinityMember"], "SmokeTest_MultiSelect", 4, 2);

	// Assert "SmokeTest_MultiSelect" is of widget type - MultiSelect
	findWidget("SmokeTest_MultiSelect").should.be.a.widgetOfType("multiselect");

	// Assert the entries on the MultiSelect widget
	findWidget("SmokeTest_MultiSelect")
		.getAllEntries()
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
