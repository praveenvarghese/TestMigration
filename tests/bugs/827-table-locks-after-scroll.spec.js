/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Scrolling after changing a binary value in a table with fast editing disabled AND hidden row/col header locked up the table",
	() => {
		loadPage("Main Project/TableScrollTest");

		findWidget("ScrollTestTable").scrollDown(20);
		findWidget("ScrollTestTable")
			.getCell(27, 1)
			.setValue(false);

		// Now scrolling should still work and the table should be editable afterwards. So simply
		// scroll and change another value.
		findWidget("ScrollTestTable").scrollDown(20);
		findWidget("ScrollTestTable")
			.getCell(47, 1)
			.setValue(false);

		findWidget("ScrollTestTable")
			.getCell(47, 1)
			.getValue()
			.should.eql(false);
	}
);
