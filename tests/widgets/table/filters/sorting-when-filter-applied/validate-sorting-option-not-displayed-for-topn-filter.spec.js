/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Validating sorting option is not dispalyed when topN filter is applied", () => {
	loadPage("Main Project/filterTable");

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable")
		.isColSortOptionDisplayed(0)
		.should.be.equal(true);

	findWidget("filterTable").closePane();

	findWidget("filterTable")
		.isRowSortOptionDisplayed(0)
		.should.be.equal(true);

	findWidget("filterTable").closePane();

	findWidget("filterTable").getColFilter(0);

	getFilter().editFilter({ index: "0", rule: "show top", value: "1" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable")
		.isRowSortOptionDisplayed(0)
		.should.be.equal(true);

	findWidget("filterTable").closePane();

	findWidget("filterTable")
		.isColSortOptionDisplayed(0)
		.should.be.equal(false);
});
