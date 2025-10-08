/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Piechart Element Text", () => {
	// Model: MealRus
	loadPage("Main Project/Charts/Piechart");

	findWidget("Piechart")
		.findWedges()
		.should.have.numberOfItems(11);

	findWidget("Piechart")
		.findWedges(["Ingredient Price", "Beef Stroganoff"])
		.should.include.something.like({
			label: "(Ingredient Price,Beef Stroganoff)",
			value: "1,188.00 $/kg (17%)",
		});
});
