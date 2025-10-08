/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Bubble Chart Widget Settings", () => {
	loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

	// Verify that the Kebab menu is present
	findWidget("BubbleChart_1_1")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Bubble Chart Widget Settings, and assert the info on Option Editor.
	findWidget("BubbleChart_1_1")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([
			{
				Name: "Change Type",
				Tooltip: "Change Type",
				IsHighlighted: true,
				Icon: "0xe3a8",
				Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
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

	// For the Bubble Chart Widget settings Option Editor, assert the header and default opened tab title.
	findWidget("BubbleChart_1_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "BubbleChart_1_1",
			"OptionEditorTab Title": "Change Type",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("BubbleChart_1_1")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "X-axis label", NewOptionType: true, Value: "", Index: 0 },
			{ Name: "Y-axis label", NewOptionType: true, Value: "", Index: 1 },
			{ Name: "Size label", NewOptionType: true, Value: "", Index: 2 },
			{ Name: "Show Units", NewOptionType: false, Value: "", Index: 3 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 4 },
			{ Name: "Title", NewOptionType: true, Value: "BubbleChart_1_1", Index: 5 },
		]);
});
