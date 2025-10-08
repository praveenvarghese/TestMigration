/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Linechart should show dynamic annotation - Test 2", () => {
	// Model: Songs

	// Page6: Linechart annotation based on changing value of element parameter in procedure

	loadPage("Main Project/Page6");

	findWidget("FansLines")
		.getHeaderRow(0)
		.getLabels()
		.should.include.members(["year_2", "year_5"]);

	findWidget("FansLines")
		.findPoints(["year_3", "p_NrOfFans"])
		.should.include.something.like({
			label: "(year_3,p_NrOfFans,song_10)",
			value: "48.05",
			annotations: ["reasonableSong"],
		});

	findWidget("TestScenario2").click();

	findWidget("FansLines")
		.findPoints(["year_1", "p_NrOfFans"])
		.should.include.something.like({
			label: "(year_1,p_NrOfFans,Despacito)",
			value: "272.27",
			annotations: ["excellentSong"],
		});
});
