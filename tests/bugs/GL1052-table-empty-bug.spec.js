/*!
 * @AIMMS_FILE=models/Bugs/GL1052-TableFocusBug/Table Focus.aimms
 */

scenario("GL1052 - Table is getting empty when focus is changed", () => {
	loadPage("Main Project/home");

	findWidget("Master Selection").select(["Route-10"]);

	findWidget("Master Table")
		.getCell(0, 0)
		.getValue()
		.should.eql("114.56");

	findWidget("Master Selection").select(["Route-1"]);

	findWidget("Master Table")
		.getCell(0, 0)
		.getValue()
		.should.eql("831.42");

	findWidget("Master Table")
		.getCell(9, 0)
		.click();

	findWidget("Master Selection").deselect(["Route-10"]);

	findWidget("Master Table")
		.getCell(0, 0)
		.getValue()
		.should.eql("831.42");
});
