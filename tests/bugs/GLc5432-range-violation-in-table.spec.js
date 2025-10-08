/*!
 * @AIMMS_FILE=models/Bugs/GLc5432-RangeViolation/OutOfRange.aimms
 */

scenario("Type out of range value in table", () => {
	loadPage("Main Project/home");

	findWidget("PTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("12.00");

	findWidget("PTable")
		.getCell(0, 2)
		.setValue("-1.00");

	findWidget("PTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("12.00");

	findWidget("PTable")
		.getCell(0, 2)
		.setValue("-2.00");

	findWidget("PTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("12.00");
});
