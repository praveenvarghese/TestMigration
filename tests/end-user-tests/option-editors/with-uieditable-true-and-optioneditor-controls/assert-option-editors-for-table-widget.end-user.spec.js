/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Table Widget Settings", () => {
	loadPage("Main Project/Shipping Schedules");

	// Click on Table Widget Settings, and assert the info on Option Editor.
	findWidget("Shipping Departure DateTime")
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

	// For the Table Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("Shipping Departure DateTime")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Shipping Departure DateTime",
			"OptionEditorTab Title": "Contents",
		});
});
