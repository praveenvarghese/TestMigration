/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Correction salesorders page tests", () => {
	loadPage("Main Project/Home/Matching model/Fix input-output combinations");

	findWidget("FixCombinations_Table_AllRestrictions")
		.getCell(0, 5)
		.getValue()
		.should.be.equal("391.6");

	findWidget("FixCombinations_Button_SelectAllConstraints").click();

	findWidget("FixCombinations_Button_DeleteSelectedConstraints").click();

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	findDialog()
		.findButton("Ok")
		.click();

	findWidget("FixCombinations_Table_AllRestrictions")
		.isEmpty()
		.should.be.equal(true);
});
