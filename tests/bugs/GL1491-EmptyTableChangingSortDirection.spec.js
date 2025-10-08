/*!
 * @AIMMS_FILE=models/Bugs/GL1491-EmptyTableChangingSortDirection/empty table.aimms
 */

scenario("GL1491 - When making an edit in a sorted Table, the Table became empty.", () => {
	loadPage("Main Project/x1");

	// Make the edit
	findWidget("y1")
		.getCell(3, 0)
		.setValue("9.00");

	// Verify that the Table is not empty
	findWidget("y1").getEmptyWidgetMessage().should.not.exist;
});
