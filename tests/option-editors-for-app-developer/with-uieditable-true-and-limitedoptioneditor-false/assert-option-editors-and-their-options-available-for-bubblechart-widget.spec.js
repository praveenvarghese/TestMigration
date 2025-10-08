/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Bubble Chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Click on Bubble Chart Widget Settings, and assert the info on Option Editor.
		findWidget("BubbleChart_1_1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(bubbleChartWidgetOptions());

		// For the Bubble Chart Widget settings Option Editor, assert the header and default opened tab title.
		findWidget("BubbleChart_1_1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "BubbleChart_1_1",
				"OptionEditorTab Title": "Change Type",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("BubbleChart_1_1")
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
		findWidget("BubbleChart_1_1")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "X-axis label", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Y-axis label", NewOptionType: true, Value: "", Index: 1 },
				{ Name: "Size label", NewOptionType: true, Value: "", Index: 2 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 3 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 4 },
				{ Name: "Title", NewOptionType: true, Value: "BubbleChart_1_1", Index: 5 },
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("BubbleChart_1_1")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{ Name: "<IDENTIFIER-SET>", Value: "SelectedIdentifier", Index: 0 },
				{ Name: "TEAM", Value: "SelectedTeamMember", Index: 1 },
				{ Name: "WIDGET", Value: "SelectedWidget", Index: 2 },
			]);
	}
);
