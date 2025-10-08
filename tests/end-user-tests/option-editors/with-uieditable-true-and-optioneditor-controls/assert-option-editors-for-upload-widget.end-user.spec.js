/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Upload Button Widget Settings", () => {
	loadPage("Main Project/THird Page");

	// Verify that the Kebab menu is present
	findWidget("UploadTheFile")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Upload Button Widget Settings, and assert the info on Option Editor.
	findWidget("UploadTheFile")
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

	// For the Upload Button Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("UploadTheFile")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "UploadTheFile",
			"OptionEditorTab Title": "Miscellaneous",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("UploadTheFile")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Title", NewOptionType: true, Value: "", Index: 1 },
			{ Name: "Custom Tooltip", NewOptionType: true, Value: "", Index: 2 },
		]);
});
