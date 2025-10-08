/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Line Chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Line Chart Data");

		// Click on Line Chart Widget Settings, and assert the info on Option Editor.
		findWidget("LineChart_1_1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(lineChartWidgetOptions());

		// For the Line Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("LineChart_1_1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Scrum Master - Widget Info",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Linechart Settings" option editor and their data
		findWidget("LineChart_1_1")
			.openLinechartSettingsEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Y-Axis Minimum Bound", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Y-Axis Maximum Bound", NewOptionType: true, Value: "", Index: 1 },
				{ Name: "Step", NewOptionType: true, Value: "", Index: 2 },
				{ Name: "Show Area", NewOptionType: true, Value: "false", Index: 3 },
			]);

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("LineChart_1_1")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value:
						"WidgetActionsInfo(webui::indexPageExtension, webui::indexWidgetActionSpec)",
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
		findWidget("LineChart_1_1")
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
					Value: "Scrum Master - Widget Info",
					Index: 4,
				},
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("LineChart_1_1")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{ Name: "<IDENTIFIER-SET>", Value: "SelectedIdentifier", Index: 0 },
				{ Name: "WIDGET", Value: "SelectedWidget", Index: 1 },
			]);
	}
);
