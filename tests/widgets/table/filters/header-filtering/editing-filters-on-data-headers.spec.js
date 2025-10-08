/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Editing the filtering on data headers and asserting the resulting data", () => {
	loadPage("Main Project/Filters/Filtered Table");

	// Get the Filter dialog
	findWidget("ProfitWithDiscountsGivenFiltered")
		.getTableFilterButton()
		.click();

	// Edit the 0th index rule
	getFilter().editFilter({
		index: 0,
		itemsToBeRemoved: ["Product 01", "Product 02"],
		newItemsToBeIncluded: ["Product 05", "Product 06"],
		isHeaderRule: true,
	});

	// Edit the 1st index rule
	getFilter().editFilter({
		index: 1,
		removeAllItems: true,
		newItemsToBeIncluded: [
			"City 01",
			"City 03",
			"City 05",
			"City 06",
			"City 07",
			"City 08",
			"City 09",
			"City 10",
			"City 11",
			"City 12",
		],
		isHeaderRule: true,
	});

	// Edit the 2nd index rule
	getFilter().editFilter({
		index: 2,
		value: "5",
		isHeaderRule: true,
	});

	// Edit the 3rd index rule
	getFilter().editFilter({
		index: 3,
		value: "20",
		isHeaderRule: true,
	});

	findDialog()
		.findButton("Apply and Close")
		.click();

	const expected_values = [
		["370.46", "456.92", "86.58"],
		["113.72", "259.17", "250.86"],
		["34.11", "131.23", "317.16"],
		["21.01", "221.82", "369.45"],
		["300.83", "484.73", "87.21"],
		["327.32", "55.49", "142.69"],
		["84.52", "87.33", "384.77"],
		["359.14", "19.11", "97.94"],
		["152.70", "481.10", "412.25"],
		["429.66", "55.58", "480.25"],
		["37.09", "455.13", "107.96"],
		["349.26", "444.92", "495.71"],
		["29.65", "121.31", "214.26"],
		["122.97", "398.56", "158.88"],
		["399.02", "467.44", "290.01"],
		["196.36", "117.23", "330.02"],
	];

	// Assert the resulting data
	findWidget("ProfitWithDiscountsGivenFiltered")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
