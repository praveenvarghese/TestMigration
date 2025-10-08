/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Gantt Chart Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
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
		openPageMenu().navigateToPage("Main Project/Gantt Page");

		// Click on Gantt Chart Widget Settings, and assert the info on Option Editor.
		findWidget("The Gantt Chart")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Change Type",
					Tooltip: "Change Type",
					IsHighlighted: true,
					Icon: "0xe3a8",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Pivot",
					Tooltip: "Pivot",
					IsHighlighted: false,
					Icon: "0xe12d",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Totals",
					Tooltip: "Totals",
					IsHighlighted: false,
					Icon: "0xe459",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// For the Gantt Chart Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("The Gantt Chart")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Gantt Chart",
				"OptionEditorTab Title": "Change Type",
			});
	}
);
