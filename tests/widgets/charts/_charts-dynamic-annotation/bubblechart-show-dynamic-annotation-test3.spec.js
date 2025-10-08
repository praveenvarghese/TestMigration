/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Bubblechart should show dynamic annotation - Test 1", () => {
	// Model: Songs

	// Page3: Bubblechart annotation based on selection in  table with (indexed) element parameter

	loadPage("Main Project/Page4");

	findWidget("FansBubbles")
		.findBubbles()
		.should.have.numberOfItems(50);

	findWidget("FansBubbles")
		.findBubble(["year_2", "song_6"])
		.click();

	findWidget("FansBubbles")
		.findBubbles()
		.should.include.something.like({
			label: "(year_2, song_6)",
			value: "x: 6.00, y: 2.00, size: 59.34",
			annotations: ["reasonableSong"],
		});

	findWidget("CategoryData")
		.getCell(5, 0)
		.setValue("excellent");

	findWidget("FansBubbles")
		.findBubble(["year_4", "song_6"])
		.click();

	findWidget("FansBubbles")
		.findBubbles()
		.should.include.something.like({
			label: "(year_4, song_6)",
			value: "x: 6.00, y: 4.00, size: 187.06",
			annotations: ["excellentSong"],
		});
});
