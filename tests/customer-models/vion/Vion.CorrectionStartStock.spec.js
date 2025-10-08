/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Correction start stock page tests", () => {
	loadPage("Main Project/Home/Correction start stock (semi) finished products");

	findWidget("SemiFinishedStock_Table_CorrectStock")
		.getCell(3, 0)
		.click();

	findWidget("SemiFinishedStock_Table_SalesOrderCorrect")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("1,800.00 kg");

	findWidget("SemiFinishedStock_Table_SalesOrderCorrect")
		.getCell(5, 3)
		.getValue()
		.should.be.equal("86.40 kg");

	findWidget("SemiFinishedStock_Table_CorrectStock")
		.getCell(5, 0)
		.click();

	findWidget("SemiFinishedStock_Table_SalesOrderCorrect")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("0.00 kg");

	findWidget("SemiFinishedStock_Table_SalesOrderCorrect")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("1,200.00 kg");

	findWidget("SemiFinishedStock_Table_CorrectStock")
		.getCell(11, 3)
		.click();

	findWidget("SemiFinishedStock_Table_SalesOrderCorrect")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("1,459.64 kg");

	findWidget("SemiFinishedStock_Table_SalesOrderCorrect")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("299.88 kg");
});
