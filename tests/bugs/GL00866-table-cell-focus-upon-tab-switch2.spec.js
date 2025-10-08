/*!
 * @AIMMS_FILE=models/Bugs/GL00871-TableCellFocus/TableCellFocus.aimms
 */

scenario(
	"Assert table cell focus is preserved upon switching browser tabs and does not turn into 'blue focus'",
	() => {
		loadPage("Main Project/new page");

		loadPageInNewTab("Main Project/home");

		getTabsCount().should.be.equal(2);

		switchToTab("Main Project/new page");

		findWidget("addd")
			.getCell(0, 0)
			.isFocused()
			.should.be.equal(true);

		findWidget("addd")
			.isFocused()
			.should.be.equal(false); // So, the cell is focused, but not with 'blue focus'

		// Switch away from the tab and come back
		switchToTab("Main Project/home");
		switchToTab("Main Project/new page");

		// Nothing should have been changed to the focus state of the table
		findWidget("addd")
			.getCell(0, 0)
			.isFocused()
			.should.be.equal(true);

		findWidget("addd")
			.isFocused()
			.should.be.equal(false); // So, the cell is focused, but not with 'blue focus'
	}
);
