/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Piechart should show dynamic annotation - Test 2", () => {
	// Model: Songs

	// Page5: Piechart annotation based on changing value of element parameter in procedure

	loadPage("Main Project/Page5");

	findWidget("FansPie")
		.findWedges()
		.should.have.numberOfItems(55);

	findWidget("FansPie")
		.findWedges(["year_3", "song_10"])
		.should.include.something.like({
			label: "(year_3,song_10)",
			value: "48.05 (1%)",
			annotations: ["reasonableSong"],
		});

	findWidget("PieScenario1").click();

	findWidget("FansPie")
		.findWedges(["year_1", "Despacito"])
		.should.include.something.like({
			label: "(year_1,Despacito)",
			value: "272.27 (5%)",
			annotations: ["excellentSong"],
		});
});
