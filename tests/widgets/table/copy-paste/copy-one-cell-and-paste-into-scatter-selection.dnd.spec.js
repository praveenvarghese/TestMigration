/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario("Copy one cell and paste it into a scatter selection", () => {
	loadPage("Main Project/home?table-v2=true");

	ResetData();

	findWidget("ExportTable")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("8.00");

	findWidget("ExportTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("4.00");

	findWidget("ExportTable")
		.getCell(2, 1)
		.getValue()
		.should.be.equal("9.00");

	findWidget("ExportTable")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("14.00");

	findWidget("ExportTable").copyCell(1, 1);

	findWidget("ExportTable").pasteToScatterSelection([
		[0, 0],
		[2, 1],
		[1, 3],
	]);

	findWidget("ExportTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("8.00");

	findWidget("ExportTable")
		.getCell(2, 1)
		.getValue()
		.should.be.equal("8.00");

	findWidget("ExportTable")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("8.00");
});
