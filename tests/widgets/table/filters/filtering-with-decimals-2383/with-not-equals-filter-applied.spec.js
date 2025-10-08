/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"With Equals filter applied on table. Changing the NumDecimal factor on table, asserting the data shown.",
	() => {
		loadPage("Main Project/Bugs/2383");

		// Resets Data
		findWidget("Reset Data").click();

		// With Num-Decimal set to 2 for the Table
		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-55.95", "157.55", "110.28", "127.64", "-104.32"],
				["-93.91", "54.09", "-84.54", "135.67", "-84.54"],
				["-93.91", "150.00", "243.43", "138.21", "-16.10"],
				["77.15", "42.40", "219.07", "-33.29", "77.15"],
			]);

		// Set Table to Num-Decimals of 0
		findWidget("Misc Options").setValue("Decimal_Points", "0");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-56", "158", "110", "128", "-104"],
				["-94", "54", "-85", "136", "-85"],
				["-94", "150", "243", "138", "-16"],
				["77", "42", "219", "-33", "77"],
			]);

		// Set Table to Num-Decimals of 1
		findWidget("Misc Options").setValue("Decimal_Points", "1");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-55.9", "157.6", "110.3", "127.6", "-104.3"],
				["-93.9", "54.1", "-84.5", "135.7", "-84.5"],
				["-93.9", "150.0", "243.4", "138.2", "-16.1"],
				["77.2", "42.4", "219.1", "-33.3", "77.2"],
			]);

		// Set Table to Num-Decimals of 3
		findWidget("Misc Options").setValue("Decimal_Points", "3");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-55.946", "157.551", "110.280", "127.644", "-104.315"],
				["-93.912", "54.090", "-84.538", "135.670", "-84.538"],
				["-93.912", "150.000", "243.431", "138.210", "-16.104"],
				["77.153", "42.401", "219.066", "-33.292", "77.153"],
			]);

		// Set Table to Num-Decimals of 4
		findWidget("Misc Options").setValue("Decimal_Points", "4");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-55.9457", "157.5515", "110.2802", "127.6445", "-104.3152"],
				["-93.9118", "54.0901", "-84.5385", "135.6701", "-84.5385"],
				["-93.9118", "150.0003", "243.4306", "138.2100", "-16.1040"],
				["77.1533", "42.4012", "219.0662", "-33.2922", "77.1533"],
			]);

		// Set Table to Num-Decimals of 5
		findWidget("Misc Options").setValue("Decimal_Points", "5");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["111.98136", "112.27941", "12.28596", "-97.08146", "212.83626"],
				["-55.94571", "157.55146", "110.28016", "127.64445", "-104.31517"],
				["-93.91178", "54.09011", "-84.53845", "135.67011", "-84.53845"],
				["-93.91178", "150.00032", "243.43057", "138.21004", "-16.10399"],
				["77.15328", "42.40117", "219.06617", "-33.29216", "77.15328"],
			]);

		// Set Table to consider Showing Units
		findWidget("Misc Options").setValue("Show_Units", true);

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["111.98136 kg", "112.27941 kg", "12.28596 kg", "-97.08146 kg", "212.83626 kg"],
				["-55.94571 kg", "157.55146 kg", "110.28016 kg", "127.64445 kg", "-104.31517 kg"],
				["-93.91178 kg", "54.09011 kg", "-84.53845 kg", "135.67011 kg", "-84.53845 kg"],
				["-93.91178 kg", "150.00032 kg", "243.43057 kg", "138.21004 kg", "-16.10399 kg"],
				["77.15328 kg", "42.40117 kg", "219.06617 kg", "-33.29216 kg", "77.15328 kg"],
			]);

		// Set Table to Num-Decimals of 2
		findWidget("Misc Options").setValue("Decimal_Points", "2");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-55.95 kg", "157.55 kg", "110.28 kg", "127.64 kg", "-104.32 kg"],
				["-93.91 kg", "54.09 kg", "-84.54 kg", "135.67 kg", "-84.54 kg"],
				["-93.91 kg", "150.00 kg", "243.43 kg", "138.21 kg", "-16.10 kg"],
				["77.15 kg", "42.40 kg", "219.07 kg", "-33.29 kg", "77.15 kg"],
			]);

		// Set Table to Num-Decimals of 0
		findWidget("Misc Options").setValue("Decimal_Points", "0");

		// Assert the data on the table
		findWidget("Testdata_1")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["-56 kg", "158 kg", "110 kg", "128 kg", "-104 kg"],
				["-94 kg", "54 kg", "-85 kg", "136 kg", "-85 kg"],
				["-94 kg", "150 kg", "243 kg", "138 kg", "-16 kg"],
				["77 kg", "42 kg", "219 kg", "-33 kg", "77 kg"],
			]);
	}
);
