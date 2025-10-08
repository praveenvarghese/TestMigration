/*!
 * @AIMMS_FILE=models/Bugs/GL1390-BrokenBubblePivotEditor/BrokenBubblePivotEditor.aimms
 */

scenario("GL1390 - Pivot options editor not working well in Bubble Chart widget.", () => {
	loadPage("Main Project/home");

	findWidget("BookBubble")
		.dragIndex("b")
		.dropIn("Totals");

	findWidget("BookBubble")
		.dragIndex("b")
		.dropIn("Bubbles");

	findWidget("BookBubble")
		.findBubbles()
		.should.have.numberOfItems(5);
});
