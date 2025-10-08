/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario("Some exceptions when copy/pasting.", () => {
	loadPage("Main Project/home");

	ResetData();

	// Copy a horizontal row of string values representing numbers BUT WITH ONE EXCEPTION and copy these to a numeric table.
	findWidget("StringTable").setSelection(8, 0, 8, 6);
	findWidget("StringTable").pressCtrl(["c"]);
	findWidget("ExportTable").pasteToCell(0, 0);
	findWidget("ExportTable")
		.getSelectionValues(0, 0, 0, 6)
		.should.be.shallowDeepEqual([
			["12.00", "7.00", "18.00", "21.00", "24.00", "27.00", "30.00"],
		]);

	ResetData();

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "ExportTable:",
				Message:
					"Rejected changes: 1 (Cannot change value of numerical identifier 'Export' to a non-numerical value), applied changes: 6",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Copy a horizontal row of values onto the exact same range as it is copied from. The result should obviously be
	// an unchanged table.
	findWidget("ExportTable").setSelection(8, 0, 8, 6);
	findWidget("ExportTable").pressCtrl(["c"]);
	findWidget("ExportTable").pasteToCell(8, 0);
	findWidget("ExportTable")
		.getSelectionValues(8, 0, 8, 6)
		.should.be.shallowDeepEqual([
			["12.00", "15.00", "18.00", "21.00", "24.00", "27.00", "30.00"],
		]);

	ResetData();

	// Clear some string values and test out the copying of empty cells
	findWidget("ClearStrings").click();

	// Copy a horizontal row of string values representing numbers BUT WITH ONE EXCEPTION and copy these to a numeric table.
	findWidget("StringTable").setSelection(0, 0, 0, 6);
	findWidget("StringTable").pressCtrl(["c"]);
	findWidget("StringTable").pasteToCell(8, 0);
	findWidget("StringTable")
		.getSelectionValues(8, 0, 8, 6)
		.should.be.shallowDeepEqual([["", "", "", "13", "16", "19", "22"]]);

	// Also paste the same string data onto the numerical table. Values of 0 are expected in the "empty" cells.
	findWidget("ExportTable").pasteToCell(8, 0);
	findWidget("ExportTable")
		.getSelectionValues(8, 0, 8, 6)
		.should.be.shallowDeepEqual([
			["12.00", "15.00", "18.00", "13.00", "16.00", "19.00", "22.00"],
		]);

	ResetData();

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "ExportTable:",
				Message:
					"Rejected changes: 3 (Cannot change value of numerical identifier 'Export' to a non-numerical value, ...), applied changes: 4",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Copy and paste a horizontal row of string values, partly containing exotic characters.
	findWidget("CreateExoticCharacters").click();

	findWidget("StringTable").setSelection(2, 0, 2, 6);
	findWidget("StringTable").pressCtrl(["c"]);
	findWidget("StringTable").pasteToCell(8, 0);
	findWidget("StringTable")
		.getSelectionValues(8, 0, 8, 6)
		.should.be.shallowDeepEqual([
			[
				"6",
				"9",
				"12",
				"读写汉字 - 学中文 Australia Belgium אָלֶף־בֵּית עִבְרִי",
				"读写汉字 - 学中文 Australia The Netherlands אָלֶף־בֵּית עִבְרִי",
				"读写汉字 - 学中文 Australia Spain אָלֶף־בֵּית עִבְרִי",
				"读写汉字 - 学中文 Australia Austria אָלֶף־בֵּית עִבְרִי",
			],
		]);

	ResetData();
});
