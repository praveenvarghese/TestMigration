/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Map (MapV3) Widget Settings", () => {
	loadPage("Main Project/MapV3 Test Page/MapV3");

	// Verify that the Kebab menu is present
	findWidget("MapV3")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Map V3 Widget Settings, and assert the info on Option Editor.
	findWidget("MapV3")
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

	// For the Map V3 Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("MapV3")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "MapV3 with Nodes and Arcs",
			"OptionEditorTab Title": "Miscellaneous",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("MapV3")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Zoom", NewOptionType: true, Value: "5", Index: 0 },
			{
				Name: "Step Size",
				NewOptionType: true,
				Value: "",
				Index: 1,
				"Option-Entry Action Tooltip": "undefined",
				"Option-Entry Action Icon": "",
			},
			{
				Name: "Center Latitude",
				NewOptionType: true,
				Value: "23.40276490540795",
				Index: 2,
			},
			{ Name: "Center Longitude", NewOptionType: true, Value: "83.9794921875", Index: 3 },
			{ Name: "Visible", NewOptionType: false, Value: "Visibility", Index: 4 },
			{
				Name: "Title",
				NewOptionType: true,
				Value: "MapV3 with Nodes and Arcs",
				Index: 5,
			},
		]);
});
