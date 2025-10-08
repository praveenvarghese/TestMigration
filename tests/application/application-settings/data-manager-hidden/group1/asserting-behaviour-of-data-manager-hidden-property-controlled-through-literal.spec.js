/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"With 'Application Settings -> Data Manager Hidden' controlled through a  literal, assert display of 'Data Manager' top header button.",
	() => {
		// Navigate to home page.
		loadPage("Main Project/home");

		// Assert "Data Manager" top header button is visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.true;

		// Open "Application Settings, set "Data Manager Hidden" flag to true.
		findWidget("application")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Data Manager Hidden")
			.setValue({
				value: "TRUE",
				valueType: "LITERAL",
				optionEditorType: "BOOLEAN",
				sliceInfo: null,
			});

		// Assert "Data Manager" top header button is not visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.false;

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Second Page");

		// Assert "Data Manager" top header button is still not visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.false;

		// Open "Application Settings, set "Data Manager Hidden" flag to false.
		findWidget("application")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Data Manager Hidden")
			.setValue({
				value: "FALSE",
				valueType: "LITERAL",
				optionEditorType: "BOOLEAN",
				sliceInfo: null,
			});

		// Assert "Data Manager" top header button is now visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.true;

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Item Actions/Charts");

		// Assert "Data Manager" top header button is still visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.true;
	}
);
