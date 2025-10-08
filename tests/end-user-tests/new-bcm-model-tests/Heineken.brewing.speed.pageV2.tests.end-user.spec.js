/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020_PageV2/HeinekenBCM08042020.aimms
 * @WEBUI_MODE=end_user
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken brewing speed page", () => {
	loadPage("Main Project/Processes/Brewhouse/Brewing Speed");

	//Validate widgets displayed in brewing speed page
	findWidget("brewing_process")
		.getVisibleWidgets()
		.should.eql([
			"Button_Brewhouse_Show_Brewing_Speed_Batch_Edit",
			"Button_Brewhouse_Speed_Excel_Template",
			"Table_Brewhouse_Wort_Input_Brewhouse",
			"Dwnld_Brewhouse_Speed_Excel",
			"Upld_Brewhouse_Speed_Excel",
		]);

	// Validate sidepanel pages
	findWidget("brewing_process")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Location filter", "Year filter", "Brand/wort filter"]);

	//Validate the filter in the table
	findWidget("brewing_process")
		.getSidepanels()
		.openSidepanelTab("Brand/wort filter");

	findWidget("filter_brand_wort")
		.getVisibleWidgets()
		.should.eql(["MS_Sidepanel_Brand", "MS_Sidepanel_Wort"]);

	findWidget("MS_Sidepanel_Wort").selectNone();

	findWidget("MS_Sidepanel_Wort").select(["B15"]);

	//Validate user able to update details by using Hide Batch edit
	let expected_values = [
		["7.0", "719.0", "5,033.0"],
		["13.0", "980.0", "12,740.0"],
		["14.0", "517.0", "7,238.0"],
		["8.0", "814.0", "6,512.0"],
		["13.0", "980.0", "12,740.0"],
		["14.0", "517.0", "7,238.0"],
		["8.0", "814.0", "6,512.0"],
		["13.0", "980.0", "12,740.0"],
		["14.0", "517.0", "7,238.0"],
		["8.0", "814.0", "6,512.0"],
		["13.0", "980.0", "12,740.0"],
		["14.0", "517.0", "7,238.0"],
		["8.0", "814.0", "6,512.0"],
		["13.0", "980.0", "12,740.0"],
		["14.0", "517.0", "7,238.0"],
		["8.0", "814.0", "6,512.0"],
		["13.0", "980.0", "12,740.0"],
		["14.0", "517.0", "7,238.0"],
	];

	findWidget("Table_Brewhouse_Wort_Input_Brewhouse")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("Button_Brewhouse_Show_Brewing_Speed_Batch_Edit").click();

	findWidget("Table_BrewHouse_Wort_Batch_Edit")
		.getCell(0, 0)
		.setValue("10");

	findWidget("Table_BrewHouse_Wort_Batch_Edit")
		.getCell(0, 1)
		.setValue("800");

	findWidget("Table_BrewHouse_Wort_Batch_Edit")
		.getCell(0, 2)
		.setValue("6000");

	findWidget("Button_Brewhouse_Batch_Change_Wort_Info").click();

	findDialog()
		.findButton("Yes")
		.click();

	expected_values = [
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
		["10.0", "800.0", "8,000.0"],
	];

	findWidget("Table_Brewhouse_Wort_Input_Brewhouse")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
