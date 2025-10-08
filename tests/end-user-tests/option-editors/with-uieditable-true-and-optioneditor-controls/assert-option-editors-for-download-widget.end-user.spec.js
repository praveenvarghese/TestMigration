/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Download Widget Settings", () => {
	loadPage("Main Project/THird Page");

	// Verify that the Kebab menu is present
	findWidget("DownloadTheFile")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Download Button Widget Settings, and assert the info on Option Editor.
	findWidget("DownloadTheFile")
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

	// For the Download Button Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("DownloadTheFile")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "DownloadTheFile",
			"OptionEditorTab Title": "Miscellaneous",
		});
});
