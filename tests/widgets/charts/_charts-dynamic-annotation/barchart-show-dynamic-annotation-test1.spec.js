/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Barchart should show dynamic annotation - Test 1", () => {
	// Model: Songs

	// Page3: Barchart annotation based on selection in  table with (indexed) element parameter

	loadPage("Main Project/Page3");

	findWidget("FansData")
		.getHeaderRow(1)
		.getLabels()
		.should.include.members(["song_1", "song_6", "song_10"]);

	findWidget("FansData")
		.findBars(["p_NrOfFans", "song_6", "year_2"])
		.should.include.something.like({
			label: "(p_NrOfFans,song_6,year_2)",
			annotations: ["reasonableSong"],
			value: "59.34",
		});

	findWidget("SongCategory")
		.getCell(5, 0)
		.setValue("excellent");

	findWidget("FansData")
		.findBars(["p_NrOfFans", "song_6", "year_4"])
		.should.include.something.like({
			label: "(p_NrOfFans,song_6,year_4)",
			annotations: ["excellentSong"],
			value: "187.06",
		});
});
