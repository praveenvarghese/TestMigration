/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Treemap should show dynamic values - Test 2", () => {
	// Model: Songs

	// Page7: Treemap dynamic values based on changing value of element parameter in procedure

	loadPage("Main Project/Page7");

	findWidget("FansTreemap")
		.findRectangles()
		.should.have.numberOfItems(10);

	findWidget("FansTreemap")
		.findRectangles()
		.should.include.something.like({
			label: "(p_NrOfFans, song_10)",
			value: "310.51 (6%)",
		});

	findWidget("TreemapScenario2").click();

	findWidget("FansTreemap")
		.findRectangles()
		.should.include.something.like({
			label: "(p_NrOfFans, Despacito)",
			value: "1,069.16 (18%)",
		});
});
