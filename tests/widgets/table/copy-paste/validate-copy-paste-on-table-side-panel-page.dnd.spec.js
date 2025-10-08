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
	findWidget("Meal Planning_1").setSelection(3, 2, 0, 0);

	findWidget("Meal Planning_1").pressCtrl(["c"]);

	findWidget("Meal Planning_1").pasteToCell(4, 0);

	findWidget("Meal Planning_1")
		.getSelectionValues(4, 0, 7, 2)
		.should.be.shallowDeepEqual([
			["0.00", "Beef Stroganoff", "5.00 $/meal"],
			["1.00", "Beef Stroganoff", "4.80 $/meal"],
			["1.00", "Beef Stroganoff", "4.60 $/meal"],
			["1.00", "Beef Stroganoff", "4.40 $/meal"],
		]);
});
