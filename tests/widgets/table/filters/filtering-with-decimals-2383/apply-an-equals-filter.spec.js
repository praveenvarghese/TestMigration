/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Asserting Equals filter matches considering the decimals too.", () => {
	loadPage("Main Project/Bugs/2383");

	// Resets Data
	findWidget("Reset Data").click();

	// Assert table has filtered indication and Column-Header cell(0,0) has filter applied.
	findWidget("Testdata_1")
		.getTableFilterButton()
		.should.not.be.eql("None");
	findWidget("Testdata_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	// Set Table to Num-Decimals of 5
	findWidget("Misc Options").setValue("Decimal_Points", "5");

	// Apply Equals filter
	findWidget("Testdata_1").getRowFilter(4);
	getFilter().addFilter({ rule: "is equal to (=)", value: "77.15328" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the data on the table
	findWidget("Testdata_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["111.98136", "212.83626"],
			["-55.94571", "-104.31517"],
			["-93.91178", "-84.53845"],
			["-93.91178", "-16.10399"],
			["77.15328", "77.15328"],
		]);

	// Set Table to Num-Decimals of 1
	findWidget("Misc Options").setValue("Decimal_Points", "1");

	// Assert the data on the table
	findWidget("Testdata_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["-55.9", "-104.3"],
			["-93.9", "-84.5"],
			["-93.9", "-16.1"],
			["77.2", "77.2"],
		]);

	// Set Table to Num-Decimals of 0
	findWidget("Misc Options").setValue("Decimal_Points", "0");

	// Assert the data on the table
	findWidget("Testdata_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["-56", "-104"],
			["-94", "-85"],
			["-94", "-16"],
			["77", "77"],
		]);

	// Set Table to consider Showing Units
	findWidget("Misc Options").setValue("Show_Units", true);

	// Assert the data on the table
	findWidget("Testdata_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["-56 kg", "-104 kg"],
			["-94 kg", "-85 kg"],
			["-94 kg", "-16 kg"],
			["77 kg", "77 kg"],
		]);

	// Set Table to Num-Decimals of 1
	findWidget("Misc Options").setValue("Decimal_Points", "1");

	// Assert the data on the table
	findWidget("Testdata_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["-55.9 kg", "-104.3 kg"],
			["-93.9 kg", "-84.5 kg"],
			["-93.9 kg", "-16.1 kg"],
			["77.2 kg", "77.2 kg"],
		]);

	// Set Table to Num-Decimals of 5
	findWidget("Misc Options").setValue("Decimal_Points", "5");

	// Assert the data on the table
	findWidget("Testdata_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["111.98136 kg", "212.83626 kg"],
			["-55.94571 kg", "-104.31517 kg"],
			["-93.91178 kg", "-84.53845 kg"],
			["-93.91178 kg", "-16.10399 kg"],
			["77.15328 kg", "77.15328 kg"],
		]);

	// // Set Table to Num-Decimals of 5
	// findWidget("Misc Options").setValue("Decimal_Points", "6");

	// // Assert the table is empty
	// findWidget("Testdata_1").getEmptyWidgetMessage().should.exist;
});
