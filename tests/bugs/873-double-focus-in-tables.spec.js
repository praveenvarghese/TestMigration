/*!
 * @AIMMS_FILE=models/Bugs/GL873-MasterTest/MasterTest.aimms
 */

scenario(
	"Bug 873: when opening an option editor of a table with a focused cell and focusing on another table, left you with 2 focus cells simultaneously.",
	() => {
		loadPage("Main Project/home");

		// Click on a cell in the Book Table to give it focus (and verify that it gets focus)
		findWidget("qq1")
			.getCell(0, 0)
			.click();

		findWidget("qq1")
			.isFocused()
			.should.eql(true);

		findWidget("qq1")
			.getCell(0, 0)
			.isFocused()
			.should.eql(true);

		// Verify that the other table does not have focus
		findWidget("qq2")
			.isFocused()
			.should.eql(false);

		// Open the option editor of the first table
		findWidget("qq1").openMiscellaneousOptionEditor();

		// Give focus to the second table, while the option editor is still opened.
		findWidget("qq2")
			.getCell(0, 0)
			.click();

		// Verify the focus situation of both tables
		findWidget("qq1")
			.isFocused()
			.should.eql(false);

		findWidget("qq2")
			.isFocused()
			.should.eql(true);
	}
);
