/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Multiselect with Element Text", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Multiselect");

	// Multiselect with parameter as contents
	findWidget("multiselect_parameter_selection_table")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("Italian");

	findWidget("multiselect_parameter").select(["French"]);

	findWidget("multiselect_parameter_selection_table")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("Italian");

	findWidget("multiselect_parameter_selection_table")
		.getColHeaderCell(0, 1)
		.getText()
		.should.be.equal("French");

	// Multiselect with an element parameter as contents
	findWidget("multiselect_element_parameter_selection_scalar")
		.getValue("SelectedCousineE")
		.should.be.equal("Italian");

	findWidget("multiselect_element_parameter").select(["Thai"]);

	findWidget("multiselect_element_parameter_selection_scalar")
		.getValue("SelectedCousineE")
		.should.be.equal("Thai");
});
