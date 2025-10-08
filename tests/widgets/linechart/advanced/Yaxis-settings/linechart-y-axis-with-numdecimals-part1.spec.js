/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("On applying numDecimals, Line Chart shows only relevant data.", () => {
	loadPage("Main Project/Page6");

	findWidget("FansLines")
		.openLinechartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "1406",
				valueType: "LITERAL",
			},
		]);

	findWidget("FansLines")
		.getCountOfPoints()
		.should.be.equal(1);

	findWidget("FansLines")
		.getYAxisElements()
		.should.eql([
			"1,406",
			"1,406.2",
			"1,406.4",
			"1,406.6",
			"1,406.8",
			"1,407",
			"1,407.2",
			"1,407.4",
			"1,407.6",
		]);

	findWidget("FansLines")
		.findPoints(["year_1", "p_NrOfFans"])
		.should.include.something.like({
			label: "(year_1,p_NrOfFans,song_10)",
			value: "84.20",
		});

	findWidget("FansLines")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "3",
		});

	findWidget("FansLines")
		.getYAxisElements()
		.should.eql([
			"1,406",
			"1,406.2",
			"1,406.4",
			"1,406.6",
			"1,406.8",
			"1,407",
			"1,407.2",
			"1,407.4",
			"1,407.597",
		]);

	findWidget("FansLines")
		.findPoints(["year_1", "p_NrOfFans"])
		.should.include.something.like({
			label: "(year_1,p_NrOfFans,song_10)",
			value: "84.204",
		});
});
