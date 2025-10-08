/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 0. On Application Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set UI-Editable to False
		findWidget("Toggle UI_Editable").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "0.00" },
				{ label: "Limited_Option_Editor", value: "0.00" },
			]);

		// Navigate to our page of interest
		getPageMenu().navigateToPage("Main Project/Shipping Schedules");

		// Click on Application Settings, and assert the info on Option Editor.
		findWidget("application")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Application Defaults",
					Tooltip: "Application Defaults",
					IsHighlighted: true,
					Icon: "0xe202",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Menu Bar Settings",
					Tooltip: "Menu Bar Settings",
					IsHighlighted: false,
					Icon: "0xe037",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Workflow Settings",
					Tooltip: "Workflow Settings",
					IsHighlighted: false,
					Icon: "0xe306",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Application Extensions",
					Tooltip: "Application Extensions",
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

		// For the Application settings Option Editor, assert the header and default opened tab title.
		findWidget("application")
			.openOptionDialog({
				OptionDialog_Header: "Application",
				OptionEditorTab_Title: "Application Defaults",
			})
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Application",
				"OptionEditorTab Title": "Application Defaults",
			});

		// Assert options available on Application-extension option editor and their data
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Status Bar", NewOptionType: true, Value: "", Index: 0 },
				{
					Name: "Time Zone Setting",
					NewOptionType: true,
					Value: "false",
					Index: 1,
				},
			]);
		// Assert options available on Application-workflow option editor and their data
		findWidget("application")
			.openApplicationWorkflowSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Workflows",
					NewOptionType: true,
					Value: "AppWorkFlowInfo(webui::indexWorkflowOrder, webui::indexWorkflowSpec)",
					Index: 0,
				},
				{
					Name: "Steps",
					NewOptionType: true,
					Value:
						"WorkflowInformation(webui::indexWorkflowOrder, webui::indexNoOfPages, webui::indexWorkflowPageSpec)",
					Index: 1,
				},
			]);

		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Menu Bar",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
				{
					Name: "Menu Hidden",
					NewOptionType: true,
					Value: "false",
					Index: 1,
				},
			]);

		// Assert options available on Misc option editor and their data
		findWidget("application")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "UI Editable",
					NewOptionType: false,
					Value: "UI_Editable",
					Index: 0,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Custom Theme Classes",
					NewOptionType: true,
					Value: "default",
					Index: 1,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "Use Classic Theme",
					NewOptionType: true,
					Value: "false",
					Index: 2,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "Data Manager Hidden",
					NewOptionType: true,
					Value: "false",
					Index: 3,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Limited Option Editor(1/0)",
					NewOptionType: false,
					Value: "Limited_Option_Editor",
					Index: 4,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
			]);
	}
);
