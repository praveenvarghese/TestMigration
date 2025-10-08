/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Scalar Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set Limited-Option-editor to True
		findWidget("Toggle Limited_Option_editor").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "1.00" },
				{ label: "Limited_Option_Editor", value: "1.00" },
			]);

		// Navigate to our page of interest
		openPageMenu().navigateToPage(
			"Main Project/Aircraft Maintenance Calendar/Planes Maintenance Renewal DateTime"
		);

		//#region Single Content Scalar Widget

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
			]);

		// For the Single Content Scalar Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Scheduled Planes Maintenance Audit Date",
				"OptionEditorTab Title": "Contents",
			});
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
			]);

		// For the Multi-Contents Scalar Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("StoreFocus")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Store Focus",
				"OptionEditorTab Title": "Contents",
			});
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
			]);

		// For the Compact Scalar Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("CS_PlanesMaintenanceRenewalDate")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "CS_PlanesMaintenanceRenewalDate",
				"OptionEditorTab Title": "Contents",
			});

		//#endregion
	}
);
