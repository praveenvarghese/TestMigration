/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Treemap should show dynamic values - Test 1", () => {
	// Model: Songs

	// Page7: Treemap dynamic values based on selection in  table with (indexed) element parameter

	loadPage("Main Project/Page7");

	findWidget("FansTreemap")
		.findRectangles()
		.should.have.numberOfItems(10);

	findWidget("FansTreemap")
		.findRectangles()
		.should.include.something.like({
			label: "(p_NrOfFans, song_6)",
			value: "268.07 (5%)",
		});

	findWidget("CategoryClass")
		.getCell(5, 0)
		.setValue("excellent");

	findWidget("FansTreemap")
		.findRectangles()
		.should.include.something.like({
			label: "(p_NrOfFans, song_6)",
			value: "1,007.99 (17%)",
		});
});
