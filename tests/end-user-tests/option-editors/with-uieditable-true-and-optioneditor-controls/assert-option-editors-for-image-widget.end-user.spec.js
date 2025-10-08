/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Image Widget Settings", () => {
	loadPage("Main Project/home");

	// Verify that the Kebab menu is present
	findWidget("PlaneImage")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Image Widget Settings, and assert the info on Option Editor.
	findWidget("PlaneImage")
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

	// For the Image Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("PlaneImage")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "PlaneImage",
			"OptionEditorTab Title": "Miscellaneous",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("PlaneImage")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Visible", NewOptionType: false, Value: "1", Index: 0 },
			{ Name: "contents", NewOptionType: false, Value: "CurrentImageFile", Index: 1 },
			{ Name: `Image "object-fit" (css)`, NewOptionType: false, Value: "", Index: 2 },
		]);
});
