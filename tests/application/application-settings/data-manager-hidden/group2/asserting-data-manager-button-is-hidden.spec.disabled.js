/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"With 'Application Settings -> Data Manager Hidden' controlled through a sliced identifier, assert 'Data Manager' top header button is hidden.",
	() => {
		// Navigate to 'Tests on Application Settings' page.
		loadPage("Main Project/Tests on Application Settings");

		// Assert "Data Manager" top header button is still not visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.false;
	}
);
