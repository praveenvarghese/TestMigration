/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"Applying filters on headers, that has text coming from translated and element-text. And asserting the details.",
	() => {
		loadPage("Main Project/Filters/c3314");

		// For "Set04" header that has text coming from translation file. Get the filter dialog.
		findWidget("TestData").getDataHeaderFilter(1, 2);

		// Adding a "is" rule on "TF_Set04" data header
		getFilter().addFilter({
			rule: "is",
			itemsSearched: ["ET_S4E1", "TF_S4E2", "Set04Element3"],
			isHeaderRule: true,
		});

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// For "Set02" header that has text coming from translation file. Get the filter dialog.
		findWidget("TestData").getDataHeaderFilter(2, 2);

		// Adding another "is not" rule on "TF_Set02" data header
		getFilter().addFilter({
			rule: "is not",
			itemsSearched: ["ET_S2E3", "TF_S2E5"],
			isHeaderRule: true,
		});

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Again, for "Set02" header that has text coming from translation file. Get the filter dialog.
		findWidget("TestData").getDataHeaderFilter(2, 2);

		// Adding another "is" rule on "TF_Set02" data header
		getFilter().addFilter({
			rule: "is",
			itemsSearched: ["Set02Element1", "ET_S2E2", "TF_S2E4", "TF_S2E5"],
			isHeaderRule: true,
		});

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the filter dialog for "Set03" data header
		findWidget("TestData").getDataHeaderFilter(0, 2);

		// Adding another "is" rule on "Set03" data header
		getFilter().addFilter({
			rule: "is",
			itemsSearched: ["TF_S3E1", "ET_S3E2", "Set03Element5"],
			isHeaderRule: true,
		});

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the filter dialog for "Set01" data header
		findWidget("TestData").getDataHeaderFilter(2, 1);

		// Adding another "contains" rule on "Set01" data header
		getFilter().addFilter({
			rule: "contains",
			value: "ELEmenT",
			isHeaderRule: true,
		});

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		const expected_values = [
			["91.27", "-49.42", "-15.41", "49.05", "-70.72", "-21.73", "-9.07", "-5.45", "76.23"],
			["-97.98", "55.11", "40.77", "72.82", "-53.97", "70.36", "-73.02", "-49.04", "-24.43"],
			["73.74", "-0.86", "-56.86", "-80.27", "35.36", "11.07", "2.82", "58.03", "49.64"],
			["-36.72", "92.73", "45.32", "14.43", "14.66", "-44.78", "-63.66", "90.66", "22.76"],
			["43.80", "-16.35", "96.43", "20.13", "13.10", "-70.21", "27.07", "-2.72", "-45.66"],
			["-10.93", "89.58", "-65.82", "90.54", "18.03", "16.89", "6.28", "-5.85", "-7.02"],
			["-15.72", "36.96", "-83.39", "62.57", "6.35", "-98.50", "0.27", "-59.01", "36.33"],
			["60.94", "-48.58", "40.04", "-55.74", "30.93", "-79.66", "-79.04", "51.39", "99.75"],
			["84.96", "13.44", "35.46", "93.26", "-38.99", "-78.32", "-21.78", "-94.73", "-60.29"],
		];

		// Assert the resulting data
		findWidget("TestData")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Assert the Title headers on the table
		findWidget("TestData")
			.getTitleHeaderValues()
			.should.be.shallowDeepEqual([
				["", "", "Set03"],
				["", "", "TF_Set04"],
				["Identifier", "Set01", "TF_Set02"],
			]);

		// Assert the Column headers on the table
		findWidget("TestData")
			.getColumnsHeaderValues()
			.should.be.shallowDeepEqual([
				[
					"TF_S3E1",
					"TF_S3E1",
					"TF_S3E1",
					"ET_S3E2",
					"ET_S3E2",
					"ET_S3E2",
					"Set03Element5",
					"Set03Element5",
					"Set03Element5",
				],
				[
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
				],
			]);

		// Assert the Column headers on the table
		findWidget("TestData")
			.getRowsHeaderValues()
			.should.be.shallowDeepEqual([
				["MKGTesting", "TF_S1E2", "Set02Element1"],
				["MKGTesting", "TF_S1E2", "ET_S2E2"],
				["MKGTesting", "TF_S1E2", "TF_S2E4"],
				["MKGTesting", "Set01Element4", "Set02Element1"],
				["MKGTesting", "Set01Element4", "ET_S2E2"],
				["MKGTesting", "Set01Element4", "TF_S2E4"],
				["MKGTesting", "Set01Element5", "Set02Element1"],
				["MKGTesting", "Set01Element5", "ET_S2E2"],
				["MKGTesting", "Set01Element5", "TF_S2E4"],
			]);
	}
);
