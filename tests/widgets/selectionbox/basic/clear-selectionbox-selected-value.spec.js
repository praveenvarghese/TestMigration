/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("5543-Clear the selection box value using X option", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Selectionbox");

	// Selection box with element parameter as contents
	findWidget("selectionbox_element_parameter").select("French");

	findWidget("selectionbox_element_parameter")
		.getValue()
		.should.be.equal("French");

	//Clear the SelectionBox
	findWidget("selectionbox_element_parameter").clearSelection();

	findWidget("selectionbox_element_parameter")
		.getValue()
		.should.be.equal("Select SelectedCousineE");

	// 2nd selection box with element parameter with same range as contents
	findWidget("selectionbox_element_parameter2")
		.getValue()
		.should.be.equal("Select SelectedCousineE");

	//Parameter

	// Selection box with parameter as contents
	findWidget("selectionbox_parameter").select("Italian");

	findWidget("selectionbox_parameter")
		.getValue()
		.should.be.equal("Italian");

	//Clear the SelectionBox
	findWidget("selectionbox_parameter").clearSelection();

	findWidget("selectionbox_parameter")
		.getValue()
		.should.be.equal("Select SelectedCousine");
});
