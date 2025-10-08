/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"Adding filter rules on data headers, and asserting the rules as seen on the filter dialog.",
	() => {
		loadPage("Main Project/Filters");

		// Adding a "is" rule on "Cities" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 0);
		getFilter().addFilter({ rule: "is", itemsSearched: ["City 01"], isHeaderRule: true });

		// Assert the rule as seen on filter dialog
		getFilter()
			.getFiltersData()
			.should.beEqualTo([
				{
					type: "column",
					field: "Cities",
					rule: "is",
					value: ["City 01"],
				},
			]);

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Adding another "is not" rule on "Products" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(1, 1);
		getFilter().addFilter({
			rule: "is not",
			itemsSearched: [
				"Product 01",
				"Product 02",
				"Product 03",
				"Product 04",
				"Product 05",
				"Product 06",
				"Product 07",
				"Product 08",
			],
			isHeaderRule: true,
		});

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
					value: [
						"Product 01",
						"Product 02",
						"Product 03",
						"Product 04",
						"Product 05",
						"Product 06",
						"Product 07",
						"Product 08",
					],
				},
			]);

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Adding another "contains" rule on "Profit_Margin" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(2, 1);
		getFilter().addFilter({ rule: "contains", value: "20", isHeaderRule: true });

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
					value: [
						"Product 01",
						"Product 02",
						"Product 03",
						"Product 04",
						"Product 05",
						"Product 06",
						"Product 07",
						"Product 08",
					],
				},
				{ type: "row", field: "Profit_Margin", rule: "contains", value: "20" },
			]);

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Adding another "does not contain" rule on "Discounts" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 1);
		getFilter().addFilter({ rule: "does not contain", value: "20", isHeaderRule: true });

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
					value: [
						"Product 01",
						"Product 02",
						"Product 03",
						"Product 04",
						"Product 05",
						"Product 06",
						"Product 07",
						"Product 08",
					],
				},
				{ type: "row", field: "Profit_Margin", rule: "contains", value: "20" },
				{ type: "column", field: "Discounts", rule: "does not contain", value: "20" },
			]);

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the Filter dialog
		findWidget("ProfitWithDiscountsGiven")
			.getTableFilterButton()
			.click();

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
					value: [
						"Product 01",
						"Product 02",
						"Product 03",
						"Product 04",
						"Product 05",
						"Product 06",
						"Product 07",
						"Product 08",
					],
				},
				{ type: "row", field: "Profit_Margin", rule: "contains", value: "20" },
				{ type: "column", field: "Discounts", rule: "does not contain", value: "20" },
			]);
	}
);
