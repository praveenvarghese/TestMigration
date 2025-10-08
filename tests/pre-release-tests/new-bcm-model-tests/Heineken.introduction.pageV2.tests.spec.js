/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020_PageV2/HeinekenBCM08042020.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken introduction page", () => {
	loadPage("Main Project/Home/Introduction new UI");

	// Validate widgets in the page of each workflow steps
	findWidget("introduction_new_ui")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql([
			"Introduction",
			"Overview",
			"Load base case and scenarios",
			"Navigation",
			"Home page",
			"Calculation",
			"Visit introduction again",
		]);

	findWidget("Button_Introduction_Page0_Next").click();

	findWidget("wizard_newui_page_1")
		.getVisibleWidgets()
		.should.eql([
			"Image_NewUI_Page1",
			"Button_Introduction_Page1_Previous",
			"Button_Next_Page_Workflow",
		]);

	findWidget("Button_Next_Page_Workflow").click();

	findWidget("wizard_newui_page_2")
		.getVisibleWidgets()
		.should.eql([
			"Image_NewUI_Page2",
			"Button_Introduction_Page2_Previous",
			"Button_Introduction_Page2_Next",
		]);

	findWidget("Button_Introduction_Page2_Next").click();

	findWidget("wizard_newui_page_3")
		.getVisibleWidgets()
		.should.eql([
			"Image_NewUI_Page3",
			"Button_Introduction_Page3_Previous",
			"Button_Introduction_Page3_Next",
		]);

	findWidget("Button_Introduction_Page3_Next").click();

	findWidget("wizard_newui_page_4")
		.getVisibleWidgets()
		.should.eql([
			"Image_NewUI_Page4",
			"Button_Introduction_Page4_Previous",
			"Button_Introduction_Page4_Next",
		]);

	findWidget("Button_Introduction_Page4_Next").click();

	findWidget("wizard_newui_page_5")
		.getVisibleWidgets()
		.should.eql([
			"Image_NewUI_Page5",
			"Button_Introduction_Page5_Previous",
			"Button_Introduction_Page5_Next",
		]);

	findWidget("Button_Introduction_Page5_Next").click();

	findWidget("wizard_newui_page6")
		.getVisibleWidgets()
		.should.eql([
			"Image_NewUI_Page6",
			"Button_Introduction_Page6_Previous",
			"Button_Introduction_Page6_Next",
		]);

	findWidget("Button_Introduction_Page6_Next").click(5000);

	findWidget("actuals")
		.getVisibleWidgets()
		.should.eql([
			"SB_Home_Page_OpCo",
			"SB_Home_Page_Scenario",
			"Button_Home_Page_Load_Data",
			"Button_Home_Page_Unlock_Data_Set",
			"Label_Active_Scenario",
			"Table_Flow_Process_Progress",
			"Table_Home_General_Overview",
			"Table_Home_Brewhouse_Overview",
			"Table_Home_Cellar_Overview",
			"Table_Home_Dealcoholization_Overview",
			"Table_Home_Filter_Overview",
			"Table_Home_Mixing_Overview",
			"Table_Home_Packaging_Overview",
			"Table_Home_Asset_Overview",
			"Table_InitializationMessages_2",
			"Table_Error_Log",
		]);
});
