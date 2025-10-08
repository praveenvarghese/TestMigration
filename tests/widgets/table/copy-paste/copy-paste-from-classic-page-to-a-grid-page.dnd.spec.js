/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function PerformCopyPaste(fromPage, fromTable, toPage, toTable, fromSelection, toCell) {
	loadPage(fromPage);

	// Copy a block of cells from the source table and paste it into the destination table on the destination page
	findWidget(fromTable).setSelection(
		fromSelection[0],
		fromSelection[1],
		fromSelection[2],
		fromSelection[3]
	);

	findWidget(fromTable).pressCtrl(["c"]);

	if (fromPage !== toPage) {
		loadPage(toPage);
	}

	// Select the position where to paste into
	findWidget(toTable).setSelection(toCell[0], toCell[1], toCell[0], toCell[1]);

	findWidget(toTable).pressCtrl(["v"]);
}

function ResetTable() {
	findWidget("ResetTable").click();
}

scenario("Copy and paste a single cell - From classic page to a grid page  ", () => {
	// Single cell
	PerformCopyPaste(
		"Main Project/Classic Page Table Widget",
		"DestinationTable_1",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[3, 2, 3, 2],
		[1, 2]
	);
	findWidget("DestinationTable")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("430.00");

	ResetTable();

	// Copy and paste a rectangular block of cells - From classic page to a grid page
	PerformCopyPaste(
		"Main Project/Classic Page Table Widget",
		"DestinationTable_1",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[0, 1, 3, 3],
		[1, 1]
	);
	findWidget("DestinationTable")
		.getSelectionValues(1, 1, 4, 4)
		.should.be.shallowDeepEqual([
			["300.00", "260.00", "130.00", "150.00"],
			["0.00", "740.00", "200.00", "190.00"],
			["820.00", "0.00", "240.00", "350.00"],
			["240.00", "430.00", "0.00", "0.00"],
		]);

	ResetTable();

	// Copy and paste a horizontal row of cells - From classic page to a grid page
	PerformCopyPaste(
		"Main Project/Classic Page Table Widget",
		"DestinationTable_1",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[0, 1, 0, 4],
		[1, 1]
	);
	findWidget("DestinationTable")
		.getSelectionValues(1, 1, 1, 4)
		.should.be.shallowDeepEqual([["300.00", "260.00", "130.00", "90.00"]]);
	ResetTable();

	// Copy and paste a vertical row of cells - From classic page to a grid page
	PerformCopyPaste(
		"Main Project/Classic Page Table Widget",
		"DestinationTable_1",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[0, 1, 4, 1],
		[1, 1]
	);
	findWidget("DestinationTable")
		.getSelectionValues(1, 1, 5, 1)
		.should.be.shallowDeepEqual([["300.00"], ["0.00"], ["820.00"], ["240.00"], ["170.00"]]);
	ResetTable();
});
