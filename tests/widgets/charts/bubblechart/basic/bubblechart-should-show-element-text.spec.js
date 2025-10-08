/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Barchart should show element text", () => {
	loadPage("Main Project/Charts/Bubblechart");

	findWidget("Bubblechart")
		.findBubble(["Chicken Taco"])
		.click();

	findWidget("Bubblechart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("Bubblechart")
		.findBubbles()
		.should.include.something.like({
			label: "(Chicken Taco)",
			value: "x: 10.00 $/kg, y: 624.50 kg, size: 10.00 $/kg",
		});
});
