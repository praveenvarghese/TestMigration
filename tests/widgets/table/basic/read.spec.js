/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table shows data", () => {
	loadPage("Main Project/table/render");

	findWidget("RenderTable")
		.getNumColsInColHeaderViewport()
		.should.be.equal(3);

	findWidget("RenderTable")
		.getNumRowsInRowHeaderViewport()
		.should.be.equal(20);

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("3.00 $/meal");
});
