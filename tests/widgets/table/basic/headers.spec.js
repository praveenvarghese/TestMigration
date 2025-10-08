/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table shows correct row headers", () => {
	loadPage("Main Project/table/multi-dimensional?table-v2=true");

	findWidget("multi-dimensional-table")
		.getRowHeaderCell(0, 2)
		.getText()
		.should.be.equal("April 2013");

	findWidget("multi-dimensional-table")
		.getColHeaderCell(1, 2)
		.getText()
		.should.be.equal("Salmon & Rice");
});
