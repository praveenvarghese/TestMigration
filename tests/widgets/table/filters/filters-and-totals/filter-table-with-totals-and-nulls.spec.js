/*!
 * @AIMMS_FILE=models/FilterProblem/FilterProblem.aimms
 */

scenario("Filtering on Tables with aggregators and totals present", () => {
	loadPage("Main Project/home");

	/* Check a table containing 0-values and filters, to see whether the totals meet the new implementation of ticket #2457. */

	// The column aggregators
	findWidget("CountryDataWithNulls")
		.getCell(3, 1)
		.getValue()
		.should.be.equal("54.00");

	findWidget("CountryDataWithNulls")
		.getCell(5, 1)
		.getValue()
		.should.be.equal("18.00");

	findWidget("CountryDataWithNulls")
		.getCell(6, 1)
		.getValue()
		.should.be.equal("33.60");

	findWidget("CountryDataWithNulls")
		.getCell(7, 1)
		.getValue()
		.should.be.equal("3.00");

	findWidget("CountryDataWithNulls")
		.getCell(8, 1)
		.getValue()
		.should.be.equal("5.00");

	findWidget("CountryDataWithNulls")
		.getCell(9, 1)
		.getValue()
		.should.be.equal("0.00");

	findWidget("CountryDataWithNulls")
		.getCell(10, 1)
		.getValue()
		.should.be.equal("0.00");

	findWidget("CountryDataWithNulls")
		.getCell(11, 1)
		.getValue()
		.should.be.equal("32.00");

	findWidget("CountryDataWithNulls")
		.getCell(12, 1)
		.getValue()
		.should.be.equal("62.00");

	// The row-aggregators
	findWidget("CountryDataWithNulls")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("108.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 4)
		.getValue()
		.should.be.equal("19.50");

	findWidget("CountryDataWithNulls")
		.getCell(2, 5)
		.getValue()
		.should.be.equal("27.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 6)
		.getValue()
		.should.be.equal("2.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 7)
		.getValue()
		.should.be.equal("4.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 8)
		.getValue()
		.should.be.equal("0.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 9)
		.getValue()
		.should.be.equal("0.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 10)
		.getValue()
		.should.be.equal("39.00");

	findWidget("CountryDataWithNulls")
		.getCell(2, 11)
		.getValue()
		.should.be.equal("39.00");

	// Some combined aggregators
	findWidget("CountryDataWithNulls")
		.getCell(5, 4)
		.getValue()
		.should.be.equal("23.50");

	findWidget("CountryDataWithNulls")
		.getCell(6, 4)
		.getValue()
		.should.be.equal("31.40");

	findWidget("CountryDataWithNulls")
		.getCell(6, 5)
		.getValue()
		.should.be.equal("30.15");
});
