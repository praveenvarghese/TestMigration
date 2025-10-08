/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"With 'Application Settings -> Data Manager Hidden' controlled through an identifier, assert display of 'Data Manager' top header button.",
	() => {
		// Navigate to home page.
		loadPage("Main Project/Switch Page");

		// Open "Application Settings, set "Data Manager Hidden" property to an identifier
		findWidget("application")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Data Manager Hidden")
			.setValue({
				value: "HideDataManager",
				valueType: "IDENTIFIER",
				optionEditorType: "IDENTIFIER",
				sliceInfo: null,
			});

		// Assert "Data Manager" top header button is visible
		getPageHeader()
			.getButtons()
			.getDataManager()
			.isDisplayedInViewport().should.be.true;

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		// Click on the button that toggles HideDataManager identifier value
		findWidget("Toggle HideDataManager Flag").click();

		// Assert "Data Manager" top header button is now not visible
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
	}
);
