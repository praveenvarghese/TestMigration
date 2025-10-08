/*!
 * @AIMMS_FILE=models/IslandsPageV2EUcontrols/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Selection-Box (V2) Widget Settings", () => {
	loadPage("Main Project/home");

	// Verify that the Kebab menu is present
	findWidget("SelectionBoxV2")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Selection-Box V2 Widget Settings, and assert the info on Option Editor.
	findWidget("SelectionBoxV2")
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
				Name: "Miscellaneous",
				Tooltip: "Miscellaneous",
				IsHighlighted: false,
				Icon: "0xe900",
				Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
			},
		]);

	// For the Selection-Box V2 Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("SelectionBoxV2")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "SelectionBoxV2",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("SelectionBoxV2")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
		]);
});
