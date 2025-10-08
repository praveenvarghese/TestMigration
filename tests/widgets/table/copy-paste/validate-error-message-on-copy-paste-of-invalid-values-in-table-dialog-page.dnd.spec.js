/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Test to verify error message is displayed while copy/paste and rejection occurs.", () => {
	loadPage("Main Project/table/TableOnDialog&SidePanel");

	findWidget("ShoeDialog").click();

	waitForBackgroundActionToComplete();

	getDialog().should.exist;

	// Try to block-copy paste
	findWidget("Meal Planning").setSelection(3, 0, 0, 0);

	findWidget("Meal Planning").pressCtrl(["c"]);

	findWidget("Meal Planning").pasteToCell(0, 1);

	findWidget("Meal Planning")
		.getSelectionValues(0, 1, 3, 1)
		.should.be.shallowDeepEqual([
			["Beef Stroganoff"],
			["Beef Stroganoff"],
			["Beef Stroganoff"],
			["Beef Stroganoff"],
		]);

	findDialog()
		.findButton("OK")
		.click();

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Meal Planning:",
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
