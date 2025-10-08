/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Upload Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		getPageMenu().navigateToPage("Main Project/THird Page");

		// Click on Upload Button Widget Settings, and assert the info on Option Editor.
		findWidget("UploadTheFile")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(uploadWidgetOptions());

		// For the Upload Button Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("UploadTheFile")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "UploadTheFile",
				"OptionEditorTab Title": "Action",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("UploadTheFile")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "", Index: 1 },
				{ Name: "Custom Tooltip", NewOptionType: true, Value: "", Index: 2 },
			]);
	}
);
