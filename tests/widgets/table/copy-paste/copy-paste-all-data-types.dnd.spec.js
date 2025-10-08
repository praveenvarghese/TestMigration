/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario("Copy from and to a table with all kinds of data types displayed in it.", () => {
	loadPage("Main Project/home");

	ResetData();

	// Copy a calendar cell to another calendar cell
	findWidget("MixedTable").copyCell(0, 0);
	findWidget("MixedTable").pasteToCell(2, 0);
	findWidget("MixedTable")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("1965-01-01");

	ResetData();

	// Copy an element parameter cell to another element parameter cell
	findWidget("MixedTable").copyCell(0, 1);
	findWidget("MixedTable").pasteToCell(2, 1);
	findWidget("MixedTable")
		.getCell(2, 1)
		.getValue()
		.should.be.equal("Australia");

	ResetData();

	// Copy a calendar cell with seconds granularity to another such cell
	findWidget("MixedTable").copyCell(0, 2);
	findWidget("MixedTable").pasteToCell(2, 2);
	findWidget("MixedTable")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("2000-01-01 13:56:02");

	ResetData();

	// Copy a numerical cell to another such cell
	findWidget("MixedTable").copyCell(0, 3);
	findWidget("MixedTable").pasteToCell(2, 3);
	findWidget("MixedTable")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("1.00");

	ResetData();

	// Copy a subset-of-integer cell to another such cell
	findWidget("MixedTable").copyCell(0, 4);
	findWidget("MixedTable").pasteToCell(2, 4);
	findWidget("MixedTable")
		.getCell(2, 4)
		.getValue()
		.should.be.equal("3");

	ResetData();

	// Copy a string cell to another such cell
	findWidget("MixedTable").copyCell(1, 5);
	findWidget("MixedTable").pasteToCell(2, 5);
	findWidget("MixedTable")
		.getCell(2, 5)
		.getValue()
		.should.be.equal("Hello");

	// Copy a boolean cell to another such cell
	findWidget("MixedTable").copyCell(1, 6);
	findWidget("MixedTable").pasteToCell(2, 6);
	findWidget("MixedTable")
		.getCell(2, 6)
		.getValue()
		.should.be.equal(true);

	ResetData();
});
