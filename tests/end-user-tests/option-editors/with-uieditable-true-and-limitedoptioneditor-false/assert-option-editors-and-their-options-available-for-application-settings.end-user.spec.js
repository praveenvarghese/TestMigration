/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Application Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Shipping Schedules");

		// Click on Application Settings, and assert the info on Option Editor.
		findWidget("application")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Menu Bar Settings",
					Tooltip: "Menu Bar Settings",
					IsHighlighted: true,
					Icon: "0xe037",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Miscellaneous",
					Tooltip: "Miscellaneous",
					IsHighlighted: false,
					Icon: "0xe900",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Advanced",
					Tooltip: "Advanced",
					IsHighlighted: false,
					Icon: "0xe1d9",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
			]);

		// 	// For the Application settings Option Editor, assert the header and default opened tab title.
		// 	findWidget("application")
		// 		.openOptionDialog({
		// 			OptionDialog_Header: "Application",
		// 			OptionEditorTab_Title: "Miscellaneous",
		// 		})
		// 		.getOptionEditorHeaderDetails()
		// 		.should.eql({
		// 			"OptionDialog Header": "Application",
		// 			"OptionEditorTab Title": "Miscellaneous",
		// 		});

		// 	// Assert options available on Misc option editor and their data
		// 	findWidget("application")
		// 		.openMiscellaneousOptionEditor()
		// 		.getOptions()
		// 		.should.include.something.like([
		// 			{ Name: "UI Editable", NewOptionType: false, Value: "UI_Editable", Index: 0 },
		// 			{
		// 				Name: "Limited Option Editor(1/0)",
		// 				NewOptionType: false,
		// 				Value: "Limited_Option_Editor",
		// 				Index: 1,
		// 			},
		// 			{
		// 				Name: "Custom Theme Classes",
		// 				NewOptionType: true,
		// 				Value: "default",
		// 				Index: 2,
		// 			},
		// 			{ Name: "Use Classic Theme", NewOptionType: true, Value: "false", Index: 3 },
		// 		]);
	}
);
