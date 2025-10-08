/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Header titles in Table with pivoting", () => {
	loadPage("Main Project/table/multi-dimensional");

	findWidget("multi-dimensional-table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("15.00 $/kg");

	findWidget("multi.dimensional.table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("15.00 $/kg");

	findWidget("multi-dimensional-table")
		.getCell(0, 0)
		.setValue("7.00");

	findWidget("multi-dimensional-table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("7.00 $/kg");

	findWidget("multi.dimensional.table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("7.00 $/kg");
});
