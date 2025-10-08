/*!
 * @AIMMS_FILE=models/HTMLFilteringTest/HTMLFilteringTest.aimms
 */

scenario("Filtering on Tables with HTML-formatted cells", () => {
	loadPage("Main Project/home");

	// "Dublin", albeit surrounded by HTML tags, should be the eventual result of one of the cells in the first column.
	findWidget("Country Data").getColFilter(0);
	getFilter().addFilter({ rule: "contains", value: "Dublin" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	/* Verify that the third cell is the cell containing the "ei" entry. */
	findWidget("Country Data")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("ei");

	// Filter on "ij", which should result in 2 rows being displayed.
	findWidget("Country Data")
		.getTableFilterButton()
		.click();
	getFilter().editFilter({ index: "0", rule: "contains", value: "ij" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("Country Data")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("gm");

	findWidget("Country Data")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("fr");

	// Check the startswith/endswith filters
	findWidget("Country Data")
		.getTableFilterButton()
		.click();
	getFilter().editFilter({ index: "0", rule: "starts with", value: "ma" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("Country Data")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("sp");

	findWidget("Country Data")
		.getTableFilterButton()
		.click();
	getFilter().editFilter({ index: "0", rule: "ends with", value: "n" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("Country Data")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("gm");

	findWidget("Country Data")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("au");

	findWidget("Country Data")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("ei");

	findWidget("Country Data")
		.getCell(3, 2)
		.getValue()
		.should.be.equal("sz");

	// There is a special cell, which has the HTML content of <Amsterdam/>. Since "Amsterdam" is part of the HTML tag itself, it should not be considered for the filtering.
	findWidget("Country Data")
		.getTableFilterButton()
		.click();
	getFilter().editFilter({ index: "0", rule: "contains", value: "Amsterdam" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("Country Data")
		.isEmpty()
		.should.be.equal(true);
});
