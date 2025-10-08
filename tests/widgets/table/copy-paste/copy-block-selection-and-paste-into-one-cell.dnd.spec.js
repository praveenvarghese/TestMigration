/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario("Copy one cell and paste it into a block selection", () => {
	loadPage("Main Project/home");

	ResetData();

	findWidget("ExportTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("4.00");

	findWidget("ExportTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("7.00");

	findWidget("ExportTable")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("5.00");

	findWidget("ExportTable")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("8.00");

	findWidget("ExportTable")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("12.00");

	findWidget("ExportTable")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("15.00");

	findWidget("ExportTable")
		.getCell(3, 2)
		.getValue()
		.should.be.equal("13.00");

	findWidget("ExportTable")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("16.00");

	findWidget("ExportTable").copyBlockSelection(0, 0, 1, 1);

	findWidget("ExportTable").pasteToCell(2, 2);

	findWidget("ExportTable")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("4.00");

	findWidget("ExportTable")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("7.00");

	findWidget("ExportTable")
		.getCell(3, 2)
		.getValue()
		.should.be.equal("5.00");

	findWidget("ExportTable")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("8.00");
});
