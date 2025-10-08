/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On List Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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

		// Click on List Chart Widget Settings, and assert the info on Option Editor.
		findWidget("List Widget")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(listWidgetOptions());

		// For the List Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("List Widget")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Planes Info",
				"OptionEditorTab Title": "List Settings",
			});

		// Assert options available on "List Settings" option editor and their data
		findWidget("List Widget")
			.openListSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "List Groups",
					NewOptionType: true,
					Value: "LW_GroupsData(webui::indexListGroupOrder, webui::indexListGroupSpec)",
					Index: 0,
				},
				{
					Name: "List Group Items",
					NewOptionType: true,
					Value:
						"LW_GroupItemsData(webui::indexListGroupOrder, webui::indexNoOfListItems, webui::indexListGroupItemsSpec)",
					Index: 1,
				},
			]);

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("List Widget")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value:
						"WidgetActions(webui::indexWidgetExtension, webui::indexWidgetActionSpec)",
					Index: 0,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("List Widget")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Planes Info", Index: 1 },
			]);
	}
);
