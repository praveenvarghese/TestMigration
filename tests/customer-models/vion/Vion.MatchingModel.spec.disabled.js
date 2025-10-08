/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Matching model page tests", () => {
	loadPage("Main Project/Home/Matching model");

	findWidget("Matching_Table_Shortage")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("20,470");

	findWidget("Matching_Table_Surplus")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("2,604");

	findWidget("Matching_Table_Shortage_Totals")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("6,517 kg");

	findWidget("Matching_Table_Produced_Totals")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("54,941.34 kg");

	findWidget("Matching_Table_Surplus_Totals")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("29,968.72 kg");

	findWidget("matching_model")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Matching_SPFilter_SelectFilterGroup").deselect(["Ham"]);

	loadPage("Main Project/Home/Matching model");

	findWidget("Matching_Table_Shortage")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("20,470");

	findWidget("Matching_Table_Surplus")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("1,271");

	findWidget("Matching_Table_Shortage_Totals")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("0 kg");

	findWidget("Matching_Table_Produced_Totals")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("1,271.28 kg");

	findWidget("Matching_Table_Surplus_Totals")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("1,271.28 kg");

	findWidget("matching_model")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Matching_SPFilter_SelectFilterGroup").select(["Ham"]);

	loadPage("Main Project/Home/Matching model");
	getCurrentPage().should.be.equal("Main Project/Home/Matching model");
});
