/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Barchart functionality when it has zero values", () => {
	loadPage("Main Project/Charts/Bubblechart");

	//Validate number of bubbles doesnt change even after changing size data to negative values
	findWidget("Bubblechart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("Bubblechart")
		.getZeroSizeBubbles()
		.should.have.numberOfItems(0);

	findWidget("loadnegativevalues").click();

	findWidget("Bubblechart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("Bubblechart")
		.getZeroSizeBubbles()
		.should.have.numberOfItems(0);
});
