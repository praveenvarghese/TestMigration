/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate removing per identifier option will fallback to default", () => {
	loadPage("Main Project/SecondPage");

	findWidget("Aircraft Properties_2")
		.openTableContentsOptionEditor()
		.modifyContents(0, null, null, { type: "Clear value" }, null, null);

	findWidget("Aircraft Properties_2")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.90 m", "70,900.0000"],
			["37.57 m", "77,000.0000"],
			["63.66 m", "242,000.0000"],
			["39.50 m", "101,000.0000"],
			["76.28 m", "440,000.0000"],
			["46.97 m", "124,000.0000"],
			["36.25 m", "51,800.0000"],
			["38.66 m", "52,290.0000"],
		]);
});
