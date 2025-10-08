/*!
 * @AIMMS_FILE=models/Bugs/GL1152-1153-AutorefreshNextFocusTests/AutorefreshNextFocusTests.aimms
 */

scenario("GL1152-1153 Autorefresh and Focus Next advanced options disabled", () => {
	loadPage("Main Project/home");

	// Check whether the table with the options set to their default values behaves as expected.
	findWidget("VisitsTable").getRefreshButton().should.not.exist;

	findWidget("VisitsTable")
		.getCell(1, 0)
		.setValue("0"); // This should trigger the reload button to be displayed, as the whole row is default now.

	findWidget("VisitsTable").getRefreshButton().should.exist;

	// Check whether the table with the fast editing set to disabled behaves as expected
	findWidget("TableWithFastEditingDisabled").getRefreshButton().should.not.exist;

	findWidget("TableWithFastEditingDisabled")
		.getNumRowsInGridViewport()
		.should.be.equal(4);

	findWidget("TableWithFastEditingDisabled")
		.getCell(1, 0)
		.setValue("0"); // This should trigger an immediate change of the table, without showing the reload button.

	findWidget("TableWithFastEditingDisabled").getRefreshButton().should.not.exist;

	findWidget("TableWithFastEditingDisabled")
		.getNumRowsInGridViewport()
		.should.be.equal(3); // One row should have disappeared compared to before the edit.

	// Check whether the table with the next focus disabled behaves as expected
	findWidget("TableWithFocusNextDisabled")
		.getCell(1, 0)
		.click();

	findWidget("TableWithFocusNextDisabled")
		.pressKeys(["3", SPECIAL_KEYS.enter])
		.getCell(1, 0)
		.isFocused()
		.should.be.equal(true);
});
