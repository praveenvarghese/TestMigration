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

scenario("Copy from a table and paste on a table on a different page.", () => {
	// Single cell
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage",
		"CopyFromTable",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[2, 4, 2, 4],
		[1, 2]
	);
	findWidget("DestinationTable")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("190.00");

	// Change a value to the infinity symbol and copy it
	loadPage("Main Project/CopyPasteGridPage");
	findWidget("CopyFromTable")
		.getCell(4, 5)
		.setValue("inf");
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage",
		"CopyFromTable",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[4, 5, 4, 5],
		[1, 2]
	);
	findWidget("DestinationTable")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("∞");

	// Do another paste, using the same clipboard value
	findWidget("DestinationTable").setSelection(3, 3, 3, 3);
	findWidget("DestinationTable").pressCtrl(["v"]);
	findWidget("DestinationTable")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("∞");
	ResetTable();

	// Square block
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage",
		"CopyFromTable",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[0, 3, 2, 6],
		[1, 2]
	);
	findWidget("DestinationTable")
		.getSelectionValues(1, 2, 3, 5)
		.should.be.shallowDeepEqual([
			["130.00", "90.00", "100.00", "50.00"],
			["200.00", "150.00", "300.00", "63.00"],
			["240.00", "190.00", "80.00", "45.00"],
		]);

	ResetTable();

	// STILL FAILS
	// Copy a horizontal row, but paste it into the right-most cell of a row in the destination table.
	// The first value of the horizontal row should still be pasted, even if the rest cannot be paster.
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage",
		"CopyFromTable",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[1, 0, 1, 6],
		[3, 6]
	);
	findWidget("DestinationTable")
		.getCell(3, 6)
		.getValue()
		.should.be.equal("275.00");
	ResetTable();

	// Horizontal row
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage",
		"CopyFromTable",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[1, 0, 1, 6],
		[3, 0]
	);
	findWidget("DestinationTable")
		.getSelectionValues(3, 0, 3, 6)
		.should.be.shallowDeepEqual([
			["275.00", "240.00", "740.00", "200.00", "150.00", "300.00", "63.00"],
		]);
	ResetTable();

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "DestinationTable:",
				Message:
					"Rejected changes: 1 (Cannot change value of numerical identifier 'FullDailyNumberOfPassengers' to a non-numerical value), applied changes: 6",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Vertical row
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage",
		"CopyFromTable",
		"Main Project/CopyPasteGridPage2",
		"DestinationTable",
		[1, 0, 6, 0],
		[0, 3]
	);
	findWidget("DestinationTable")
		.getSelectionValues(0, 3, 5, 3)
		.should.be.shallowDeepEqual([
			["275.00"],
			["170.00"],
			["80.00"],
			["60.00"],
			["98.00"],
			["30.00"],
		]);

	// // Discontinuous range of cells
	// loadPage("Main Project/CopyPasteGridPage");
	// findWidget("CopyFromTable").setScatterSelection([
	// 	[0, 0],
	// 	[2, 1],
	// 	[4, 3],
	// ]);
	// findWidget("CopyFromTable").pressCtrl(["c"]);
	// loadPage("Main Project/CopyPasteGridPage2");
	// findWidget("DestinationTable").setSelection(0, 0, 0, 0);
	// findWidget("DestinationTable").pressCtrl(["v"]);
	// findWidget("DestinationTable")
	// 	.getSelectionValues(0, 0, 4, 4)
	// 	.should.be.shallowDeepEqual([
	// 		["0.00", "300.00", "260.00", "130.00", "90.00"],
	// 		["275.00", "0.00", "740.00", "200.00", "150.00"],
	// 		["170.00", "820.00", "0.00", "240.00", "190.00"],
	// 		["80.00", "240.00", "430.00", "0.00", "350.00"],
	// 		["60.00", "170.00", "380.00", "310.00", "0.00"], // TODO: UITZOEKEN VAN DE ECHTE WAARDEN
	// 	]);
});
