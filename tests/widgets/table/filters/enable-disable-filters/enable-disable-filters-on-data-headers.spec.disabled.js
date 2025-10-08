/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Enabling and disabling data header filter rules and asserting the resulting data", () => {
	loadPage("Main Project/Filters/Filtered Table?table-v2=true");

	//Test is disabled because of Duplicate ID issue with our E2E Framework
	findWidget("BigBangSales").scrollIntoView();

	// Get the Filter dialog
	findWidget("BigBangSales")
		.bringIntoFocus()
		.getTableFilterButton()
		.click();

	// Disable the 2nd index filter rule applied on "Products" data header
	getFilter().disableFilter(2);

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("BigBangSales")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["408.46", "249.10", "48.39", "384.07", "415.71", "34.39", "126.16", "196.80"],
			["115.49", "186.68", "447.49", "304.11", "43.26", "134.18", "383.81", "481.12"],
			["471.46", "355.83", "90.91", "64.71", "415.84", "389.00", "68.99", "311.88"],
			["115.95", "1.85", "402.85", "189.58", "442.47", "210.94", "63.97", "408.49"],
			["314.60", "3.57", "6.37", "28.77", "393.28", "45.78", "241.02", "320.56"],
			["87.52", "383.33", "15.52", "431.06", "57.28", "184.73", "112.97", "111.07"],
			["465.02", "179.04", "368.82", "428.53", "483.65", "194.00", "272.62", "381.75"],
			["280.81", "478.75", "131.63", "240.80", "148.48", "383.80", "381.31", "19.58"],
			["339.12", "209.96", "171.61", "38.45", "380.45", "341.04", "400.60", "42.62"],
			["481.23", "197.79", "117.15", "117.21", "360.79", "286.40", "366.08", "297.98"],
		]);

	findWidget("BigBangSales").scrollIntoView();

	// Get the Filter dialog
	findWidget("BigBangSales")
		.bringIntoFocus()
		.getTableFilterButton()
		.click();

	// Enable the 3rd index filter rule applied on "Products" data header
	getFilter().enableFilter(2);

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("BigBangSales")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["408.46", "249.10", "48.39", "384.07", "415.71", "34.39", "126.16", "196.80"],
			["115.49", "186.68", "447.49", "304.11", "43.26", "134.18", "383.81", "481.12"],
		]);
});
