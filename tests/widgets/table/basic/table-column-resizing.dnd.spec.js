/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Header titles in Table with pivoting", () => {
	loadPage("Main Project/table/multi-dimensional?table-v2=true");

	findWidget("multi.dimensional.table")
		.getCol(0)
		.getSize()
		.should.be.within(45, 55);

	findWidget("multi-dimensional-table")
		.getCol(0)
		.resizeBy(50)
		.getSize()
		.should.be.within(95, 105);
});
