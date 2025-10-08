/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 1. On Label Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set UI-Editable to False
		findWidget("Toggle UI_Editable").click();
		// Set Limited-Option-editor to True
		findWidget("Toggle Limited_Option_editor").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "0.00" },
				{ label: "Limited_Option_Editor", value: "1.00" },
			]);

		// Navigate to our page of interest
		getPageMenu().navigateToPage("Main Project/Second Page");

		// Click on Label Widget Settings, and assert the info on Option Editor.
		findWidget("Lab1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(labelWidgetOptions());

		// For the Label Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("Lab1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Lab1",
				"OptionEditorTab Title": "Miscellaneous",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("Lab1")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "contents",
					NewOptionType: true,
					Value: "Same Linechart as above...",
					Index: 0,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "Visible",
					NewOptionType: false,
					Value: "LabelVisible",
					Index: 1,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
			]);
	}
);
