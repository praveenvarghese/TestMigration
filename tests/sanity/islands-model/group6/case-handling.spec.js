/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario("Perform a number of case handling scenarios.", () => {
	loadPage("Main Project/DebugPage");

	// Obtain the list of available cases and assert that this is the expected list.
	openDataManager()
		.getAvailableCasesAsText()
		.should.eql(["767Case", "DefaultCase", "עמך כולם צדיקים", "先秦兩漢"]);

	// Save a case of the starting situation
	openDataManager().createCase("InitialSituation");

	// Change some values in the table
	findWidget("qqqqqqq")
		.getCell(2, 1)
		.setValue("819.00"); // Was 820 originally

	findWidget("qqqqqqq")
		.getCell(6, 0)
		.setValue("85.00"); // Was 30 originally

	// Save a case of the new situation
	openDataManager().createCase("AfterChangingValues");

	// Now load back the case of the initial situation
	openDataManager().setActiveCase("InitialSituation");

	// Assert that the original values are back again
	findWidget("qqqqqqq")
		.getCell(2, 1)
		.getValue()
		.should.be.eql("820.00");

	findWidget("qqqqqqq")
		.getCell(6, 0)
		.getValue()
		.should.be.eql("30.00");

	// Verify that the 2 new cases are present in the list of available cases
	openDataManager()
		.getAvailableCasesAsText()
		.should.eql([
			"767Case",
			"AfterChangingValues",
			"DefaultCase",
			"InitialSituation",
			"עמך כולם צדיקים",
			"先秦兩漢",
		]);

	// Delete the 2 newly created cases
	openDataManager().deleteCase("AfterChangingValues");
	openDataManager().deleteCase("InitialSituation");

	// And verify the deletion
	openDataManager()
		.getAvailableCasesAsText()
		.should.eql(["767Case", "DefaultCase", "עמך כולם צדיקים", "先秦兩漢"]);
});
