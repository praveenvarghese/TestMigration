/*!
 * @AIMMS_FILE=models/Bugs/GL854-ColumnsShouldNotBeDisplayed/DefaultValuesShowing.aimms
 */

scenario(
	"GL854 Despite a display domain setting of 0, some columns were still displayed. This should not be the case.",
	() => {
		loadPage("Main Project/home");

		// Verify that indeed just 2 columns are displayed instead of 4.
		findWidget("qqq")
			.getNumColsInGridViewport()
			.should.be.equal(2);

		// Check the name of the first and the second column, to make sure that the 2 EXPECTED columns are displayed.
		findWidget("qqq")
			.getColHeaderCell(0, 0)
			.getText()
			.should.be.equal("Value1");

		findWidget("qqq")
			.getColHeaderCell(0, 1)
			.getText()
			.should.be.equal("Value4");
	}
);
