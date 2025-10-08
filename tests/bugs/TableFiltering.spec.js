/*!
 * @AIMMS_FILE=models/FilteringInTable/FilteringInTable.aimms
 */

scenario(
	"At some point during the Single Cube work, filtering on Tables did not work properly anymore.",
	() => {
		loadPage("Main Project/home");

		// Upon starting, no filter elements are selected, so the table should be empty.
		findWidget("Country Data").getEmptyWidgetMessage().should.exist;

		// Select a number of countries/years to fill up the table.
		findWidget("CountriesDisplayed").select(["UK", "NL", "LU"]);

		findWidget("YearsDisplayed").select(["1991", "1996", "1997", "1999"]);

		// Verify whether the expected result is there.
		findWidget("Country Data")
			.getNumColsInGridViewport()
			.should.be.equal(4);

		findWidget("Country Data")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("Country Data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("6.00");

		findWidget("Country Data")
			.getCell(1, 2)
			.getValue()
			.should.be.equal("27.00");

		findWidget("Country Data")
			.getCell(2, 3)
			.getValue()
			.should.be.equal("88.00");
	}
);
