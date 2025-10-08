/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Legend with Element Text", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Legend");

	// Legend with parameter as contents
	findWidget("legend_parameter_selection_table")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("Italian");

	findWidget("legend_parameter").select("French");

	findWidget("legend_parameter_selection_table")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("French");

	// Legend with an element parameter as contents
	findWidget("legend_element_parameter_selection_scalar")
		.getValue("SelectedCousineE")
		.should.be.equal("Italian");

	findWidget("legend_element_parameter").select("Thai");

	findWidget("legend_element_parameter_selection_scalar")
		.getValue("SelectedCousineE")
		.should.be.equal("Thai");
});
