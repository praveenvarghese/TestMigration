/*!
 * @AIMMS_FILE=models/Bugs/GL1880-InitialSort/InitialSort.aimms
 */

scenario(
	"On a WebUI app with menu hidden through 'Menu Hidden' option entry. Assert menu is available post clearing off the option entry.",
	() => {
		loadPage("Main Project/First Page");

		// Model used - models\Bugs\GL1880-InitialSort

		// Assert "Menu Hidden" option entry in Application settings/Misc tab exists
		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.setOptions([
				{
					name: "Menu Hidden",
					value: "FALSE",
					valueType: "LITERAL",
					optionEditorType: "BOOLEAN",
					sliceInfo: null,
				},
			]);

		// Assert Menu is available on "First Page".
		getPageMenu().should.exist;

		//Navigate to "Child Page"
		findWidget("Navigate To Child Page").click();

		// Assert Menu is available on this "Child Page"
		getPageMenu().should.exist;

		//Navigate to "Second Page"
		findWidget("Navigate to Second Page_1").click();

		// Assert Menu is available on this "Second Page"
		getPageMenu().should.exist;
	}
);
