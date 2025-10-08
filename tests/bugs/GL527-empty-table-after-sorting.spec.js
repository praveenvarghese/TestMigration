/*!
 * @AIMMS_FILE=models/Bugs/GL527-TableEmptyAfterSorting/MarksSpencerSortingBug.aimms
 */

scenario(
	"GL527 When using aggregator names like 'average' or 'count' as set elements, sorting in a Table widget would lead to an empty table",
	() => {
		loadPage("Main Project/home");

		// Column sort with the set element "Average"
		findWidget("SingleTable").sortColumn(1, "increase");

		findWidget("SingleTable")
			.getNumColsInGridViewport()
			.should.be.equal(2);

		findWidget("SingleTable")
			.getNumRowsInGridViewport()
			.should.be.equal(11);

		findWidget("SingleTable")
			.getCell(5, 1)
			.getValue()
			.should.be.equal("46,438.00 tray");

		// Row sort with the set element "Count"
		findWidget("Titles").sortRow(3, "increase");

		findWidget("Titles")
			.getNumColsInGridViewport()
			.should.be.equal(5);

		findWidget("Titles")
			.getNumRowsInGridViewport()
			.should.be.equal(4);

		findWidget("Titles")
			.getCell(3, 2)
			.getValue()
			.should.be.equal("3.00");
	}
);
