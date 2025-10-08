/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Selection-Box (V1) Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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

		openPageMenu().navigateToPage("Main Project/Great Test Page");

		// Click on Selection-Box Widget Settings, and assert the info on Option Editor.
		findWidget("BlineFilterBySelectionBox")
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
				{
					Name: "Change Type",
					Tooltip: "Change Type",
					IsHighlighted: false,
					Icon: "0xe3a8",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// For the Selection-Box Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("BlineFilterBySelectionBox")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "BlineFilterBySelectionBox",
				"OptionEditorTab Title": "Contents",
			});
	}
);
