/*!
 * @AIMMS_FILE=models/TablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Setting the NumDecimals in a Table to a setting in the Table itself.", () => {
	loadPage("Main Project/RecursionTestPage?table-v2=true");

	// The cell Wingspan/A330 is used for setting the NumDecimals of the FuselageLength column
	findWidget("Aircraft Properties_3")
		.getCell(2, 1)
		.setValue("2.00");

	findWidget("Aircraft Properties_3")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.90", "35.10", "70,900.00"],
			["37.57", "34.10", "77,000.00"],
			["63.66", "2.00", "242,000.00"],
			["39.50", "34.32", "101,000.00"],
			["76.28", "68.45", "440,000.00"],
			["46.97", "38.05", "124,000.00"],
			["36.25", "28.73", "51,800.00"],
			["38.66", "28.73", "52,290.00"],
		]);

	// The cell FuselageLength/A330 is used for setting the NumDecimals of the FuselageLength column itself - real recursion
	findWidget("Aircraft Properties_4")
		.getCell(2, 0)
		.setValue("2.00");

	findWidget("Aircraft Properties_4")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.90", "35.10", "70,900.00"],
			["37.57", "34.10", "77,000.00"],
			["2.00", "2.00", "242,000.00"],
			["39.50", "34.32", "101,000.00"],
			["76.28", "68.45", "440,000.00"],
			["46.97", "38.05", "124,000.00"],
			["36.25", "28.73", "51,800.00"],
			["38.66", "28.73", "52,290.00"],
		]);
});
