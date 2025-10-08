/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Slider Widget Settings", () => {
	loadPage("Main Project/Great Test Page");

	// Verify that the Kebab menu is present
	findWidget("MyTestSlider")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Slider Widget Settings, and assert the info on Option Editor.
	findWidget("MyTestSlider")
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
				Name: "Totals",
				Tooltip: "Totals",
				IsHighlighted: false,
				Icon: "0xe459",
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

	// For the Slider Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("MyTestSlider")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "MyTestSlider",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("MyTestSlider")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "min", NewOptionType: true, Value: "0", Index: 0 },
			{ Name: "max", NewOptionType: true, Value: "100", Index: 1 },
			{ Name: "step", NewOptionType: true, Value: "1", Index: 2 },
			{ Name: "Decimal Places", NewOptionType: false, Value: "0", Index: 3 },
			{ Name: "Show Units", NewOptionType: false, Value: "0", Index: 4 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
			{ Name: "Title", NewOptionType: true, Value: "MyTestSlider", Index: 6 },
		]);
});
