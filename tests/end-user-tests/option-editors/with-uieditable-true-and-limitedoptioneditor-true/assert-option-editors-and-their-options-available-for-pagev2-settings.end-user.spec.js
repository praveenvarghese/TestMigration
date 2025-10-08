/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On PageV2 Page Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set Limited-Option-editor to True
		findWidget("Toggles Limited_Option_Editor").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "1.00" },
				{ label: "Limited_Option_Editor", value: "1.00" },
			]);

		//#region Page with Standard Layout - Layout 2 page

		// Navigate to a page with Standard layout
		openPageMenu().navigateToPage("Main Project/Gantt Page");

		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("gantt_page")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([]);

		// For the Page settings Option Editor, assert the header and No-Permission-Message.
		findWidget("gantt_page")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"No-Permission-Message Shown": true,
				"No-Permission-Message Text":
					"Sorry, you do not have received permission to change the settings of this widget. Please consult the owner of the application for further details.",
			});

		//#endregion

		//#region Page with Custom Layout

		// Navigate to a page with Custom layout
		openPageMenu().navigateToPage("Main Project/home");

		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("home_1")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([]);

		// For the Page settings Option Editor, assert the header and No-Permission-Message.
		findWidget("home_1")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"No-Permission-Message Shown": true,
				"No-Permission-Message Text":
					"Sorry, you do not have received permission to change the settings of this widget. Please consult the owner of the application for further details.",
			});
		//#endregion

		//#region Page with Classic Layout

		// Navigate to "Shipping Schedules" page. Page with Classic Layout
		getPageMenu().navigateToPage("Main Project/Shipping Schedules");

		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("shipping_schedules")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([]);

		// For the Page settings Option Editor, assert the header and No-Permission-Message.
		findWidget("shipping_schedules")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"No-Permission-Message Shown": true,
				"No-Permission-Message Text":
					"Sorry, you do not have received permission to change the settings of this widget. Please consult the owner of the application for further details.",
			});

		//#endregion
	}
);
