/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Test to verify error message is displayed while block edit and rejection occurs.", () => {
	loadPage("Main Project/home");

	findWidget("ResetData").click();

	// Try to block-copy paste
	findWidget("MixedTable").setSelection(3, 0, 0, 0);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToCell(0, 2);

	findWidget("MixedTable")
		.getSelectionValues(0, 2, 3, 2)
		.should.be.shallowDeepEqual([["2000-01-01 13:56:02"], ["2000-01-01 14:25:12"], [""], [""]]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "MixedTable:",
				Message:
					"Rejected changes: 4 (Unable to map '1965-01-01' to an element within the range of calendar 'AWholeDay', ...)",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Try to block-copy paste
	findWidget("MixedTable").setSelection(0, 1, 3, 1);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToCell(0, 4);

	findWidget("MixedTable")
		.getSelectionValues(0, 4, 3, 4)
		.should.be.shallowDeepEqual([["3.00"], ["3.00"], ["5.00"], ["4.00"]]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "MixedTable:",
				Message:
					"Rejected changes: 4 (Unable to map 'Australia' to an element within the range of set 'StarRatings', ...)",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Try to block-copy paste in to a dropdown of different values
	findWidget("MixedTable").setSelection(3, 0, 0, 0);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToCell(0, 5);

	findWidget("MixedTable")
		.getSelectionValues(0, 5, 3, 5)
		.should.be.shallowDeepEqual([
			["1965-01-01"],
			["1948-06-21"],
			["1990-08-15"],
			["1854-10-16"],
		]);

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Try to block-copy paste in to a checkbox cell
	findWidget("MixedTable").setSelection(3, 4, 0, 4);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToBooleanCell(0, 6);

	findWidget("MixedTable")
		.getSelectionValues(0, 6, 3, 6)
		.should.be.shallowDeepEqual([["0.00"], ["1.00"], ["0.00"], ["1.00"]]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "MixedTable:",
				Message: "Rejected changes: 4 (3 is not in the allowed range of {0..1}, ...)",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Try to block-copy paste for a horizontal row
	findWidget("MixedTable").setSelection(1, 5, 1, 3);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToCell(1, 2);

	findWidget("MixedTable")
		.getSelectionValues(1, 2, 1, 4)
		.should.be.shallowDeepEqual([["2000-01-01 14:25:12", "3.00", "3.00"]]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "MixedTable:",
				Message: `Rejected changes: 2 (Unable to parse '2' to a valid date with format '%c%y-%m-%d %H:%M:%S%TZ(webui::WebApplicationTimeZone)|""|" DST"|', ...), applied changes: 1`,
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	findWidget("ResetData").click();

	// Try to single cell string value of a element parameter value to a EP
	findWidget("MixedTable").setSelection(4, 5, 4, 5);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToCell(0, 1);

	findWidget("MixedTable")
		.getSelectionValues(0, 1, 0, 1)
		.should.be.shallowDeepEqual([["Ireland"]]);

	// Try to single string value of a date to a date cell
	findWidget("MixedTable").setSelection(3, 5, 3, 5);

	findWidget("MixedTable").pressCtrl(["c"]);
	findWidget("MixedTable").pasteToCell(0, 0);

	findWidget("MixedTable")
		.getSelectionValues(0, 0, 0, 0)
		.should.be.shallowDeepEqual([["1980-07-23"]]);

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	// Try to scattred block-edit
	findWidget("MixedTable").setScatterSelection([
		[1, 1],
		[1, 3],
	]);

	findWidget("MixedTable").pressCtrl(["c"]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Copy:",
				Message: "Copying of multiple selections is not supported.",
				Icon: "icon-spam",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);
});
