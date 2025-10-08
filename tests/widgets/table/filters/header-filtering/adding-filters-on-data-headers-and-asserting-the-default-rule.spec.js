/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("While adding a new rule on data headers, asserting 'is' is the default rule.", () => {
	loadPage("Main Project/Filters");

	// Get the filter dialog for "Cities" data header
	findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 0);

	// Assert the rule as seen on filter dialog
	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Cities",
				rule: "is",
				value: [],
			},
		]);

	// Adding a "is" rule on "Cities" data header
	getFilter().addFilter({ rule: "is", itemsSearched: ["City 01"], isHeaderRule: true });

	// Apply the filter rules and get the dialog closed
	findDialog()
		.findButton("Apply and Close")
		.click();

	// Get the filter dialog for "Products" data header
	findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(1, 1);

	// Assert the rules as seen on filter dialog
	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Cities",
				rule: "is",
				value: ["City 01"],
			},
			{
				type: "row",
				field: "Products",
				rule: "is",
				value: [],
			},
		]);

	// Adding another "is not" rule on "Products" data header
	getFilter().addFilter({
		rule: "is not",
		itemsSearched: ["Product 01", "Product 02"],
		isHeaderRule: true,
	});

	// Apply the filter rules and get the dialog closed
	findDialog()
		.findButton("Apply and Close")
		.click();

	// Get the filter dialog for "Profit_Margin" data header
	findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(2, 1);

	// Assert the rules as seen on filter dialog
	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Cities",
				rule: "is",
				value: ["City 01"],
			},
			{
				type: "row",
				field: "Products",
				rule: "is not",
				value: ["Product 01", "Product 02"],
			},
			{ type: "row", field: "Profit_Margin", rule: "is", value: "" },
		]);

	// Adding another "contains" rule on "Profit_Margin" data header
	getFilter().addFilter({ rule: "contains", value: "20", isHeaderRule: true });

	// Apply the filter rules and get the dialog closed
	findDialog()
		.findButton("Apply and Close")
		.click();

	// Get the filter dialog for "Discounts" data header
	findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 1);

	// Assert the rules as seen on filter dialog
	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Cities",
				rule: "is",
				value: ["City 01"],
			},
			{
				type: "row",
				field: "Products",
				rule: "is not",
				value: ["Product 01", "Product 02"],
			},
			{ type: "row", field: "Profit_Margin", rule: "contains", value: "20" },
			{ type: "column", field: "Discounts", rule: "is", value: "" },
		]);
});
