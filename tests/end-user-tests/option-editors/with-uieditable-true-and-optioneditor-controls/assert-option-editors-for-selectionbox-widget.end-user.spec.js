/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Selection-Box (V1) Widget Settings", () => {
	loadPage("Main Project/Great Test Page");

	// Verify that the Kebab menu is present
	findWidget("BlineFilterBySelectionBox")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Selection-Box Widget Settings, and assert the info on Option Editor.
	findWidget("BlineFilterBySelectionBox")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([
			{
				Name: "Contents",
				Tooltip: "Contents",
				IsHighlighted: true,
				Icon: "0xe097",
				Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
			},
			{
				Name: "Change Type",
				Tooltip: "Change Type",
				IsHighlighted: false,
				Icon: "0xe3a8",
				Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
			},
			{
				Name: "Miscellaneous",
				Tooltip: "Miscellaneous",
				IsHighlighted: false,
				Icon: "0xe900",
				Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
			},
		]);

	// For the Selection-Box Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("BlineFilterBySelectionBox")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "BlineFilterBySelectionBox",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("BlineFilterBySelectionBox")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
		]);
});
