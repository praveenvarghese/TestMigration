/*!
 * @AIMMS_FILE=models/Bugs/GL00961-TableSorting/TableSorting.aimms
 */

scenario("Asserting table is sorted based on tuples", () => {
	loadPage("Main Project/home");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("jet");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("5");

	findWidget("MyScalar").setValue("0");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("5");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("6.90");

	findWidget("MyScalar").setValue("1");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("jet");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("5");

	findWidget("MyScalar2").setValue("0");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("aap");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("8.31");

	findWidget("MyScalar2").setValue("1");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("jet");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("5");

	findWidget("MyScalarN").setValue("0");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("jet");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("5");

	findWidget("MyScalarN").setValue("1");

	findWidget("MyTable")
		.getCell(0, 0)
		.getValue()
		.should.equal("jet");

	findWidget("MyTable")
		.getCell(0, 1)
		.getValue()
		.should.equal("5");
});
