/*!
 * @AIMMS_FILE=models/Bugs/GL00871-TableCellFocus/TableCellFocus.aimms
 */

scenario("Assert table cell focus is preserved upon switching browser tabs", () => {
	loadPage("Main Project/new page");

	loadPageInNewTab("Main Project/home");

	getTabsCount().should.be.equal(2);

	switchToTab("Main Project/new page");

	findWidget("addd")
		.getCell(2, 2)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("addd")
		.isFocused()
		.should.be.equal(true);

	switchToTab("Main Project/home");

	findWidget("TwoDim")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("14.20");

	switchToTab("Main Project/new page");

	findWidget("addd")
		.getCell(2, 2)
		.isFocused()
		.should.be.equal(true);

	findWidget("addd")
		.isFocused()
		.should.be.equal(true);
});
