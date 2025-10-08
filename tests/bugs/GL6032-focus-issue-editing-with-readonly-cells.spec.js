/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"GL6032-focus issue with readonly cells and user not able to edit the readonly cell in the table",
	() => {
		loadPage("Main Project/Item Actions/Table Data");

		findWidget("IND Cities Details")
			.getCell(1, 0)
			.click(5, 5)
			.isFocused()
			.should.be.equal(true);

		findWidget("IND Cities Details")
			.getCell(1, 0)
			.setValue("1000");

		findWidget("IND Cities Details")
			.getCell(1, 0)
			.getValue("1000")
			.should.be.equal("500.00 kg");
	}
);
