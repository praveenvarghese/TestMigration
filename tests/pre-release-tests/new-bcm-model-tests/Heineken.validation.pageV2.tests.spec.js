/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020_PageV2/HeinekenBCM08042020.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken Validation page", () => {
	loadPage("Main Project/Validation & Tools/Validation");

	//Validate widgets displayed in the validation page
	findWidget("calculate_validation_1")
		.getVisibleWidgets()
		.should.eql([
			"Table_Optimize_Assertion_Warning_Numbers",
			"SP_Optimization_Assertion_Check",
		]);

	findWidget("SP_Optimization_Assertion_Check")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty TableContents contains no data");

	findWidget("Table_Optimize_Assertion_Warning_Numbers")
		.getCell(0, 1)
		.setValue(true);

	// Try click on the inactive Primary Action
	findWidget("calculate_validation_1")
		.getPrimaryPageAction()
		.click();

	findWidget("general_capacity_overview")
		.getVisibleWidgets()
		.should.eql([
			"MS_Optimize_General_Years",
			"Table_General_Capacity_Overview_Dialog",
			"Label_General_Optimization",
			"Button_General_Optimization",
		]);

	// findWidget("MS_Optimize_General_Years").selectNone();

	// findWidget("MS_Optimize_General_Years").select("2020");

	// findWidget("Button_General_Optimization").click();

	// findDialog()
	// 	.findButton("Go to output")
	// 	.click();

	// findWidget("opco_demand_satisfaction")
	// 	.getVisibleWidgets()
	// 	.should.eql([
	// 		"Text_Output_Landing_Page",
	// 		"Table_Output_OpCo_Demand_Satisfaction",
	// 		"Bar_Line_Output_Demand_Satisfaction",
	// 		"Table_Output_Demand_Satisfaction_Brand_Primary_Pack",
	// 		"Bar_Output_Demand_Satisfaction_Lost_Sales",
	// 		"Bar_Output_Demand_Satisfaction_Lost_Sales_PrimaryPack",
	// 	]);
});
