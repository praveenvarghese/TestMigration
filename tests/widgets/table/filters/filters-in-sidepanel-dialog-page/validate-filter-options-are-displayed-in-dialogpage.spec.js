/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("validate filter option is not displayed on an dialog as well as dialog page", () => {
	loadPage("Main Project/home");

	findWidget("OpenDialog").click();

	findWidget("TableFilterDialog")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("TableFilterDialog")
		.isRowFilterOptionDisplayed(0)
		.should.be.equal(true);

	findWidget("TableFilterDialog").closePane();

	findWidget("TableFilterDialog")
		.isColFilterOptionDisplayed(0)
		.should.be.equal(true);

	findWidget("TableFilterDialog").closePane();

	findDialog()
		.findButton("OK")
		.click();

	openAppManager().navigateToPage("Main Project/FilterDialogPage");

	findWidget("TableFilterDialog")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("TableFilterDialog")
		.isRowFilterOptionDisplayed(0)
		.should.be.equal(true);

	findWidget("TableFilterDialog").closePane();

	findWidget("TableFilterDialog")
		.isColFilterOptionDisplayed(0)
		.should.be.equal(true);
});
