/*!
 * @AIMMS_FILE=models/SelectionBoxTooltips/SelectionBoxTooltips.aimms
 */

scenario(
	"Check whether the tooltip of a selectionbox does not fall behind the AIMMS menu, because of Z-index issues.",
	() => {
		loadPage("Main Project/home");

		// Multiselect
		findWidget("AuthorSelection").select("Charlotte Brontë");

		findWidget("AuthorSelection").mouseHoverSelectedItem();

		findWidget("AuthorSelection")
			.getTooltip()
			.should.eql("Charlotte Brontë");

		findWidget("ShowDialog")
			.pickColor(-128, -29) // shifted more to the left, since the widget menu is in between, these days. TODO: should not depend on the width of this menu; do not use absolute positions like this
			.should.beSameColorAs([
				colors.colorPrimitiveGrey80.r,
				colors.colorPrimitiveGrey80.g,
				colors.colorPrimitiveGrey80.b,
			]); // Dark grey from the tooltip (as opposed to 'whitish' from the menu bar)
	}
);
