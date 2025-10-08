/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Bar Chart Widget Settings", () => {
	loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

	// Verify that the Kebab menu is present
	findWidget("BarChart_1_1")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Bar Chart Widget Settings, and assert the info on Option Editor.
	findWidget("BarChart_1_1")
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
				Name: "Pivot",
				Tooltip: "Pivot",
				IsHighlighted: false,
				Icon: "0xe12d",
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

	// For the Bar Chart Widget settings Option Editor, assert the header and default opened tab title.
	findWidget("BarChart_1_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Scrum Master - Widget Info",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("BarChart_1_1")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 2 },
			{
				Name: "Title",
				NewOptionType: true,
				Value: "Scrum Master - Widget Info",
				Index: 3,
			},
		]);
});
