/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM22112018/HeinekenBCM.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check the Heineken app for compliance - used to be done manually before each release",
	() => {
		loadPage("Main Project/home");

		// Load the AIMMS case.
		findWidget("Button_AIMMS_Load_Case").click();

		// Click on Base Case and check whether you are taken to the 'Input >>>' page automatically.
		findWidget("Button_GoTo_Actuals").click();

		findWidget("Table_Flow_Process_Progress")
			.getTitle()
			.should.be.equal("Progress Overview");

		getCurrentPage().should.be.equal("Main Project/Input >>>");

		// The Excel part with the map of the Sales Area
		loadPage("Main Project/MasterData");
		findWidget("Button_Masterdata_Show_SalesArea").click();

		getCurrentPage().should.be.equal("Main Project/MasterData/Sales Area");

		findWidget("Dwnld_Masterdata_New_Sales_Area_Template")
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "E2E_Sales Area Template.xlsx",
			});

		// Do the upload of a prepared XL-file
		findWidget("Upld_Masterdata_New_Sales_Area").uploadFile(
			"E2E_Sales Area Template_For_Upload.xlsx"
		);

		// This should have resulted in an added entry in the table with Sales Area Information.
		findWidget("Table_Sales_Area_Information")
			.getRowHeaderCell(7, 0)
			.getText()
			.should.be.equal("Testarea");

		findWidget("Table_Sales_Area_Information")
			.getCell(7, 0)
			.getValue()
			.should.be.equal("5.00");

		findWidget("Table_Sales_Area_Information")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("52.00");

		// Check that the values for the newly entered location can be changed
		findWidget("Table_Sales_Area_Information")
			.getCell(7, 0)
			.setValue("27.00");

		findWidget("Table_Sales_Area_Information")
			.getCell(7, 1)
			.setValue("25.00");

		findWidget("Table_Sales_Area_Information")
			.getCell(7, 0)
			.getValue()
			.should.be.equal("27.00");

		findWidget("Table_Sales_Area_Information")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("25.00");

		// Finally, delete the added Testarea again
		findWidget("Button_MasterData_Delete_Sales_Area").click();

		findWidget("SB_MasterData_Delete_Sales_Area").select("Testarea");

		findWidget("Button_MasterData_Remove_Sales_Area").click();

		findDialog("Warning")
			.findButton("Yes")
			.click();

		// Check whether the entry was indeed deleted.
		findWidget("Table_Sales_Area_Information")
			.getNumRowsInRowHeaderViewport()
			.should.be.equal(7);

		// DAW Plants Capacity tests
		loadPage("Main Project/DAW");

		findWidget("Button_DAW_GoTo_Capcity").click();

		getCurrentPage().should.be.equal("Main Project/DAW/DAW Plants");

		findWidget("Button_DAW_Capacity_Excel_Template_Visibility").click();

		findWidget("Dwnld_DAW_Capacity_Excel")
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "E2E DAW Plant Template.xlsx",
			});

		findWidget("Upld_DAW_Capacity_Excel").uploadFile("E2E DAW Plant Template_For_Upload.xlsx");

		// Check whether the expected numbers have indeed changed in the table
		findWidget("Table_DAW_Capcity")
			.getCell(4, 1)
			.getValue()
			.should.be.equal("10.00");

		findWidget("Table_DAW_Capcity")
			.getCell(8, 1)
			.getValue()
			.should.be.equal("10.00");

		findWidget("Table_DAW_Capcity")
			.getCell(10, 1)
			.getValue()
			.should.be.equal("10.00");
	}
);
