/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Test asserting the correct working of the totals options editor.", () => {
	loadPage("Main Project/Book Corner");

	// Close the Page Manager
	closeAppManager();

	// Make sure that there is a 'count' and a 'total count' row on the Book Table, and that expected values exist in these rows.
	findWidget("Book Table")
		.getRowHeaderCell(9, 0)
		.getText()
		.should.eql("count");

	findWidget("Book Table")
		.getRowHeaderCell(10, 0)
		.getText()
		.should.eql("total count");

	findWidget("Book Table")
		.getCell(9, 0)
		.getValue()
		.should.eql("9");

	findWidget("Book Table")
		.getCell(10, 0)
		.getValue()
		.should.eql("9");

	// Assert that 'count' and 'Total count' are indeed selected in the selection list
	findWidget("Book Table")
		.openTotalsOptionEditor()
		.getActiveAggregators()
		.should.eql(["count", "Total count"]);

	// Remove the 'Total count' and add the 'Max', the 'Mean' and the 'Sum' aggregators
	findWidget("Book Table")
		.openTotalsOptionEditor()
		.openSelectionList()
		.unselectAggregator("Total count")
		.selectAggregator("max")
		.selectAggregator("mean")
		.selectAggregator("sum");

	// Assert that the resulting aggregator list is as expected
	findWidget("Book Table")
		.openTotalsOptionEditor()
		.getActiveAggregators()
		.should.eql(["sum", "mean", "count", "max"]);

	// Assert the effect(s) on the Table
	findWidget("Book Table")
		.getRowHeaderCell(9, 0)
		.getText()
		.should.eql("sum");

	findWidget("Book Table")
		.getRowHeaderCell(10, 0)
		.getText()
		.should.eql("mean");

	findWidget("Book Table")
		.getRowHeaderCell(11, 0)
		.getText()
		.should.eql("count");

	findWidget("Book Table")
		.getRowHeaderCell(12, 0)
		.getText()
		.should.eql("max");

	findWidget("Book Table")
		.getCell(9, 1)
		.getValue()
		.should.eql("344"); // The sum

	findWidget("Book Table")
		.getCell(10, 1)
		.getValue()
		.should.eql("38"); // The mean

	findWidget("Book Table")
		.getCell(11, 1)
		.getValue()
		.should.eql("9"); // The count

	findWidget("Book Table")
		.getCell(12, 1)
		.getValue()
		.should.eql("87"); // The max
});
