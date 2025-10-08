/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 0. On Pie Chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		openPageMenu()
			.toggleSubMenu("Main Project/Item Actions/Charts")
			.navigateToPage("Main Project/Item Actions/Charts/Pie Chart Data");

		// Click on Pie Chart Widget Settings, and assert the info on Option Editor.
		findWidget("PieChart_1_1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(pieChartWidgetOptions());

		findWidget("PieChart_1_1")
			.openNamedViewsOptionEditor()
			.getOptions()
			.should.eql([
				{
					Name: "Current View",
					NewOptionType: true,
					Value: "",
					Index: 0,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Default View",
					NewOptionType: true,
					Value: "",
					Index: 1,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
			]);

		findWidget("PieChart_1_1")
			.openNamedViewsOptionEditor()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "view",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "View Name",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		findWidget("PieChart_1_1")
			.openTemplatesOptionEditor()
			.getOptions()
			.should.eql([
				{
					Name: "Current View",
					NewOptionType: true,
					Value: "",
					Index: 0,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
			]);

		findWidget("PieChart_1_1")
			.openTemplatesOptionEditor()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "template",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "Template Name",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		// For the Pie Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("PieChart_1_1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Pie Chart",
				"OptionEditorTab Title": "Templates",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("PieChart_1_1")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
				{
					Name: "Item Actions",
					NewOptionType: true,
					Value:
						"ItemActionsInfo(webui::indexWidgetItemActionSpec, webui::indexPageExtension, webui::indexWidgetActionSpec)",
					Index: 1,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("PieChart_1_1")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Case Comparison", NewOptionType: true, Value: "true", Index: 2 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 3 },
				{
					Name: "Title",
					NewOptionType: true,
					Value: "Pie Chart",
					Index: 4,
				},
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("PieChart_1_1")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{ Name: "<IDENTIFIER-SET>", Value: "SelectedIdentifier", Index: 0 },
				{ Name: "WEBUI::INDEXPAGEEXTENSION", Value: "", Index: 1 },
				{ Name: "TEAM", Value: "SelectedTeamMember", Index: 2 },
				{ Name: "WIDGET", Value: "SelectedWidget", Index: 3 },
			]);
	}
);
