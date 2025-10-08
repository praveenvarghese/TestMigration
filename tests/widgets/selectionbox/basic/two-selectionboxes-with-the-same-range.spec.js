/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Two selectionboxes with the same element parameter range", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Selectionbox");

	// Selection box with element parameter as contents
	findWidget("selectionbox_element_parameter").select("French");

	findWidget("selectionbox_element_parameter")
		.getValue()
		.should.be.equal("French");

	// 2nd selection box with element parameter with same range as contents
	findWidget("selectionbox_element_parameter2").select("French");

	findWidget("selectionbox_element_parameter2")
		.getValue()
		.should.be.equal("French");
});
