/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Header titles in Table with 2 column indexes sliced to subsets", () => {
	loadPage("Main Project/TableHeadersWithSlicingSet");

	findWidget("table-with-no-slicing-set")
		.getColHeaderTitles()
		.should.be.shallowDeepEqual(["s1", "s2", "s3"]);

	findWidget("table-with-no-slicing-set")
		.getRowHeaderTitles()
		.should.be.equal("Identifier");

	findWidget("table-with-one-slicing-set")
		.getColHeaderTitles()
		.should.be.shallowDeepEqual(["s1_sub", "s2", "s3"]);

	findWidget("table-with-one-slicing-set")
		.getRowHeaderTitles()
		.should.be.equal("Identifier");

	findWidget("table-with-two-slicing-set")
		.getColHeaderTitles()
		.should.be.shallowDeepEqual(["s1_sub", "s2_sub", "s3"]);

	findWidget("table-with-two-slicing-set")
		.getRowHeaderTitles()
		.should.be.equal("Identifier");
});
