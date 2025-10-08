/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Selectionbox with Element Text", () => {
	// Model: MealRus
	// We need to load the page few times because cube-engine state the bug was randomly happening.
	loadPage("Main Project/Selection Widgets/SelectionBox Bug 15581");

	findWidget("selectionbox_bug")
		.findWidgetsBySelector(".selectionbox-container.empty")
		.should.have.numberOfItems(0);

	loadPage("Main Project/Selection Widgets/SelectionBox Bug 15581");

	findWidget("selectionbox_bug")
		.findWidgetsBySelector(".selectionbox-container")
		.should.have.numberOfItems(3);

	loadPage("Main Project/Selection Widgets/SelectionBox Bug 15581");

	findWidget("selectionbox_bug")
		.findWidgetsBySelector(".selectionbox-container.empty")
		.should.have.numberOfItems(0);
});
