/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario(
	"Copy from and to a table with all kinds of data types displayed in it, but do it cross-data type (for example, num-to-string)",
	() => {
		loadPage("Main Project/home");

		// Copy a subset-of-integer element cell to a string cell
		findWidget("MixedTable").copyCell(0, 4);
		findWidget("MixedTable").pasteToCell(0, 5);
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("3"); // Parse until possible is the strategy here.

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("");

		// Copy a string cell to an element cell. The string cell has a value that is also present in the range set of the element cell.
		findWidget("MixedTable").copyCell(4, 5);
		findWidget("MixedTable").pasteToCell(0, 1);
		findWidget("MixedTable")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("Ireland");

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("Australia");

		// Copy a numerical cell to a string cell.
		findWidget("MixedTable").copyCell(0, 3);
		findWidget("MixedTable").pasteToCell(0, 5);
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("1");

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("");

		// Copy a string cell with a date to an actual date cell.
		findWidget("MixedTable").copyCell(3, 5);
		findWidget("MixedTable").pasteToCell(0, 0);
		findWidget("MixedTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1980-07-23");

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1965-01-01");
	}
);
