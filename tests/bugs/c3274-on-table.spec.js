/*!
 * @AIMMS_FILE=models/Bugs/GL1212-ChangeNotPickedUp/change number.aimms
 */

scenario("Customer Ticket 3275 - Data in WebUI Table is now not modified after Esc key", () => {
	loadPage("Main Project/c3275?table-v2=false");

	// Assert data shown on the table.
	const expected_values_with_5_decimals = [
		[
			"-46.32876",
			"53.52513",
			"92.44776",
			"92.03435",
			"-53.80345",
			"-25.32616",
			"78.99628",
			"21.64472",
			"66.33527",
			"55.60143",
		],
	];
	findWidget("TestData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values_with_5_decimals);

	// Set Decimal Points identifier value to 3.
	findWidget("DecimalPoints").setValue("3");

	// Assert data shown on the table.
	const expected_values_with_3_decimals = [
		[
			"-46.329",
			"53.525",
			"92.448",
			"92.034",
			"-53.803",
			"-25.326",
			"78.996",
			"21.645",
			"66.335",
			"55.601",
		],
	];
	findWidget("TestData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values_with_3_decimals);

	// Double Click on cell(0,0) and press Escape key
	findWidget("TestData")
		.getCell(0, 0)
		.doubleClick()
		.pressKeys([SPECIAL_KEYS.escape]);

	findWidget("TestData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values_with_3_decimals);

	// Set Decimal Points identifier value to 5.
	findWidget("DecimalPoints").setValue("5");

	// Assert data shown on the table.
	findWidget("TestData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values_with_5_decimals);
});
