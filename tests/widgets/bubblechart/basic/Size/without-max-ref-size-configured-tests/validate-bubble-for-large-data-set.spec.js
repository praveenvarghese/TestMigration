/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Asserting Bubble chart with large data like 16001 bubbles loads.", () => {
	loadPage("Main Project/Charts/Bubblechart/Large Bubblechart");

	findWidget("Large Bubblechart")
		.getBubblesCount(15000)
		.should.be.eql(16001);
});
