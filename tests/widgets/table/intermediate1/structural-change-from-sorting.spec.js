/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table focus support tests", () => {
	loadPage("Main Project/table/structural changes/sorting");

	findWidget("structural change due to sorting table")
		.getCell(0, 0)
		.setValue("100");

	findWidget("structural change due to sorting table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("100.00 $/meal");

	findWidget("structural change due to sorting table")
		.getRefreshButton()
		.click();

	findWidget("structural change due to sorting table")
		.getCell(19, 0)
		.getValue()
		.should.be.equal("100.00 $/meal");
});
