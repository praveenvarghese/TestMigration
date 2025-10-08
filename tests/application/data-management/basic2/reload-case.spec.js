/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Reload case", () => {
	loadPage("Main Project/DataManager");

	openDataManager().createCase("case1");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case1");

	findWidget("Scenarios").select("Salmon & Rice");

	// webui::IsCaseModifiedBool should become true
	findWidget("cases")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("true");

	openDataManager().reloadCase("case1");

	// After reload webui::IsCaseModifiedBool should become false
	findWidget("cases")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("false");
});
