/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Correction salesorders page tests", () => {
	loadPage("Main Project/Home/Add stock");

	findWidget("Purchase_Table_ManualInput")
		.getCell(0, 0)
		.setValue("107005");

	findWidget("Purchase_Table_ManualInput")
		.getCell(0, 1)
		.setValue("Carcass Cell");

	findWidget("Purchase_Table_ManualInput")
		.getCell(0, 2)
		.setValue("100.00");

	findWidget("Purchase_Table_ManualInput")
		.getCell(0, 3)
		.setValue("530.00");

	findWidget("Purchase_Table_ManualInput")
		.getCell(0, 5)
		.setValue("06:00:00");

	findWidget("Purchase_Table_ManualInput")
		.doubleClickCell(0, 7)
		//.setValue("VION Boxtel (Cred)");
		.setValue("VION Boxtel");

	findWidget("Purchase_Button_AddPurchase").click();

	findDialog()
		.findButton("Ok")
		.click();

	findWidget("Purchase_Table_Overview")
		.getCell(0, 5)
		.getValue()
		.should.be.equal("100.00 mat_unit");

	findWidget("Purchase_Table_Overview")
		.getCell(0, 6)
		.getValue()
		.should.be.equal("530.00 kg");

	findWidget("Purchase_Table_Overview")
		.getCell(0, 7)
		.getValue()
		.should.be.equal("2021-04-19 06:00:00");

	/*
	findWidget("Purchase_Table_Overview")
		.getCell(0, 9)
		.getValue()
		.should.be.equal("VION Apeldoorn (Cred)");
*/

	findWidget("Purchase_Table_Overview")
		.getCell(0, 11)
		.setValue(true);

	findWidget("Purchase_Button_DeletePurchase").click();

	findWidget("Purchase_Table_Overview")
		.isEmpty()
		.should.be.equal(true);
});
