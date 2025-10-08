/*!
 * @AIMMS_FILE=models/IslandsOptionEditorControls/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Scalar Widget Settings", () => {
	loadPage("Main Project/Aircraft Maintenance Calendar/Planes Maintenance Renewal DateTime");

	//#region Single Content Scalar Widget

	// Verify that the Kebab menu is present
	findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
		.isKebabMenuPresent()
		.should.eql(true);

	// Click on Single Content Scalar Widget Settings, and assert the info on Option Editor.
	findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
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

	// For the Single Content Scalar Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Scheduled Planes Maintenance Audit Date",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Show Labels", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
			{ Name: "Enable Multi-Line (1/0)", NewOptionType: false, Value: "", Index: 2 },
			{ Name: "Enable Compact mode (1/0)", NewOptionType: false, Value: "", Index: 3 },
			{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 4 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
			{
				Name: "Title",
				NewOptionType: true,
				Value: "Scheduled Planes Maintenance Audit Date",
				Index: 6,
			},
		]);
	//#endregion

	//#region Multi-Contents Scalar Widget

	// Click on Multi-Contents Scalar Widget Settings, and assert the info on Option Editor.
	findWidget("StoreFocus")
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

	// For the Multi-Contents Scalar Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("StoreFocus")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Store Focus",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("StoreFocus")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Show Labels", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
			{ Name: "Enable Multi-Line (1/0)", NewOptionType: false, Value: "", Index: 2 },
			{ Name: "Enable Compact mode (1/0)", NewOptionType: false, Value: "", Index: 3 },
			{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 4 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
			{ Name: "Title", NewOptionType: true, Value: "Store Focus", Index: 6 },
		]);
	//#endregion

	//#region Compact Scalar Widget

	// Click on Compact Scalar Widget Settings, and assert the info on Option Editor.
	findWidget("CS_PlanesMaintenanceRenewalDate")
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

	// For the Compact Scalar Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("CS_PlanesMaintenanceRenewalDate")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "CS_PlanesMaintenanceRenewalDate",
			"OptionEditorTab Title": "Contents",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("CS_PlanesMaintenanceRenewalDate")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Show Labels", NewOptionType: false, Value: "", Index: 0 },
			{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
			{ Name: "Enable Multi-Line (1/0)", NewOptionType: false, Value: "", Index: 2 },
			{ Name: "Enable Compact mode (1/0)", NewOptionType: false, Value: "1", Index: 3 },
			{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 4 },
			{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
			{ Name: "Title", NewOptionType: true, Value: "", Index: 6 },
		]);
	//#endregion
});
