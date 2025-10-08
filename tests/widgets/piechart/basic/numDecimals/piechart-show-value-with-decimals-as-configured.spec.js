/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Piechart wedges shows value with decimal values as configured in Misc options", () => {
	// Model: Songs

	loadPage("Main Project/Page5");

	findWidget("FansPie")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "3",
		});

	findWidget("FansPie")
		.findWedges(["year_2", "song_9"])
		.should.include.something.like({
			label: "(year_2,song_9)",
			value: "122.552 (2%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.findWedges(["year_2"])
		.should.include.something.like({
			label: "(year_2)",
			value: "1,213.205 (24%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "One",
			valueType: "identifier",
		});

	findWidget("FansPie")
		.findWedges(["year_2", "song_9"])
		.should.include.something.like({
			label: "(year_2,song_9)",
			value: "122.6 (2%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.findWedges(["year_2"])
		.should.include.something.like({
			label: "(year_2)",
			value: "1,213.2 (24%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "5",
		});

	findWidget("FansPie")
		.findWedges(["year_2", "song_9"])
		.should.include.something.like({
			label: "(year_2,song_9)",
			value: "122.55199 (2%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.findWedges(["year_2"])
		.should.include.something.like({
			label: "(year_2)",
			value: "1,213.20540 (24%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "Four",
			valueType: "identifier",
		});

	findWidget("FansPie")
		.findWedges(["year_2", "song_9"])
		.should.include.something.like({
			label: "(year_2,song_9)",
			value: "122.5520 (2%)",
			annotations: ["goodSong"],
		});

	findWidget("FansPie")
		.findWedges(["year_2"])
		.should.include.something.like({
			label: "(year_2)",
			value: "1,213.2054 (24%)",
			annotations: ["goodSong"],
		});
});
