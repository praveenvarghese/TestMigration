/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Selectionbox with Element Text", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Selectionbox");

	// Selection box with parameter as contents
	findWidget("parameter_selection_table")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("Italian");

	findWidget("selectionbox_parameter").select("French");

	findWidget("parameter_selection_table")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("French");

	// Selection box with an element parameter as contents
	findWidget("element_parameter_selection_scalar")
		.getValue("SelectedCousineE")
		.should.be.equal("Italian");

	findWidget("selectionbox_element_parameter").select("Thai");

	findWidget("element_parameter_selection_scalar")
		.getValue("SelectedCousineE")
		.should.be.equal("Thai");
});
