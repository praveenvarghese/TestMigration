/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Test to verify error message is displayed while block edit and rejection occurs.", () => {
	loadPage("Main Project/table/TableOnDialog&SidePanel");

	findWidget("tableondialog_and_sidepanel")
		.getSidepanels()
		.openSidepanelTab("Meal Planning");

	// Try to block-copy paste
	findWidget("Meal Planning_1").setSelection(3, 0, 0, 0);

	findWidget("Meal Planning_1").pressCtrl(["c"]);

	findWidget("Meal Planning_1").pasteToCell(0, 1);

	findWidget("Meal Planning_1")
		.getSelectionValues(0, 1, 3, 1)
		.should.be.shallowDeepEqual([
			["Beef Stroganoff"],
			["Beef Stroganoff"],
			["Beef Stroganoff"],
			["Beef Stroganoff"],
		]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Meal Planning_1:",
				Message:
					"Rejected changes: 4 (Unable to map '0' to an element within the range of set 'ProductionLines', ...)",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);
});
