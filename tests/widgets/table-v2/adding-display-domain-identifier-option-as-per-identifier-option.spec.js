/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate addition of literal decimal point  as per identifer option", () => {
	loadPage("Main Project/home");

	findWidget("Aircraft Properties")
		.openTableContentsOptionEditor()
		.modifyContents(
			2,
			null,
			{
				value: "DisplayDomainMTOW",
				type: "identifier",
			},
			null,
			null,
			null
		);

	findWidget("Aircraft Properties").closeOptionDialog();

	findWidget("Aircraft Properties")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["34.90", "35.10"],
			["37.57", "34.10"],
			["63.66", "60.30"],
			["39.50", "34.32"],
			["76.28", "68.45"],
			["46.97", "38.05"],
			["36.25", "28.73"],
			["38.66", "28.73"],
		]);

	findWidget("TableSettings").setValue("DisplayDomainMTOW", "1");

	findWidget("Aircraft Properties")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["34.90", "35.10", "70,900.00"],
			["37.57", "34.10", "77,000.00"],
			["63.66", "60.30", "242,000.00"],
			["39.50", "34.32", "101,000.00"],
			["76.28", "68.45", "440,000.00"],
			["46.97", "38.05", "124,000.00"],
			["36.25", "28.73", "51,800.00"],
			["38.66", "28.73", "52,290.00"],
		]);
});
