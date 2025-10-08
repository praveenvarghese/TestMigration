/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 0. On Selection-Box (V1) Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set UI-Editable to False
		findWidget("Toggle UI_Editable").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "0.00" },
				{ label: "Limited_Option_Editor", value: "0.00" },
			]);

		// Navigate to our page of interest
		getPageMenu().navigateToPage("Main Project/Great Test Page");

		// Click on Selection-Box Widget Settings, and assert the info on Option Editor.
		findWidget("BlineFilterBySelectionBox")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(selectionBoxWidgetOptions());

		// For the Selection-Box Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("BlineFilterBySelectionBox")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "BlineFilterBySelectionBox",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("BlineFilterBySelectionBox")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
			]);
	}
);
