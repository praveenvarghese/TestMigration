/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Asserting order of Elements on a List Widget.", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Legend");

	// Assert the entries on the Legend widget
	findWidget("legend_element_parameter")
		.getLegendEntries()
		.should.eql([
			"Italian",
			"Thai",
			"French",
			"Indonesian",
			"Chinese",
			"Japanese",
			"Greek",
			"Moroccan",
			"Turkish",
			"Fastfood",
		]);

	// Assert the entries on the Legend widget
	findWidget("LegendWithOrder")
		.getLegendEntries()
		.should.eql([
			"Turkish",
			"Thai",
			"Moroccan",
			"Japanese",
			"Italian",
			"Indonesian",
			"Greek",
			"French",
			"Fastfood",
			"Chinese",
		]);

	findWidget("LegendWithOrder").select("Greek");

	findWidget("CousineSelected_Scalar")
		.getValue()
		.should.be.equal("Greek");
});
