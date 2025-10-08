/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario(
	"Verify that after adding a new selectionbox, this selectionbox is small. There was a bug where you got a whole empty dropdown below it upon creation.",
	() => {
		loadPage("Main Project/2ndPage");

		// Click the dropdown open in order to start typing text.
		findWidget("OneDimBox").click();

		// Pass a text for an element that is not in the list
		findWidget("OneDimBox").pressKeys(["NOTPRESENT"]);

		// Verify the header of the selectionbox. This should read 'Select'.
		findWidget("OneDimBox")
			.getValue()
			.should.equal("Select CountrySelected");

		// Click the dropdown open in order to start typing text.
		findWidget("BigNumberBox").click();

		// Pass a text for an element that is not in the list
		findWidget("BigNumberBox").pressKeys(["NOTPRESENT"]);

		// Verify the header of the selectionbox. This should read 'Select'.
		findWidget("BigNumberBox")
			.getValue()
			.should.equal("Select SelectedNumber");
	}
);
