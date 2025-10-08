/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Test to verify error message is displayed while block edit and rejection occurs.", () => {
	loadPage("Main Project/table/TableOnDialog&SidePanel");

	findWidget("ShoeDialog").click();

	waitForBackgroundActionToComplete();

	getDialog().should.exist;

	// Try to block-copy paste
	findWidget("Meal Planning").setSelection(3, 2, 0, 0);

	findWidget("Meal Planning").pressCtrl(["c"]);

	findWidget("Meal Planning").pasteToCell(4, 0);

	findWidget("Meal Planning")
		.getSelectionValues(4, 0, 7, 2)
		.should.be.shallowDeepEqual([
			["0.00", "Beef Stroganoff", "5.00 $/meal"],
			["1.00", "Beef Stroganoff", "4.80 $/meal"],
			["1.00", "Beef Stroganoff", "4.60 $/meal"],
			["1.00", "Beef Stroganoff", "4.40 $/meal"],
		]);

	findDialog()
		.findButton("OK")
		.click();
});
