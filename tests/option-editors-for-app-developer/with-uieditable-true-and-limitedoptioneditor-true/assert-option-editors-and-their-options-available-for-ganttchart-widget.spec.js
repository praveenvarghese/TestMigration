/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Gantt Chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		getPageMenu().navigateToPage("Main Project/Gantt Page");

		// Click on Gantt Chart Widget Settings, and assert the info on Option Editor.
		findWidget("The Gantt Chart")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(ganttChartWidgetOptions());

		// For the Gantt Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("The Gantt Chart")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Gantt Chart",
				"OptionEditorTab Title": "Change Type",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("The Gantt Chart")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Item Actions", NewOptionType: true, Value: "", Index: 1 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("The Gantt Chart")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Title", NewOptionType: true, Value: "Gantt Chart", Index: 2 },
				{
					Name: "Highlight",
					NewOptionType: true,
					Value: "GanttHighlight(pe, j, IndexIdentifiers)",
					Index: 3,
				},
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("The Gantt Chart")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{ Name: "<IDENTIFIER-SET>", Value: "", Index: 0 },
				{ Name: "PE", Value: "SelectedPerson", Index: 1 },
				{ Name: "J", Value: "SelectedJob", Index: 2 },
			]);
	}
);
