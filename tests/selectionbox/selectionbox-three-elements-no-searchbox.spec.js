/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario(
	"Verify whether opening the selectionbox with 3 elements (so, no searchbox present) does not show a lot of superfluous space in the dropdown.",
	() => {
		loadPage("Main Project/home");

		// First remove 3 elements from the original set.
		findWidget("RemoveThreeElements").click();

		// Open the dropdown with the item to select
		findWidget("CountrySelector").click();

		// Check the colour of the position just below the (bottom of)
		// the dropdown that extends from the widget, also just below the dropshadow
		findWidget("CountrySelector")
			.pickColor(0, 143)
			.should.beSameColorAs([
				colors.colorPrimitiveGrey15.r,
				colors.colorPrimitiveGrey15.g,
				colors.colorPrimitiveGrey15.b,
			]);
	}
);
