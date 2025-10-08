/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 0 and Limited-Option-Editor set to 0. On Selection-Box (V2) Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set UI-Editable to False
		findWidget("Toggles UI_Editable").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "0.00" },
				{ label: "Limited_Option_Editor", value: "0.00" },
			]);

		// Navigate to our page of interest
		getPageMenu().navigateToPage("Main Project/home");

		// Click on Selection-Box V2 Widget Settings, and assert the info on Option Editor.
		findWidget("SelectionBoxV2")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(selectionBoxV2WidgetOptions());

		// For the Selection-Box V2 Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("SelectionBoxV2")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "SelectionBoxV2",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("SelectionBoxV2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
			]);
	}
);
