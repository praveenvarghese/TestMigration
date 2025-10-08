/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"With 'Application Settings -> Data Manager Hidden' controlled through a sliced identifier, assert 'Data Manager' top header button is hidden.",
	() => {
		loadPage("Main Project/home");

		// Assert "Data Manager" top header button is hidden.
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.false;

		// Navigate to 'Tests on Application Settings' page.
		getPageMenu().navigateToPage("Main Project/Tests on Application Settings");

		// Assert "Data Manager" top header button continues to be hidden.
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.false;

		findWidget("Sliced Application Settings Data")
			.getCell(0, 0)
			.setValue(false);

		// Assert "Data Manager" top header button is now visible.
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.true;

		// Refresh the page
		pageRefresh();

		// Assert "Data Manager" top header button continues to be visible.
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.true;
	}
);
