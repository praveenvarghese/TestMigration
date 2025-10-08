/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Check the 'Header Visibility' option for all its values", () => {
	loadPage("Main Project/home");

	// Check the default setting of the 'Header Visibility'
	findWidget("Book Table")
		.getColumnsHeaderValues()
		.should.eql([
			[
				"YearPublished",
				"YearPublishedString",
				"Author",
				"WrittenByAWoman",
				"Nationality",
				"IsMale",
			],
		]);

	findWidget("Book Table")
		.getRowsHeaderValues()
		.should.eql([
			["-", "Charlotte Brontë"],
			["-", "Mary Shelley"],
			["-", "Theodor Fontane"],
			["-", "Oscar Wilde"],
			["Jane Eyre", "-"],
			["Matilda", "-"],
			["Vilette", "-"],
			["Effi Briest", "-"],
		]);

	// Now hide the column header
	findWidget("Book Table")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Header Visibility")
		.setValue({
			value: "Hide Row Header",
			valueType: "ENUM",
			optionEditorType: "ENUM",
		});

	findWidget("Book Table")
		.getColumnsHeaderValues()
		.should.eql([
			[
				"YearPublished",
				"YearPublishedString",
				"Author",
				"WrittenByAWoman",
				"Nationality",
				"IsMale",
			],
		]);

	findWidget("Book Table")
		.getRowsHeaderValues()
		.should.eql([]);

	// Now hide the row header
	findWidget("Book Table")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Header Visibility")
		.setValue({
			value: "Hide Column Header",
			valueType: "ENUM",
			optionEditorType: "ENUM",
		});

	findWidget("Book Table")
		.getColumnsHeaderValues()
		.should.eql([]);

	findWidget("Book Table")
		.getRowsHeaderValues()
		.should.eql([
			["-", "Charlotte Brontë"],
			["-", "Mary Shelley"],
			["-", "Theodor Fontane"],
			["-", "Oscar Wilde"],
			["Jane Eyre", "-"],
			["Matilda", "-"],
			["Vilette", "-"],
			["Effi Briest", "-"],
		]);

	// And finally hide both headers
	findWidget("Book Table")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Header Visibility")
		.setValue({
			value: "Hide Row and Column Header",
			valueType: "ENUM",
			optionEditorType: "ENUM",
		});

	findWidget("Book Table")
		.getColumnsHeaderValues()
		.should.eql([]);

	findWidget("Book Table")
		.getRowsHeaderValues()
		.should.eql([]);
});
