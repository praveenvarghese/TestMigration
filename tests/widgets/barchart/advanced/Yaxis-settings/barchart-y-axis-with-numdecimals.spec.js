/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("On applying numDecimals, Bar Chart shows only relevant data.", () => {
	loadPage("Main Project/Page3");

	findWidget("FansData")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "318.19",
				valueType: "LITERAL",
			},
			{
				name: "Step",
				value: "0.005",
				valueType: "LITERAL",
			},
		]);

	findWidget("FansData")
		.getNumberOfBars()
		.should.be.equal(1);

	findWidget("FansData")
		.getYAxisElements()
		.should.eql(["318.19", "318.2"]);

	findWidget("FansData")
		.findBars(["p_NrOfFans", "song_8", "year_1"])
		.should.include.something.like({
			label: "(p_NrOfFans,song_8,year_1)",
			value: "318.20",
		});

	findWidget("FansData")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "3",
		});

	findWidget("FansData")
		.getYAxisElements()
		.should.eql(["318.19", "318.195", "318.197"]);

	findWidget("FansData")
		.findBars(["p_NrOfFans", "song_8", "year_1"])
		.should.include.something.like({
			label: "(p_NrOfFans,song_8,year_1)",
			value: "318.197",
		});

	findWidget("FansData")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "Four",
			valueType: "identifier",
		});

	findWidget("FansData")
		.getYAxisElements()
		.should.eql(["318.19", "318.195", "318.1974"]);

	findWidget("FansData")
		.findBars(["p_NrOfFans", "song_8", "year_1"])
		.should.include.something.like({
			label: "(p_NrOfFans,song_8,year_1)",
			value: "318.1974",
		});
});
