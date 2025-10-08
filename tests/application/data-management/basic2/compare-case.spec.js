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

	openDataManager().createCase("case2");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("case2");

	openDataManager()
		.getCase("case1")
		.compare();

	findWidget("Prices")
		.getColHeaderCell(2, 0)
		.getText()
		.should.be.equal("case1");

	findWidget("Prices")
		.getColHeaderCell(2, 1)
		.getText()
		.should.be.equal("case2");

	findWidget("Prices")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("15.00 $/kg");

	findWidget("Prices")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("15.00 $/kg");
});
