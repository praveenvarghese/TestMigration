/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario(
	"Verify whether using a 1-dim identifier in a selectionbox indeed works as expected.",
	() => {
		loadPage("Main Project/2ndPage");

		// Open the dropdown with the item to select
		findWidget("OneDimBox").select("UK");

		// Check whether its 'CountrySelected' binary value has indeed been set.
		findWidget("CountrySelTable")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("1.00");
	}
);
