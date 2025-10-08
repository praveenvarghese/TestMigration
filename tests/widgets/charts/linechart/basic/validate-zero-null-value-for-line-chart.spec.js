/*!
 * @AIMMS_FILE=models/Bugs/GL853-EmptyLinechartAfterSwitch/TransNet.aimms
 */

scenario("Validate zero and null values impact on line chart ", () => {
	loadPage("Main Project/CubeDomain1");

	// Check the data of the line chart when null value are passed
	findWidget("Table1")
		.findPoints()
		.should.have.numberOfItems(30);

	findWidget("supplytable")
		.getCell(0, 0)
		.setValue("0");

	findWidget("Table1")
		.findPoints()
		.should.have.numberOfItems(30);

	findWidget("supplytable")
		.getCell(0, 0)
		.setValue("");

	findWidget("Table1")
		.findPoints()
		.should.have.numberOfItems(30);
});
