/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Gantt Chart Widget Settings", () => {
	loadPage("Main Project/Gantt Page");

	// Verify that the Kebab menu is present
	findWidget("The Gantt Chart")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Gantt Chart Widget Settings, and assert the info on Option Editor.
	findWidget("The Gantt Chart")
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

	// For the Gantt Chart Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("The Gantt Chart")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Gantt Chart",
			"OptionEditorTab Title": "Change Type",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("The Gantt Chart")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Show Units", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 1 },
			{ Name: "Title", NewOptionType: true, Value: "Gantt Chart", Index: 2 },
			{
				Name: "Highlight",
				NewOptionType: true,
				Value: "GanttHighlight(pe, j, IndexIdentifiers)",
				Index: 3,
			},
		]);
});
