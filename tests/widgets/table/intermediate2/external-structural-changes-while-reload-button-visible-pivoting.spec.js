/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table external structural changes tests", () => {
	loadPage("Main Project/table/structural changes");

	findWidget("table-with-multiple-identifiers")
		.getCell(4, 0)
		.setValue(false);

	findWidget("table-with-multiple-identifiers").getRefreshButton().should.exist;

	findWidget("table-with-multiple-identifiers").openOptionDialog();

	findWidget("table-with-multiple-identifiers")
		.dragIndex("m")
		.dropIn("Columns");

	findWidget("table-with-multiple-identifiers").getRefreshButton().should.not.exist;

	findWidget("table-with-multiple-identifiers")
		.getNumRowsInGridViewport()
		.should.be.equal(1);
});
