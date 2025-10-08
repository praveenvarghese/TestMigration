/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Treemap Element Text", () => {
	// Model: MealRus
	loadPage("Main Project/Charts/Treemap");

	findWidget("Treemap")
		.findRectangles()
		.should.have.numberOfItems(10);

	findWidget("Treemap")
		.findRectangles()
		.should.include.something.like({
			label: "(Ingredient Price, Beef Stroganoff)",
			value: "1,188.00 $/kg (17%)",
		});
});
