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

		// Copy a calendar cell to a string cell
		findWidget("MixedTable").copyCell(0, 0);
		findWidget("MixedTable").pasteToCell(0, 5);
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("1965-01-01");

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("");

		// Copy an element parameter cell to a string cell
		findWidget("MixedTable").copyCell(0, 1);
		findWidget("MixedTable").pasteToCell(0, 5);
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("Australia");

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("");

		// Copy an calendar cell with a granularity of seconds cell to a string cell
		findWidget("MixedTable").copyCell(0, 2);
		findWidget("MixedTable").pasteToCell(0, 5);
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("2000-01-01 13:56:02");

		ResetData();
		findWidget("MixedTable")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("");

		// Copy an calendar cell with a granularity of seconds cell to a numerical cell
		findWidget("MixedTable").copyCell(0, 2);
		findWidget("MixedTable").pasteToCell(0, 3);
		findWidget("MixedTable")
			.getCell(0, 3)
			.getValue()
			.should.be.equal("1.00");

		ResetData();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				`Cannot change value of numerical identifier 'NumberOfBooksReadFrom' to a non-numerical value (in widget 'MixedTable')`
			);

		findWidget("MixedTable")
			.getCell(0, 3)
			.getValue()
			.should.be.equal("1.00");
	}
);
