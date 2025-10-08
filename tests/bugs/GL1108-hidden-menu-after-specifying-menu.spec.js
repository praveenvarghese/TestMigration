/*!
 * @AIMMS_FILE=models/Bugs/GL1108-MenuBarRemainsHidden/68348.aimms
 */

scenario(
	"Menu bar would remain hidden after specifying menu bar, hiding and then 'unhiding'.",
	() => {
		loadPage("Main Project/home");

		// Assert that the Menu is available
		getPageMenu().should.exist;

		// Set HideMenu identifier to "Menu Hidden" option entry.
		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.setOptions([
				{
					name: "Menu Bar",
					value: "NavigationMenuBar",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
				},
			]);

		// Close "Application Settings" option Editor
		//findWidget("application").closeOptionDialog();

		// Assert Menu continues to be available on Home Page.
		getPageMenu().should.exist;

		// Set the Hidden switch to true
		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.setOptions([
				{
					name: "Menu Hidden",
					value: "TRUE",
					valueType: "LITERAL",
					optionEditorType: "BOOLEAN",
					sliceInfo: null,
				},
			]);

		// Assert Menu is indeed hidden.
		getPageMenu().should.not.exist;

		// Unhide the menu
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

		// Make sure the menu is indeed back, which was not the case before fixing bug #1108.
		getPageMenu().should.exist;

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();
	}
);
