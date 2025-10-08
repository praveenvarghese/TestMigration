/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Legend Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		getPageMenu().navigateToPage("Main Project/Great Test Page");

		// Click on Legend Widget Settings, and assert the info on Option Editor.
		findWidget("BlineFilterByLegend")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(legendWidgetOptions());

		// For the Legend Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("BlineFilterByLegend")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "BlineFilterByLegend",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("BlineFilterByLegend")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("BlineFilterByLegend")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "", Index: 1 },
			]);
	}
);
