/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table external structural changes tests - changing contents", () => {
	loadPage("Main Project/table/structural changes?table-v2=false");

	// This makes sure that the optiondialog is already open and the contents
	// editor tab active.
	findWidget("table-with-multiple-identifiers")
		.getContentsOptionEditor()
		.setContents("SelectMeal", "MealPopularityFactor");

	findWidget("table-with-multiple-identifiers")
		.getCell(4, 0)
		.setValue(false);

	findWidget("table-with-multiple-identifiers").getRefreshButton().should.exist;

	findWidget("table-with-multiple-identifiers")
		.getContentsOptionEditor()
		.setContents("MealPopularityFactor");

	findWidget("table-with-multiple-identifiers").getRefreshButton().should.not.exist;

	findWidget("table-with-multiple-identifiers")
		.getCell(4, 0)
		.getValue()
		.should.be.equal("0.90");
});
