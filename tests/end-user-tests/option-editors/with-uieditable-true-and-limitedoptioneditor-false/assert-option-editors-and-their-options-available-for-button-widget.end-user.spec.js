/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Button Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home");

		// Verify that the Kebab menu is present
		findWidget("Optimize Schedule")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Button Widget Settings, and assert the info on Option Editor.
		findWidget("Optimize Schedule")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(buttonWidgetOptions());

		// For the Button Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("Optimize Schedule")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Optimize Schedule",
				"OptionEditorTab Title": "Action",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("Optimize Schedule")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Optimize Schedule", Index: 1 },
				{ Name: "Custom Tooltip", NewOptionType: true, Value: "", Index: 2 },
			]);
	}
);
