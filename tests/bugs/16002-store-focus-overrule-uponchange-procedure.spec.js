/*!
 * @AIMMS_FILE=models/Miscellaneous/Miscellaneous.aimms
 */

scenario("16002-store-focus-overrule-uponchange-procedure", () => {
	loadPage("Main Project/home");

	findWidget("superset")
		.getCell(1, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("scalars")
		.getValue("epProducts")
		.should.be.equal("3");

	findWidget("subset")
		.getCell(1, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("scalars")
		.getValue("epProducts")
		.should.be.equal("6");
});
