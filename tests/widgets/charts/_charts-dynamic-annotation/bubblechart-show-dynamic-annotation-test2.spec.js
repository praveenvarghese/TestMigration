/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Bubblechart should show dynamic annotation - Test 2", () => {
	// Model: Songs

	// Page3: Bubblechart annotation based on changing value of element parameter in procedure

	loadPage("Main Project/Page4");

	findWidget("FansBubbles")
		.findBubbles()
		.should.have.numberOfItems(50);

	findWidget("FansBubbles")
		.findBubble(["year_3", "song_10"])
		.click();

	findWidget("FansBubbles")
		.findBubbles()
		.should.include.something.like({
			label: "(year_3, song_10)",
			value: "x: 10.00, y: 3.00, size: 48.05",
			annotations: ["goodSong"],
		});

	findWidget("RunScenario2").click();

	findWidget("FansBubbles")
		.findBubble(["year_1", "Despacito"])
		.click();

	findWidget("FansBubbles")
		.findBubbles()
		.should.include.something.like({
			label: "(year_1, Despacito)",
			value: "x: 10.00, y: 1.00, size: 272.27",
			annotations: ["excellentSong"],
		});
});
