/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Asserting the data header filter rules on filter dialog.", () => {
	loadPage("Main Project/Filters/Filtered Table");

	// Get the Filter dialog
	findWidget("ProfitWithDiscountsGivenFiltered")
		.getTableFilterButton()
		.click();

	// Assert the filter rules available
	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Products",
				rule: "is",
				value: ["Product 01", "Product 02", "Product 04"],
			},
			{
				type: "column",
				field: "Cities",
				rule: "is not",
				value: [
					"City 01",
					"City 03",
					"City 04",
					"City 05",
					"City 06",
					"City 07",
					"City 08",
					"City 09",
					"City 10",
					"City 11",
					"City 12",
				],
			},
			{ type: "column", field: "Discounts", rule: "does not contain", value: "20" },
			{ type: "row", field: "Profit_Margin", rule: "contains", value: "0" },
		]);

	// Close the dialog
	findDialog()
		.findButton("Apply and Close")
		.click();

	// Get the Filter dialog
	findWidget("BigBangSales")
		.bringIntoFocus()
		.getTableFilterButton()
		.click();

	// Assert the filter rules available
	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{ type: "column", field: "Cities", rule: "is", value: ["City 01"] },
			{ type: "row", field: "Discounts", rule: "does not contain", value: "5" },
			{ type: "column", field: "Products", rule: "is", value: ["Product 01", "Product 02"] },
			{ type: "column", field: "Products", rule: "is", value: ["Product 05"] },
		]);
});
