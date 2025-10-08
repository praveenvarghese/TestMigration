/*!
 * @AIMMS_FILE=models/SelectionBoxTooltips/SelectionBoxTooltips.aimms
 */

scenario(
	"When doing multiple selections in a row from a selectionbox, the selected value would display with its last 4 letters repeated.",
	() => {
		loadPage("Main Project/home");

		// Check for the right tooltip to be displayed when hovering over an element in the dropdown list.
		findWidget("AuthorSelection")
			.click()
			.mouseHoverInDropdown("Stefan Zweig");

		findWidget("AuthorSelection")
			.getTooltip()
			.should.eql("Tooltip for 'Stefan Zweig'"); // Currently, this succeeds, BUT the tip is not visible in reality due to Z-index problems.

		findWidget("AuthorSelection").select("Stefan Zweig");
		findWidget("AuthorSelection")
			.getValue()
			.should.eql("Stefan Zweig");

		// Now select another value and verify this selected value afterwards.
		findWidget("AuthorSelection").select("Emily Dickinson");
		findWidget("AuthorSelection")
			.getValue()
			.should.eql("Emily Dickinson");
	}
);
