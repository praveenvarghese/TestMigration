/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate per identifier visibility option functionality", () => {
	loadPage("Main Project/ThirdPage");

	findWidget("Aircraft Properties_3")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.90", "70,900.00"],
			["37.57", "77,000.00"],
			["63.66", "242,000.00"],
			["39.50", "101,000.00"],
			["76.28", "440,000.00"],
			["46.97", "124,000.00"],
			["36.25", "51,800.00"],
			["38.66", "52,290.00"],
		]);

	findWidget("TableSettings_2").setValue("selectVisibiltyFL", "Never Show");

	findWidget("Aircraft Properties_3")
		.getGridValues()
		.should.shallowDeepEqual([
			["70,900.00"],
			["77,000.00"],
			["242,000.00"],
			["101,000.00"],
			["440,000.00"],
			["124,000.00"],
			["51,800.00"],
			["52,290.00"],
		]);

	findWidget("TableSettings_2").setValue("selectVisibiltyFL", "Default");

	findWidget("Aircraft Properties_3")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.90", "70,900.00"],
			["37.57", "77,000.00"],
			["63.66", "242,000.00"],
			["39.50", "101,000.00"],
			["76.28", "440,000.00"],
			["46.97", "124,000.00"],
			["36.25", "51,800.00"],
			["38.66", "52,290.00"],
		]);

	findWidget("TableSettings_2").setValue("selectVisibiltyWS", "Always Show");

	findWidget("Aircraft Properties_3")
		.getGridValues()
		.should.shallowDeepEqual([
			["34.90", "35.10", "70,900.00"],
			["37.57", "34.10", "77,000.00"],
			["63.66", "60.30", "242,000.00"],
			["39.50", "34.32", "101,000.00"],
			["76.28", "68.45", "440,000.00"],
			["46.97", "38.05", "124,000.00"],
			["36.25", "28.73", "51,800.00"],
			["38.66", "28.73", "52,290.00"],
		]);

	findWidget("TableSettings_2").setValue("selectVisibiltyFL", "Never Show");

	findWidget("TableSettings_2").setValue("selectVisibiltyWS", "Never Show");

	findWidget("TableSettings_2").setValue("selectVisibiltyMTOW", "Never Show");

	findWidget("Aircraft Properties_3")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty TableContents contains no data");
});
