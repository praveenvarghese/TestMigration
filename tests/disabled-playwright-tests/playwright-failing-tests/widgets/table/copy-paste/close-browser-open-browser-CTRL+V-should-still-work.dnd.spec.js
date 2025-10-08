/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
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
		loadPageInNewTab(toPage);
	}

	switchToTab(fromPage.replace("?dnd=true", ""));

	closeTab(fromPage.replace("?dnd=true", ""));

	// Select the position where to paste into
	findWidget(toTable).setSelection(toCell[0], toCell[1], toCell[0], toCell[1]);

	findWidget(toTable).pressCtrl(["v"]);
}

function ResetTable() {
	findWidget("ResetTable").click();
}

scenario("Close browser Tab + Open browser tab. CTRL+V should still work. ", () => {
	// Square block
	PerformCopyPaste(
		"Main Project/CopyPasteGridPage2?dnd=true",
		"DestinationTable",
		"Main Project/CopyPasteGridPage?dnd=true",
		"CopyFromTable",
		[0, 3, 2, 6],
		[1, 3]
	);
	findWidget("CopyFromTable")
		.getSelectionValues(1, 3, 3, 6)
		.should.be.shallowDeepEqual([
			["130.00", "90.00", "100.00", "50.00"],
			["200.00", "150.00", "300.00", "63.00"],
			["", "190.00", "80.00", "45.00"],
		]);

	ResetTable();
});
