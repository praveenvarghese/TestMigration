/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 0. On combo chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings?_aimms_only_widget_named_views=true");

		// Set Limited-Option-editor to True
		findWidget("Toggle Limited_Option_editor").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "1.00" },
				{ label: "Limited_Option_Editor", value: "1.00" },
			]);

		openPageMenu().navigateToPage("Main Project/combi chart page");

		// Click on combination Chart Widget Settings, and assert the info on Option Editor.
		findWidget("combichart1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(comboChartWidgetOptions());

		// For the Combination Chart Widget settings Option Editor, assert the header and default opened tab title.
		findWidget("combichart1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "combichart1",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Combination Chart Settings" option editor and their data
		findWidget("combichart1")
			.opencombinationchartSettingsEditor()
			.getNewOptionsDetails()
			.should.eql([
				{ Group: "X-Axis", Name: "Label", Value: "", Index: 0 },
				{
					Group: "X-Axis",
					Name: "Max Number Of Categories In Viewport",
					Value: "",
					Index: 1,
				},
				{
					Group: "X-Axis",
					Name: "Step Size",
					Value: "",
					Index: 2,
				},
				{ Group: "Y-Axis", Name: "Label", Value: "", Index: 3 },
				{ Group: "Y-Axis", Name: "Min", Value: "", Index: 4 },
				{ Group: "Y-Axis", Name: "Max", Value: "", Index: 5 },
				{ Group: "Y-Axis", Name: "Step Size", Value: "", Index: 6 },
				{ Group: "Y-Axis (Secondary)", Name: "Label", Value: "", Index: 7 },
				{ Group: "Y-Axis (Secondary)", Name: "Min", Value: "", Index: 8 },
				{ Group: "Y-Axis (Secondary)", Name: "Max", Value: "", Index: 9 },
				{ Group: "Y-Axis (Secondary)", Name: "Step Size", Value: "", Index: 10 },
				{ Group: "Legend", Name: "Show Legend", Value: "false", Index: 11 },
				{ Group: "Labels", Name: "Show Labels", Value: "false", Index: 12 },
				{ Group: "Data Coloring", Name: "Color Index", Value: "", Index: 13 },
				{ Group: "Data Coloring", Name: "Transparency Index", Value: "", Index: 14 },
				{ Group: "Others", Name: "Chart Title", Value: "", Index: 15 },
				{ Group: "Others", Name: "Data Interpolate", Value: "false", Index: 16 },
			]);

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("combichart1")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value: "",
					Index: 0,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Item Actions",
					NewOptionType: true,
					Value: "",
					Index: 1,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("combichart1")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Case Comparison",
					NewOptionType: true,
					Value: "true",
					Index: 0,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Visible",
					NewOptionType: false,
					Value: "",
					Index: 1,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Title",
					NewOptionType: true,
					Value: "",
					Index: 2,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
			]);

		// Assert options available on "Index" option editor and their data
		findWidget("combichart1")
			.openIndexOptionEditor()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "indices.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "Index",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "Store Focus",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "Show / Hide",
							NewOptionType: true,
							Value: "SHOW",
							Index: 2,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);
	}
);
