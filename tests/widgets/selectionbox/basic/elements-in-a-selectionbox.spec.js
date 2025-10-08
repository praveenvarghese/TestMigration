/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Asserting order of Elements on a SelectionBox Widget.", () => {
	// Model: MealRus
	loadPage("Main Project/Selection Widgets/Selectionbox");

	// For a SelectionBox listing entries from a Set that has an "Order By" set.
	// Assert the entries on the SelectionBox widget
	findWidget("CousineSelected_SelectionBox")
		.getAllFullyVisibleOptions()
		.should.eql(["Turkish", "Thai", "Moroccan", "Japanese", "Italian", "Indonesian"]);

	findWidget("CousineSelected_SelectionBox").select("Greek");

	findWidget("CousineSelected_Scalar_2")
		.getValue()
		.should.be.equal("Greek");

	// Assert the entries on the SelectionBox widget
	// findWidget("selectionbox_parameter")
	// 	.getAllFullyVisibleOptions()
	// 	.should.eql(["Italian", "Thai", "French", "Indonesian", "Chinese", "Japanese", "Greek"]);
});
