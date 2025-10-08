/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Filtering on Tables with a display domain present", () => {
	loadPage("Main Project/home");

	findWidget("FemaleWriters")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("FemaleWriters")
		.getNumRowsInGridViewport()
		.should.be.equal(2);

	/* Add a filter, such that one of the rows should normally disappear (notwithstanding the presence of the display domain) */
	findWidget("FemaleWriters").getColFilter(0);
	getFilter().editFilter({ index: "0", rule: "does not contain", value: "til" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	/* See that the filter flag is present now */
	findWidget("FemaleWriters")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	/* Verify that only the "Jane Eyre" row is still present */
	findWidget("FemaleWriters")
		.getNumRowsInGridViewport()
		.should.be.equal(1);

	findWidget("FemaleWriters")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Jane Eyre");
});
