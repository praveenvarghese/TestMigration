/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On TreeMap Chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		getPageMenu().navigateToPage("Main Project/Second Page");

		// Click on TreeMap Chart Widget Settings, and assert the info on Option Editor.
		findWidget("TotalCostPerIslandTreeMap")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(treeMapChartWidgetOptions());

		// For the TreeMap Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("TotalCostPerIslandTreeMap")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Total Cost Per Island (Tree)",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("TotalCostPerIslandTreeMap")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Item Actions", NewOptionType: true, Value: "", Index: 1 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("TotalCostPerIslandTreeMap")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Case Comparison", NewOptionType: true, Value: "true", Index: 2 },
				{
					Name: "Visible",
					NewOptionType: false,
					Value: "TreeMapVisible",
					Index: 3,
				},
				{
					Name: "Title",
					NewOptionType: true,
					Value: "Total Cost Per Island (Tree)",
					Index: 4,
				},
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("TotalCostPerIslandTreeMap")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{ Name: "<IDENTIFIER-SET>", Value: "", Index: 0 },
				{ Name: "I1", Value: "", Index: 1 },
			]);
	}
);
