/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_v173C_2021-04-20/VION_PLANNING.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Vion Calculations page tests", () => {
	loadPage("Main Project/Master Data/Calculations");

	findWidget("calculations_1")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Filter_Calculation_Sidepanel_SelectionBox").select("0100-3BR, Karkas 3 Bruin");

	findWidget("Filter_Calculation_Sidepanel_SelectionBox")
		.getValue()
		.should.be.equal("0100-3BR, Karkas 3 Bruin");

	loadPage("Main Project/Master Data/Calculations");

	findWidget("Table_Calculations")
		.getCell(7, 3)
		.getValue()
		.should.be.equal("93.9");

	findWidget("Table_Calculations_Result")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("6,483.07 kg");

	findWidget("calculations_1")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Filter_Calculation_Sidepanel_SelectionBox").select("8620, Heupbeen");

	findWidget("Filter_Calculation_Sidepanel_SelectionBox")
		.getValue()
		.should.be.equal("8620, Heupbeen");

	loadPage("Main Project/Master Data/Calculations");

	findWidget("Table_Calculations")
		.getCell(12, 2)
		.getValue()
		.should.be.equal("2.6");

	findWidget("Table_Calculations_Result")
		.getCell(6, 1)
		.getValue()
		.should.be.equal("5,645.83 kg");

	findWidget("calculations_1")
		.getSidepanels()
		.openSidepanelTab("Filter");

	findWidget("Filter_Calculation_Sidepanel_SelectionBox").deselect("8620, Heupbeen");

	findWidget("Filter_Calculation_Sidepanel_SelectionBox")
		.getValue()
		.should.be.equal("Select Cut class");

	loadPage("Main Project/Master Data/Calculations");

	findWidget("Table_Calculations")
		.getCell(9, 3)
		.getValue()
		.should.be.equal("102.4");

	findWidget("Table_Calculations_Result")
		.getCell(3, 1)
		.getValue()
		.should.be.equal("2,982.25 kg");
});
