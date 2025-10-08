/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Setting Literal 0 value to 'Menu Hidden' option entry and asserting menu visibility across WebUI.",
	() => {
		loadPage("Main Project/home");

		// Assert Menu is available on Home Page.
		getPageMenu().should.exist;

		// Assert "Menu Hidden" option entry in Application settings/Misc tab exists
		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Menu Bar",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
				{
					Name: "Menu Hidden",
					NewOptionType: true,
					Value: "false",
					Index: 1,
				},
			]);

		// Set HideMenu identifier to "Menu Hidden" option entry.
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

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		// Assert Menu continues to be available on Home Page.
		getPageMenu().should.exist;

		//Navigate to "Third Page".
		findWidget("PageJumpTestButton").click();

		// Assert Menu continues to be available on "Third Page".
		getPageMenu().should.exist;

		//Navigate to "Fourth Page"
		findWidget("Navigate to Fourth Page").click();

		// Assert Menu is hidden on this "Fourth Page"
		getPageMenu().should.exist;

		// Assert "Menu Hidden" option entry in Application settings/Misc tab exists
		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Menu Bar",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
				{
					Name: "Menu Hidden",
					NewOptionType: true,
					Value: "false",
					Index: 1,
				},
			]);

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		//Navigate to "Switch Page"
		findWidget("Navigate to Switch Page_1").click();

		// Assert Menu is available on this "Switch Page".
		getPageMenu().should.exist;
	}
);
