/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for List Widget Settings", () => {
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
				Name: "Miscellaneous",
				Tooltip: "Miscellaneous",
				IsHighlighted: true,
				Icon: "0xe900",
				Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
			},
		]);

	// For the List Chart Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("List Widget")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Planes Info",
			"OptionEditorTab Title": "Miscellaneous",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("List Widget")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Title", NewOptionType: true, Value: "Planes Info", Index: 1 },
		]);
});
