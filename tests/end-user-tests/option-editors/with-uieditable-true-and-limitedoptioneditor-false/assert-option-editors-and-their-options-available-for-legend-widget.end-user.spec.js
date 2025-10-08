/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Legend Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Great Test Page");

		// Verify that the Kebab menu is present
		findWidget("BlineFilterByLegend")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Legend Widget Settings, and assert the info on Option Editor.
		findWidget("BlineFilterByLegend")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(legendWidgetOptions());

		// For the Legend Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("BlineFilterByLegend")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "BlineFilterByLegend",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("BlineFilterByLegend")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("BlineFilterByLegend")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "", Index: 1 },
			]);
	}
);
