/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate per identifier visibility option functionality", () => {
	loadPage("Main Project/SecondPage");

	findWidget("Aircraft Properties_2")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.900 m", "70,900.0000"],
			["37.570 m", "77,000.0000"],
			["63.660 m", "242,000.0000"],
			["39.500 m", "101,000.0000"],
			["76.280 m", "440,000.0000"],
			["46.970 m", "124,000.0000"],
			["36.250 m", "51,800.0000"],
			["38.660 m", "52,290.0000"],
		]);

	findWidget("Aircraft Properties_2")
		.openTableContentsOptionEditor()
		.modifyContents(
			1,
			null,
			null,
			null,
			null,
			{
				value: "Default",
				type: "ENUM",
			},
			null
		);

	findWidget("Aircraft Properties_2")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.900 m", "70,900.0000"],
			["37.570 m", "77,000.0000"],
			["63.660 m", "242,000.0000"],
			["39.500 m", "101,000.0000"],
			["76.280 m", "440,000.0000"],
			["46.970 m", "124,000.0000"],
			["36.250 m", "51,800.0000"],
			["38.660 m", "52,290.0000"],
		]);

	findWidget("Aircraft Properties_2")
		.openTableContentsOptionEditor()
		.modifyContents(
			1,
			null,
			null,
			null,
			null,
			{
				value: "Never Show",
				type: "ENUM",
			},
			null
		);

	findWidget("Aircraft Properties_2")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.900 m", "70,900.0000"],
			["37.570 m", "77,000.0000"],
			["63.660 m", "242,000.0000"],
			["39.500 m", "101,000.0000"],
			["76.280 m", "440,000.0000"],
			["46.970 m", "124,000.0000"],
			["36.250 m", "51,800.0000"],
			["38.660 m", "52,290.0000"],
		]);

	findWidget("Aircraft Properties_2")
		.openTableContentsOptionEditor()
		.modifyContents(
			1,
			null,
			null,
			null,
			null,
			{
				value: "Always Show",
				type: "ENUM",
			},
			null
		);

	findWidget("Aircraft Properties_2")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.900 m", "35", "70,900.0000"],
			["37.570 m", "34", "77,000.0000"],
			["63.660 m", "60", "242,000.0000"],
			["39.500 m", "34", "101,000.0000"],
			["76.280 m", "68", "440,000.0000"],
			["46.970 m", "38", "124,000.0000"],
			["36.250 m", "29", "51,800.0000"],
			["38.660 m", "29", "52,290.0000"],
		]);
});
