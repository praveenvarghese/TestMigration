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

		// Do UI-related checks on the Masterdata/Brands subpage
		loadPage("Main Project/MasterData");
		findWidget("Button_MasterData_Show_Brands").click();

		// FIXME: EN - 20200520 - Disabling the colorcheck tests.
		// I could not get the getBackgroundColorAsHex to work because document.ElementFromPoint does not work the way I use it. Not worth the time

		/*
		// Are the top buttons the light green color that Heineken specifies?
		[
			"Button_MasterData_Mark_Page_As_Finished",
			"Button_MasterData_Save_To_Database",
			"Button_MasterData_Brands_Help",
		].forEach((buttonName) => {
			findWidget(buttonName)
				.getBackgroundColorAsHex(20, 17)
				.should.beExactHexColor("#7ab800");
		});

		// Are the bottom buttons yellow?
		[
			"Button_MasterData_Add_Brand",
			"Button_Master_Data_Edit_Brand",
			"Button_MasterData_Delete_Brand_1",
		].forEach((buttonName) => {
			findWidget(buttonName)
				.getBackgroundColorAsHex(10, 10)
				.should.beExactHexColor("#fecb00");
		});

		// Is the table title header a darker green?
		findWidget("Table_MasterData_Brand_Production_Info")
			.getBackgroundColorAsHex(10, 10)
			.should.beExactHexColor("#005d1f");

		// Check the grey background of the 'Brand' column
		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(0, 0)
			.getBackgroundColorAsHex(50, 10)
			.should.beExactHexColor("#d7d7d7");
*/

		// Check whether strings are displayed left-aligned
		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(0, 1)
			.getStyle()
			.should.be.similar.to({
				"text-align": "left",
			});

		// Check whether checkboxes are displayed centered
		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(0, 2)
			.getStyle()
			.should.be.similar.to({
				"text-align": "center",
			});

		// Check whether numbers are displayed right-aligned
		findWidget("Table_Beer_Characteristics")
			.getCell(0, 1)
			.getStyle()
			.should.be.similar.to({
				"text-align": "right",
			});

		// Misc checks

		// Check whether a checkbox can be clicked and unclicked again.
		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(6, 6)
			.getValue()
			.should.be.equal(false);

		// WORKAROUND: an extra click is needed here, because the 7th column is JUST at the end of the table. Clicking in it makes the scrollbar move and that posed a problem with
		// positioning the 'real' click for changing the actual value.
		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(6, 6)
			.click();

		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(6, 6)
			.setValue(true);

		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(6, 6)
			.getValue()
			.should.be.equal(true);

		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(6, 6)
			.setValue(false);

		findWidget("Table_MasterData_Brand_Production_Info")
			.getCell(6, 6)
			.getValue()
			.should.be.equal(false);
	}
);
