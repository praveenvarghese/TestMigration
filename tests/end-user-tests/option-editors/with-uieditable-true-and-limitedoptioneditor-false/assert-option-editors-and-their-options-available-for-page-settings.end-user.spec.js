/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Page (PageV1) Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Shipping Schedules");

		// Click on Page Settings, and assert the info on Option Editor.
		findWidget("shipping_schedules")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql([
				{
					Name: "Action Upon Load",
					Tooltip: "Action Upon Load",
					IsHighlighted: true,
					Icon: "0xe28d",
					Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
				},
				{
					Name: "Action Upon Leave",
					Tooltip: "Action Upon Leave",
					IsHighlighted: false,
					Icon: "0xe419",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
				},
				{
					Name: "Page Extensions",
					Tooltip: "Page Extensions",
					IsHighlighted: false,
					Icon: "0xe2c1",
					Color: `${colors.colorPrimitiveGrey80.rgbWithWhitespace}`,
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

		// For the Page Settings Option Editor, assert the header and default opened tab title.
		findWidget("shipping_schedules")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Page",
				"OptionEditorTab Title": "Action Upon Load",
			});

		// Assert options available on "Page Extension" option editor and their data
		findWidget("shipping_schedules")
			.openPageExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Primary Page Action", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Secondary Page Actions", NewOptionType: true, Value: "", Index: 1 },
				{ Name: "Side Panels", NewOptionType: true, Value: "", Index: 2 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("shipping_schedules")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "maxcolumns", NewOptionType: false, Value: "", Index: 0 },
			]);

		// Assert options available on "Action Upon Leave" option editor and their data
		findWidget("shipping_schedules")
			.openActionUponLeaveOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Procedure", NewOptionType: true, Value: "", Index: 0 },
			]);
	}
);
