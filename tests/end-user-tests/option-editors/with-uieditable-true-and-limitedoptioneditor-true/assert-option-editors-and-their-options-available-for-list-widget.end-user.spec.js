/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On List Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		openPageMenu().navigateToPage("Main Project/Second Page");

		// Click on List Chart Widget Settings, and assert the info on Option Editor.
		findWidget("List Widget")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([]);

		// For the List Chart Widget Settings Option Editor, assert the header and No-Permission-Message.
		findWidget("List Widget")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Planes Info",
				"No-Permission-Message Shown": true,
				"No-Permission-Message Text":
					"Sorry, you do not have received permission to change the settings of this widget. Please consult the owner of the application for further details.",
			});
	}
);
