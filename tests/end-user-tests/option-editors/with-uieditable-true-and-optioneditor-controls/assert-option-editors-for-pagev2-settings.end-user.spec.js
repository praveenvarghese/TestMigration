/*!
 * @AIMMS_FILE=models/IslandsPageV2EUcontrols/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Assert category tabs of Option Editor for Page (V2) Settings", () => {
	loadPage("Main Project/Gantt Page");

	//#region Page with Standard Layout - Layout 2 page
	//Assert option editors for Page Settings

	// Click on Page Settings, and assert the info on Option Editor.
	findWidget("gantt_page")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([]);
	//#endregion

	// Navigate to home page. Page with Custom Layout
	getPageMenu().navigateToPage("Main Project/home");

	//#region Page with Custom Layout
	//Assert option editors available for Page Settings

	// Click on Page Settings, and assert the info on Option Editor.
	findWidget("home_1")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([]);
	//#endregion

	// Navigate to "Shipping Schedules" page. Page with Classic Layout
	getPageMenu().navigateToPage("Main Project/Shipping Schedules");

	//#region Page with Classic Layout
	//Assert option editors available for Page Settings

	// Click on Page Settings, and assert the info on Option Editor.
	findWidget("shipping_schedules")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([
			{
				Name: "Miscellaneous",
				Tooltip: "Miscellaneous",
				IsHighlighted: true,
				Icon: "0xe900",
				Color: `${colors.colorPrimitiveAccentBlue100.rgbWithWhitespace}`,
			},
		]);

	// For the Page Settings Option Editor, assert the header and default opened tab title.
	findWidget("shipping_schedules")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Page",
			"OptionEditorTab Title": "Miscellaneous",
		});

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("shipping_schedules")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "maxcolumns", NewOptionType: false, Value: "", Index: 0 },
		]);
	//#endregion
});
