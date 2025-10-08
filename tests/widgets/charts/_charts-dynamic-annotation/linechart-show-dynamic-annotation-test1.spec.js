/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Linechart should show dynamic annotation - Test 1", () => {
	// Model: Songs

	// Page6: Linechart annotation based on selection in  table with (indexed) element parameter

	loadPage("Main Project/Page6");

	findWidget("FansLines")
		.getHeaderRow(0)
		.getLabels()
		.should.include.members(["year_2", "year_5"]);

	findWidget("FansLines")
		.findPoints(["year_2", "p_NrOfFans"])
		.should.include.something.like({
			label: "(year_2,p_NrOfFans,song_6)",
			value: "59.34",
			annotations: ["reasonableSong"],
		});

	findWidget("CategoryGroups")
		.getCell(5, 0)
		.setValue("excellent");

	findWidget("FansLines")
		.findPoints(["year_4", "p_NrOfFans"])
		.should.include.something.like({
			label: "(year_4,p_NrOfFans,song_6)",
			value: "187.06",
			annotations: ["excellentSong"],
		});
});
