/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On List Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Second Page");

		// Verify that the Kebab menu is present
		findWidget("List Widget")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on List Chart Widget Settings, and assert the info on Option Editor.
		findWidget("List Widget")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Widget Extensions",
					Tooltip: "Widget Extensions",
					IsHighlighted: true,
					Icon: "0xe30e",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Miscellaneous",
					Tooltip: "Miscellaneous",
					IsHighlighted: false,
					Icon: "0xe900",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Advanced",
					Tooltip: "Advanced",
					IsHighlighted: false,
					Icon: "0xe1d9",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// For the List Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("List Widget")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Planes Info",
				"OptionEditorTab Title": "Widget Extensions",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("List Widget")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value:
						"WidgetActions(webui::indexWidgetExtension, webui::indexWidgetActionSpec)",
					Index: 0,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("List Widget")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Planes Info", Index: 1 },
			]);
	}
);
