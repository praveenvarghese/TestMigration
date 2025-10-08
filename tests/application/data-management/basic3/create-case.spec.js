/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Create case", () => {
	loadPage("Main Project/DataManager");

	// Inititially no cases available because we delete them on page load via
	// InitializeDataManagementPage procedure
	openDataManager()
		.getAvailableCases()
		.should.have.numberOfItems.equal(0);

	openDataManager().createCase("case1");

	// By default when you add case it will become active
	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case1");

	findWidget("cases")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("file:/case1.data");
});
