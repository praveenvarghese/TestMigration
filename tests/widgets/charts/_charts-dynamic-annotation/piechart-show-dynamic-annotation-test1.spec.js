/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Piechart should show dynamic annotation - Test 1", () => {
	// Model: Songs

	// Page5: Piechart annotation based on selection in  table with (indexed) element parameter

	loadPage("Main Project/Page5");

	findWidget("FansPie")
		.findWedges()
		.should.have.numberOfItems(55);

	findWidget("FansPie")
		.findWedges(["year_2", "song_6"])
		.should.include.something.like({
			label: "(year_2,song_6)",
			value: "59.34 (1%)",
			annotations: ["reasonableSong"],
		});

	findWidget("FansPie")
		.findWedges(["year_2"])
		.should.include.something.like({
			label: "(year_2)",
			value: "1,213.21 (24%)",
			annotations: ["goodSong"],
		});

	findWidget("CategoryValues")
		.getCell(5, 0)
		.setValue("excellent");

	findWidget("FansPie")
		.findWedges(["year_4", "song_6"])
		.should.include.something.like({
			label: "(year_4,song_6)",
			value: "187.06 (3%)",
			annotations: ["excellentSong"],
		});

	findWidget("FansPie")
		.findWedges(["year_4"])
		.should.include.something.like({
			label: "(year_4)",
			value: "966.44 (17%)",
			annotations: ["goodSong"],
		});
});
