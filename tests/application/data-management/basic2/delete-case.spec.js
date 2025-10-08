/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Delete case", () => {
	loadPage("Main Project/DataManager");

	openDataManager()
		.getAvailableCases()
		.should.have.numberOfItems.equal(0);

	openDataManager()
		.getComparedCases()
		.should.have.numberOfItems.equal(0);

	openWidgetManager();

	openDataManager().createCase("case1");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case1");

	openDataManager().deleteCase("case1");

	openDataManager()
		.getAvailableCases()
		.should.have.numberOfItems.equal(0);

	openDataManager()
		.getComparedCases()
		.should.have.numberOfItems.equal(0);
});
