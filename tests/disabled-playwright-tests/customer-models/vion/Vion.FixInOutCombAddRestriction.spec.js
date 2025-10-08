/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Correction salesorders page tests", () => {
	loadPage("Main Project/Home/Matching model/Fix input-output combinations");

	findWidget("FixCombinations_Selectionbox_InputMaterial").select("0100-1ZW, Karkas Beer Zwart");

	findWidget("FixCombinations_Selectionbox_OutputMaterial").select(
		"1000-1ZW, Pootham Beer Zwart"
	);

	findWidget("FixCombination_Button_CalculationMax").click();

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	findWidget("FixCombinations_Table_Input")
		.getCell(0, 1)
		.setValue("150.0");

	findWidget("FixCombinations_Button_Save").click();

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	findDialog()
		.findButton("Ok")
		.click();

	findWidget("FixCombinations_Table_AllRestrictions")
		.getCell(3, 4)
		.getValue()
		.should.be.equal("0100-1ZW");

	findWidget("FixCombinations_Table_AllRestrictions")
		.getCell(3, 5)
		.getValue()
		.should.be.equal("150.0");
});
