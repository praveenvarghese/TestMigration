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
				value: "0",
				type: "literal",
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
});
