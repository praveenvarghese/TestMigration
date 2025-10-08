/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Filtering on a Table which has multiple disjunct indices present", () => {
	loadPage("Main Project/home");

	/* Make sure no filtering rules are in place */
	findWidget("Book Table")
		.getTableFilterButton()
		.should.be.eql("None");

	/* Add a filter rule on author nationality */
	findWidget("Book Table").getColFilter(4);
	getFilter().editFilter({ index: "0", rule: "contains", value: "ish" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	/* Verify the results */
	findWidget("Book Table")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("English");

	findWidget("Book Table")
		.getCell(1, 4)
		.getValue()
		.should.be.equal("English");

	findWidget("Book Table")
		.getCell(2, 4)
		.getValue()
		.should.be.equal("Irish");

	findWidget("Book Table")
		.getCell(3, 2)
		.getValue()
		.should.be.equal("Charlotte Brontë");

	/* Apply a filter on the data with the other index */
	findWidget("Book Table").getColFilter(3);
	getFilter().editFilter({ index: "1", rule: "is equal to (=)", value: "1" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	/* Verify the results */
	findWidget("Book Table")
		.getNumRowsInGridViewport()
		.should.be.equal(6);

	findWidget("Book Table")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("1,853");
});
