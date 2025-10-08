/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Test to verify error message is displayed while block edit and rejection occurs.", () => {
	loadPage("Main Project/table/TableOnDialog&SidePanel?table-v2=true");

	findWidget("tableondialog_and_sidepanel")
		.getSidepanels()
		.openSidepanelTab("Meal Planning");

	// Try to block-edit
	findWidget("Meal Planning_1").setSelection(3, 2, 0, 0);

	findWidget("Meal Planning_1")
		.pressKeys("8")
		.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

	findWidget("Meal Planning_1")
		.getSelectionValues(0, 0, 3, 2)
		.should.be.shallowDeepEqual([
			["0.00", "Beef Stroganoff", "8.00 $/meal"],
			["1.00", "Beef Stroganoff", "8.00 $/meal"],
			["1.00", "Beef Stroganoff", "8.00 $/meal"],
			["1.00", "Beef Stroganoff", "8.00 $/meal"],
		]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Meal Planning_1:",
				Message:
					"Rejected changes: 8 (8 is not in the allowed range of {0..1}, ...), applied changes: 4",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);

	pageRefresh();

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(0);

	findWidget("tableondialog_and_sidepanel")
		.getSidepanels()
		.openSidepanelTab("Meal Planning");

	// Try to scattred block-edit
	findWidget("Meal Planning_1").setScatterSelection([
		[0, 1],
		[0, 2],
	]);

	findWidget("Meal Planning_1")
		.pressKeys("1")
		.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

	findWidget("Meal Planning_1")
		.getSelectionValues(0, 1, 0, 1)
		.should.be.shallowDeepEqual([]);

	findWidget("Meal Planning_1")
		.getSelectionValues(0, 2, 0, 2)
		.should.be.shallowDeepEqual([["1.00 $/meal"]]);

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Meal Planning_1:",
				Message:
					"Rejected changes: 1 (Cannot change value of element parameter 'MealToProductionLineMapping' to a non-string value), applied changes: 2",
				Icon: "icon-warning2",
				Status: "Unread",
			},
		]);
});
