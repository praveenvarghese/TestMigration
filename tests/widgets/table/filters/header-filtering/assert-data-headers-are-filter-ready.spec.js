/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Asserting that data headers other than 'Identifiers' is filter ready.", () => {
	loadPage("Main Project/Filters");

	/* Make sure no filtering rules are in place */
	findWidget("ProfitWithDiscountsGiven")
		.getTableFilterButton()
		.should.be.eql("None");

	// Assert "Identifier" data header is filter ready
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(0, 1)
		.hasFlags(["filterable"])
		.should.be.equal(true);

	// Assert "Cities" data header is filter ready
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(3, 0)
		.hasFlags(["filterable"])
		.should.be.equal(true);

	// Assert "Discounts" data header is filter ready
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(3, 1)
		.hasFlags(["filterable"])
		.should.be.equal(true);

	// Assert "Products" data header is filter ready
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(1, 1)
		.hasFlags(["filterable"])
		.should.be.equal(true);

	// Assert "Profit_Margin" data header is filter ready
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(2, 1)
		.hasFlags(["filterable"])
		.should.be.equal(true);

	// Assert data headers have no filter icon.
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(2, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(3, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(3, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	/* Add a filter rule on "Discounts" header */
	findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 1);

	getFilter().addFilter({ rule: "contains", value: "10", isHeaderRule: true });
	findDialog()
		.findButton("Apply and Close")
		.click();

	/* Assert filtered indication is available to Table widget */
	findWidget("ProfitWithDiscountsGiven")
		.getTableFilterButton()
		.should.not.be.eql("None");

	// Assert data headers have no filter icon.
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(2, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(3, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);
	findWidget("ProfitWithDiscountsGiven")
		.getDataHeaderCell(3, 1)
		.hasFlags(["filtered"])
		.should.be.equal(true);
});
