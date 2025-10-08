/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 1. On Slider Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		getPageMenu().navigateToPage("Main Project/Great Test Page");

		// Click on Slider Widget Settings, and assert the info on Option Editor.
		findWidget("MyTestSlider")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(sliderWidgetOptions());

		// For the Slider Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("MyTestSlider")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "MyTestSlider",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("MyTestSlider")
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
		findWidget("MyTestSlider")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "min", NewOptionType: true, Value: "0", Index: 0 },
				{ Name: "max", NewOptionType: true, Value: "100", Index: 1 },
				{ Name: "step", NewOptionType: true, Value: "1", Index: 2 },
				{ Name: "Decimal Places", NewOptionType: false, Value: "0", Index: 3 },
				{ Name: "Show Units", NewOptionType: false, Value: "0", Index: 4 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
				{ Name: "Title", NewOptionType: true, Value: "MyTestSlider", Index: 6 },
			]);
	}
);
