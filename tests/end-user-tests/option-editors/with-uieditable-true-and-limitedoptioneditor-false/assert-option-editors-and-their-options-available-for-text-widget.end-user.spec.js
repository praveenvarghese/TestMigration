/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Text Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Second Page");

		// Verify that the Kebab menu is present
		findWidget("ExplanotaryText")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Text Widget Settings, and assert the info on Option Editor.
		findWidget("ExplanotaryText")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(textWidgetOptions());

		// For the Text Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("ExplanotaryText")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "ExplanotaryText",
				"OptionEditorTab Title": "Miscellaneous",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("ExplanotaryText")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.beEqualTo([
				{
					Name: "contents",
					NewOptionType: true,
					Value: "",
					Index: 0,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "Visible",
					NewOptionType: false,
					Value: "TextVisible",
					Index: 1,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
			]);
	}
);
