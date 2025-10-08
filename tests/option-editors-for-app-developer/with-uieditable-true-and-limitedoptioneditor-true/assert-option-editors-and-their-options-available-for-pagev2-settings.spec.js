/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Page (Page-V2) Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set Limited-Option-editor to True
		findWidget("Toggles Limited_Option_Editor").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "1.00" },
				{ label: "Limited_Option_Editor", value: "1.00" },
			]);

		// Navigate to our page of interest
		getPageMenu().navigateToPage("Main Project/Gantt Page");
		//#region Page with Standard Layout - Layout 2 page

		//#region Assert option editors available for Page Settings
		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("gantt_page")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Action Upon Load",
					Tooltip: "Action Upon Load",
					IsHighlighted: true,
					Icon: "0xe28d",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Action Upon Leave",
					Tooltip: "Action Upon Leave",
					IsHighlighted: false,
					Icon: "0xe419",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Page Extensions",
					Tooltip: "Page Extensions",
					IsHighlighted: false,
					Icon: "0xe2c1",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Advanced",
					Tooltip: "Advanced",
					IsHighlighted: false,
					Icon: "0xe1d9",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// For the Page Settings Option Editor, assert the header and default opened tab title.
		findWidget("gantt_page")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"OptionEditorTab Title": "Action Upon Load",
			});
		//#endregion

		// Assert options available on "Page Extension" option editor and their data
		findWidget("gantt_page")
			.openPageExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Primary Page Action", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Secondary Page Actions", NewOptionType: true, Value: "", Index: 1 },
				{ Name: "Side Panels", NewOptionType: true, Value: "", Index: 2 },
			]);

		// Assert options available on "Action Upon Leave" option editor and their data
		findWidget("gantt_page")
			.openActionUponLeaveOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Procedure", NewOptionType: true, Value: "", Index: 0 },
			]);
		//#endregion

		// Navigate to home page. Page with Custom Layout
		getPageMenu().navigateToPage("Main Project/home");

		//#region Page with Custom Layout

		//#region Assert option editors available for Page Settings

		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("home_1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Action Upon Load",
					Tooltip: "Action Upon Load",
					IsHighlighted: true,
					Icon: "0xe28d",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Action Upon Leave",
					Tooltip: "Action Upon Leave",
					IsHighlighted: false,
					Icon: "0xe419",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Page Extensions",
					Tooltip: "Page Extensions",
					IsHighlighted: false,
					Icon: "0xe2c1",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Advanced",
					Tooltip: "Advanced",
					IsHighlighted: false,
					Icon: "0xe1d9",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// For the Page Settings Option Editor, assert the header and default opened tab title.
		findWidget("home_1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"OptionEditorTab Title": "Action Upon Load",
			});
		//#endregion

		// Assert options available on "Page Extension" option editor and their data
		findWidget("home_1")
			.openPageExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Primary Page Action",
					NewOptionType: true,
					Value: "PrimaryAction(webui::indexPageActionSpec)",
					Index: 0,
				},
				{
					Name: "Secondary Page Actions",
					NewOptionType: true,
					Value:
						"NewSecondaryActions(webui::indexPageExtension, webui::indexPageActionSpec)",
					Index: 1,
				},
				{
					Name: "Side Panels",
					NewOptionType: true,
					Value: "HomeSidePannel(side, webui::indexSidePanelSpec)",
					Index: 2,
				},
			]);

		// Assert options available on "Action Upon Leave" option editor and their data
		findWidget("home_1")
			.openActionUponLeaveOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Procedure", NewOptionType: true, Value: "", Index: 0 },
			]);

		//#endregion

		// Navigate to "Shipping Schedules" page. Page with Classic Layout
		getPageMenu().navigateToPage("Main Project/Shipping Schedules");

		//#region Page with Classic Layout

		//#region Assert option editors available for Page Settings

		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("shipping_schedules")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Action Upon Load",
					Tooltip: "Action Upon Load",
					IsHighlighted: true,
					Icon: "0xe28d",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Action Upon Leave",
					Tooltip: "Action Upon Leave",
					IsHighlighted: false,
					Icon: "0xe419",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Page Extensions",
					Tooltip: "Page Extensions",
					IsHighlighted: false,
					Icon: "0xe2c1",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Miscellaneous",
					Tooltip: "Miscellaneous",
					IsHighlighted: false,
					Icon: "0xe900",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Advanced",
					Tooltip: "Advanced",
					IsHighlighted: false,
					Icon: "0xe1d9",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// For the Page Settings Option Editor, assert the header and default opened tab title.
		findWidget("shipping_schedules")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"OptionEditorTab Title": "Action Upon Load",
			});
		//#endregion

		// Assert options available on "Page Extension" option editor and their data
		findWidget("shipping_schedules")
			.openPageExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Primary Page Action", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Secondary Page Actions", NewOptionType: true, Value: "", Index: 1 },
				{ Name: "Side Panels", NewOptionType: true, Value: "", Index: 2 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("shipping_schedules")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "maxcolumns", NewOptionType: false, Value: "", Index: 0 },
			]);

		// Assert options available on "Action Upon Leave" option editor and their data
		findWidget("shipping_schedules")
			.openActionUponLeaveOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Procedure", NewOptionType: true, Value: "", Index: 0 },
			]);

		//#endregion
	}
);
