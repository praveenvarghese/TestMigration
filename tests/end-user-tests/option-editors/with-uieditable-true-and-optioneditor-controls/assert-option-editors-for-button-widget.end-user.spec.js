/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Button Widget Settings", () => {
	loadPage("Main Project/home");

	// Verify that the Kebab menu is present
	findWidget("Optimize Schedule")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Button Widget Settings, and assert the info on Option Editor.
	findWidget("Optimize Schedule")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([
			{
				Name: "Miscellaneous",
				Tooltip: "Miscellaneous",
				IsHighlighted: true,
				Icon: "0xe900",
				Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
			},
		]);

	// For the Button Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("Optimize Schedule")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Optimize Schedule",
			"OptionEditorTab Title": "Miscellaneous",
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
});
