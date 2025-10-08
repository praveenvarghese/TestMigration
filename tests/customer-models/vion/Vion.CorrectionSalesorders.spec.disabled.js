/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Correction salesorders page tests", () => {
	loadPage("Main Project/Home/Correction salesorders");

	findWidget("correction_salesorders")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Filter_CorrectionSalesOrders_SelectionBox_Ordernr").select("555673");

	findWidget("Filter_CorrectionSalesOrders_SelectionBox_Ordernr")
		.getValue()
		.should.be.equal("555673");

	loadPage("Main Project/Home/Correction salesorders");

	findWidget("SalesOrdersCorrections")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("500.00 kg");

	findWidget("correction_salesorders")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Filter_CorrectionSalesOrders_SelectionBox_Ordernr").deselect("555673");
	findWidget("Filter_CorrectionSalesOrders_SelectionBox_Ordernr")
		.getValue()
		.should.be.equal("Select Order nr");

	loadPage("Main Project/Home/Correction salesorders");

	findWidget("SalesOrdersCorrections")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("126.00 kg");

	findWidget("correction_salesorders")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Filter_CorrectionSalesOrders_SelectionBox_Ordernr")
		.getValue()
		.should.be.equal("Select Order nr");
});
