/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Set active case", () => {
	loadPage("Main Project/DataManager");

	openDataManager().createCase("case1");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case1");

	openDataManager().createCase("case2");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case2");

	// loadCase means setting it as active
	openDataManager().setActiveCase("case1");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case1");
});
