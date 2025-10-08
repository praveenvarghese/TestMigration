/*!
 * @AIMMS_FILE=models/SelectionBoxTooltips/SelectionBoxTooltips.aimms
 */

scenario(
	"When doing multiple selections in a row from a selectionbox on a dialog page, unexpected tooltips show or no tooltip shows at all",
	() => {
		loadPage("Main Project/home");

		// Open the dialog page
		findWidget("ShowDialog").click();

		// Check for the right tooltip to be displayed when hovering over an element in the dropdown list.
		findWidget("DialogPoetBox")
			.click()
			.mouseHoverInDropdown("Emily Dickinson");

		findWidget("DialogPoetBox")
			.pickColor(-34, -4)
			.should.beSameColorAs([255, 99, 71]); // Red(ish) from the HTML-tooltip

		// Do the first selection and verify the tooltip afterwards
		findWidget("DialogPoetBox").select("Emily Dickinson");
		findWidget("DialogPoetBox").mouseHoverSelectedItem();

		findWidget("DialogPoetBox")
			.getTooltip()
			.should.eql("Emily Dickinson");

		// Deselect the previous choice and select another item.
		findWidget("DialogPoetBox").clearSelection();

		//Bug#3927-assert clear selection is removing the selected value and no value is selected
		findWidget("DialogPoetBox")
			.getValue()
			.should.be.equal("Select SelectedPoet");

		findWidget("DialogPoetBox")
			.click()
			.mouseHoverInDropdown("William Shakespeare");

		findWidget("DialogPoetBox")
			.pickColor(-34, 26)
			.should.beSameColorAs([255, 99, 71]); // Red(ish) from the HTML-tooltip

		findWidget("DialogPoetBox").select("William Shakespeare");
		findWidget("DialogPoetBox")
			.getValue()
			.should.eql("William Shakespeare");
		findWidget("DialogPoetBox").mouseHoverSelectedItem();

		findWidget("DialogPoetBox")
			.getTooltip()
			.should.eql("William Shakespeare"); // i.e. not the HTML one, which has another text.
	}
);
