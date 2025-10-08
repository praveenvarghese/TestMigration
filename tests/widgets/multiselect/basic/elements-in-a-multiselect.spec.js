/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Asserting order of Elements on a MultiSelect Widget.", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Multiselect");

	// Assert the entries on the MultiSelect widget
	findWidget("multiselect_element_parameter")
		.getAllEntries()
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

	// Assert the entries on the MultiSelect widget
	findWidget("CousineSelected_MultiSelect")
		.getAllEntries()
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

	findWidget("CousineSelected_MultiSelect").select(["Greek"]);

	findWidget("CousineSelected_Scalar_1")
		.getValue()
		.should.be.equal("Greek");
});
