/*!
 * @AIMMS_FILE=models/Bugs/GL4587-SidePanelTextWidget/sidePanelTextWidget.aimms
 */

scenario(
	"GL4587 - Editing a text widget in a side panel should not have the edit menu of the text widget overlapping the top of the text.",
	() => {
		loadPage("Main Project/home/spsp");

		// The trick that I used is by making one of the top lines of the Text in the widget a line full of 'black blocks' and checking for its color.
		// I did not make the first line the black line, because it would then fall under the E2E frameworks clarifying tooltips during the test.
		// It now should appear just below this tooltip.
		findWidget("explanation")
			.editMode()
			.pickColor(70, 190)
			.should.beSameColorAs([32, 33, 36]);
	}
);
