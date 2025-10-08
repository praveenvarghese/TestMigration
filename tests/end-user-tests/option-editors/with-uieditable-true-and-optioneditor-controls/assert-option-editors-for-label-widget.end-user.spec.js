/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Label Widget Settings", () => {
	loadPage("Main Project/Second Page");

	// Verify that the Kebab menu is present
	findWidget("Lab1")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Label Widget Settings, and asssert the info on Option Editor.
	findWidget("Lab1")
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

	// For the Label Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("Lab1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Lab1",
			"OptionEditorTab Title": "Miscellaneous",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("Lab1")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{
				Name: "contents",
				NewOptionType: true,
				Value: "Same Linechart as above...",
				Index: 0,
				"Option-Entry Action Tooltip": "Set to initial",
				"Option-Entry Action Icon": "icon-close",
			},
			{
				Name: "Visible",
				NewOptionType: false,
				Value: "LabelVisible",
				Index: 1,
				"Option-Entry Action Tooltip": "",
				"Option-Entry Action Icon": "",
			},
		]);
});
