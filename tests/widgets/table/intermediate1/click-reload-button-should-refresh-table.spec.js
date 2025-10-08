/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table external structural changes tests", () => {
	loadPage("Main Project/table/structural changes");

	findWidget("table-with-multiple-identifiers")
		.getCell(4, 0)
		.setValue(false);

	findWidget("table-with-multiple-identifiers").getRefreshButton().should.exist;

	findWidget("table-with-multiple-identifiers")
		.getRefreshButton()
		.click();

	findWidget("table-with-multiple-identifiers").getRefreshButton().should.not.exist;

	findWidget("table-with-multiple-identifiers")
		.getCell(6, 1)
		.getValue()
		.should.be.equal("0.90");
});
