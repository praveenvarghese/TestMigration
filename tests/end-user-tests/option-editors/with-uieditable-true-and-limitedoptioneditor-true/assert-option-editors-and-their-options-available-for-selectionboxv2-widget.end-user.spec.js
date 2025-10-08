/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Selection-Box (V2) Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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

		openPageMenu().navigateToPage("Main Project/home");

		// Click on Selection-Box V2 Widget Settings, and assert the info on Option Editor.
		findWidget("SelectionBoxV2")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Contents",
					Tooltip: "Contents",
					IsHighlighted: true,
					Icon: "0xe097",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
			]);

		// For the Selection-Box V2 Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("SelectionBoxV2")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "SelectionBoxV2",
				"OptionEditorTab Title": "Contents",
			});
	}
);
