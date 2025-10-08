/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario(
	"Verify whether opening the selectionbox with just 1 element does not show a lot of superfluous space in the dropdown.",
	() => {
		loadPage("Main Project/home");

		// Open the dropdown with the item to select
		findWidget("ComposerSelector").click();

		// Check the colour of the position just below the drop-shadow of the dropdown
		findWidget("ComposerSelector")
			.pickColor(0, 81)
			.should.beSameColorAs([
				colors.colorPrimitiveGrey15.r,
				colors.colorPrimitiveGrey15.g,
				colors.colorPrimitiveGrey15.b,
			]); // This should be the base theme color for the app canvas
	}
);
