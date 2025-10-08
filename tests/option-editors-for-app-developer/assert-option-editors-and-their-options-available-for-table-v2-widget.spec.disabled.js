/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("As an app developer, Validate options displayed in new table", () => {
	loadPage("Main Project/FirstPage");

	// Click on Table Widget Settings, and assert the info on Option Editor.
	findWidget("Aircraft Properties_1")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql(tableV2WidgetOptions());

	findWidget("Aircraft Properties_1")
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

	findWidget("Aircraft Properties_1")
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

	findWidget("Aircraft Properties_1")
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

	findWidget("Aircraft Properties_1")
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
	findWidget("Aircraft Properties_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Aircraft Properties",
			"OptionEditorTab Title": "Templates",
		});

	findWidget("Aircraft Properties_1")
		.openTableContentsOptionEditor()
		.getListEntryDetails()
		.should.eql([
			{
				ListEntryTitle: "contents.0",
				ListEntryState: "Expanded",
				ListEntryOrder: 0,
				Options: [
					{
						Name: "Identifier",
						NewOptionType: true,
						Value: "",
						Index: 0,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Display Domain",
						NewOptionType: true,
						Value: "",
						Index: 1,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Decimal Places",
						NewOptionType: true,
						Value: "",
						Index: 2,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Show Units",
						NewOptionType: true,
						Value: "false",
						Index: 3,
						"Option-Entry Action Tooltip": "Inherits from Show Units",
						"Option-Entry Action Icon": "icon-enter5",
					},
					{
						Name: "Identifier Visibility",
						NewOptionType: true,
						Value: "",
						Index: 4,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
				],
			},
		]);

	findWidget("Aircraft Properties_1")
		.openTableContentsOptionEditor()
		.getDefaultListEntryDetails()
		.should.eql([
			{ OptionName: "Decimal Places", Value: "" },
			{ OptionName: "Show Units", Value: "false" },
		]);

	// Assert options available on "Widget Extension" option editor and their data
	findWidget("Aircraft Properties_1")
		.openWidgetExtensionsOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
			{
				Name: "Item Actions",
				NewOptionType: true,
				Value: "",
				Index: 1,
			},
		]);

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("Aircraft Properties_1")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{
				Name: "Lower threshold",
				NewOptionType: true,
				Value: "",
				Index: 0,
			},
			{
				Name: "Upper threshold",
				NewOptionType: true,
				Value: "",
				Index: 1,
			},
			{
				Name: "Default column width",
				NewOptionType: false,
				Value: "",
				Index: 2,
			},
			{
				Name: "Default row height",
				NewOptionType: false,
				Value: "",
				Index: 3,
			},
			{
				Name: "Show Upload/Download Data Controls",
				NewOptionType: true,
				Value: "false",
				Index: 4,
			},
			{
				Name: "Case Comparison",
				NewOptionType: true,
				Value: "true",
				Index: 5,
			},
			{
				Name: "Header Visibility",
				NewOptionType: true,
				Value: "SHOW_ROW_COLUMN_HEADER",
				Index: 6,
			},
			{
				Name: "Show Html in Headers",
				NewOptionType: true,
				Value: "false",
				Index: 7,
			},
			{
				Name: "Visible",
				NewOptionType: false,
				Value: "",
				Index: 8,
			},
			{
				Name: "Title",
				NewOptionType: true,
				Value: "Aircraft Properties",
				Index: 9,
			},
		]);

	// Assert options available on "Store Focus" option editor and their data
	findWidget("Aircraft Properties_1")
		.openStoreFocusOptionEditor()
		.getStoreFocusOptionsInfo()
		.should.eql([]);
});
