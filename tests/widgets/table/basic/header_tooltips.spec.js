/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table shows correct row headers", () => {
	loadPage("Main Project/table/multi-dimensional");

	findWidget("multi-dimensional-table")
		.getRowHeaderCell(0, 0)
		.getParentTooltip()
		.should.be.equal("Ingredient Price for recipe");

	findWidget("multi-dimensional-table")
		.getColHeaderCell(0, 0)
		.getParentTooltip()
		.should.be.equal("One");

	getPageMenu().navigateToPage("Main Project/table/TableOnDialog&SidePanel");

	findWidget("ShoeDialog").click();

	waitForBackgroundActionToComplete();

	getDialog().should.exist;

	findWidget("Meal Planning")
		.getColHeaderCell(0, 2)
		.getParentTooltip()
		.should.be.equal("Price for a Meal");

	findWidget("Meal Planning")
		.getRowHeaderCell(0, 0)
		.getParentTooltip()
		.should.be.equal("Meal on day 1");

	findDialog()
		.findButton("OK")
		.click();

	waitForBackgroundActionToComplete();

	findWidget("tableondialog_and_sidepanel")
		.getSidepanels()
		.openSidepanelTab("Meal Planning");

	findWidget("Meal Planning_1")
		.getRowHeaderCell(0, 0)
		.getParentTooltip()
		.should.be.equal("Meal on day 1");

	// Try to block-edit
	findWidget("Meal Planning_1")
		.getColHeaderCell(0, 2)
		.getParentTooltip()
		.should.be.equal("Price for a Meal");
});
