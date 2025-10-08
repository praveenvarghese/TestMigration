/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 0. On Table Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings?table-v2=false");

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

		// Click on Table Widget Settings, and assert the info on Option Editor.
		findWidget("Shipping Departure DateTime")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(tableWidgetOptions());

		findWidget("Shipping Departure DateTime")
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

		findWidget("Shipping Departure DateTime")
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

		findWidget("Shipping Departure DateTime")
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

		findWidget("Shipping Departure DateTime")
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

		// For the Table Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("Shipping Departure DateTime")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Shipping Departure DateTime",
				"OptionEditorTab Title": "Templates",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("Shipping Departure DateTime")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{
					Name: "Item Actions",
					NewOptionType: true,
					Value:
						"ItemActionsInfo(webui::indexWidgetItemActionSpec, webui::indexPageExtension, webui::indexWidgetActionSpec)",
					Index: 1,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("Shipping Departure DateTime")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Lower threshold", NewOptionType: true, Value: "", Index: 2 },
				{ Name: "Upper threshold", NewOptionType: true, Value: "", Index: 3 },
				{ Name: "Default column width", NewOptionType: false, Value: "", Index: 4 },
				{ Name: "Default row height", NewOptionType: false, Value: "", Index: 5 },
				{
					Name: "Show Upload/Download Data Controls",
					NewOptionType: true,
					Value: "true",
					Index: 6,
				},
				{
					Name: "Case Comparison",
					NewOptionType: true,
					Value: "true",
					Index: 7,
				},
				{
					Name: "Header Visibility",
					NewOptionType: true,
					Value: "SHOW_ROW_COLUMN_HEADER",
					Index: 8,
				},
				{ Name: "Show Html in Headers", NewOptionType: true, Value: "false", Index: 9 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 10 },
				{
					Name: "Title",
					NewOptionType: true,
					Value: "Shipping Departure DateTime",
					Index: 11,
				},
				{ Name: "Highlight", NewOptionType: true, Value: "", Index: 12 },
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("Shipping Departure DateTime")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{
					Name: "<IDENTIFIER-SET>",
					Value: "SelectedIdentifier",
					Index: 0,
				},
				{ Name: "I1", Value: "SelectedIsland1", Index: 1 },
				{ Name: "I2", Value: "SelectedIsland2", Index: 2 },
			]);
	}
);
