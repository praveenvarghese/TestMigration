/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Barchart should show dynamic annotation - Test 2", () => {
	// Model: Songs

	// Page3: Barchart annotation based on changing value of element parameter in procedure

	loadPage("Main Project/Page3");

	findWidget("FansData")
		.getHeaderRow(1)
		.getLabels()
		.should.include.members(["song_1", "song_6", "song_10"]);

	findWidget("FansData")
		.findBars(["p_NrOfFans", "song_1", "year_3"])
		.should.include.something.like({
			label: "(p_NrOfFans,song_1,year_3)",
			annotations: ["goodSong"],
			value: "114.07",
		});

	findWidget("RunScenario1").click();

	findWidget("FansData")
		.getHeaderRow(1)
		.getLabels()
		.should.include.members(["Despacito"]);

	findWidget("FansData")
		.findBars(["p_NrOfFans", "Despacito", "year_1"])
		.should.include.something.like({
			label: "(p_NrOfFans,Despacito,year_1)",
			annotations: ["excellentSong"],
			value: "290.47",
		});
});
