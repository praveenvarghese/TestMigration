/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Verify that after adding a new selectionbox, this selectionbox is small. There was a bug where you got a whole empty dropdown below it upon creation.",
	() => {
		loadPage("Main Project/3rdPage?selectionbox-v2=true");

		// Add a new selectionbox widget.
		createWidget("selectionbox-v2", "FreshSelectionBox");

		// Drag it to Area A
		openPageConfigurator()
			.dragWidget("FreshSelectionBox")
			.toArea("Area A");

		// Verify that there is no huge white 'thing' below it.
		findWidget("FreshSelectionBox")
			.pickColor(15, 80)
			.should.beSameColorAs([
				colors.colorPrimitiveGrey15.r,
				colors.colorPrimitiveGrey15.g,
				colors.colorPrimitiveGrey15.b,
			]); // This is the standard background colour of the browser window

		// Now switch to multiselect and back
		// findWidget("FreshSelectionBox").openChangeWidgetTypeOptionEditor().changeWidgetTypeTo("multiselect");
		// findWidget("FreshSelectionBox").openChangeWidgetTypeOptionEditor().should.be.a.widgetOfType("multiselect");

		// findWidget("FreshSelectionBox").openChangeWidgetTypeOptionEditor().changeWidgetTypeTo("selectionbox");
		// findWidget("FreshSelectionBox").should.be.a.widgetOfType("selectionbox");

		// Verify that there is still no huge white 'thing' below it.
		// findWidget("FreshSelectionBox")
		//	.pickColor(15, 80)
		//	.should.beSameColorAs([225, 226, 230]); // This is the standard background colour of the browser window
	}
);
