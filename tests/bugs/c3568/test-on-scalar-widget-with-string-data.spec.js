/*!
 * @AIMMS_FILE=models/Bugs/c3568-TableCellDataUpdateOrder/c3568.aimms
 */

scenario(
	"Customer Ticket 3568 - Change in WebUI Scalar cell String-Data is now updated first and then StoreFocus is set.",
	() => {
		loadPage("Main Project/home?table-v2=false");

		// Test data setup
		findWidget("Test Data Setup").click();

		// Assert data seen on `tableWith_StringData` Table Widget
		findWidget("tableWith_StringData")
			.getGridValues()
			.should.be.shallowDeepEqual([["", "", "", "", ""]]);

		//  Submit data onto `scalarWith_StringData` Scalar Widget, followed by SPECIAL_KEYS.enter KeyStroke.
		findWidget("scalarWith_StringData")
			.getScalarCell("StringData", { mode: "kpi" })
			.setValue("05", true);

		// Click on (0,1) cell of `tableWith_StringData` Table Widget
		findWidget("tableWith_StringData")
			.getCell(0, 1)
			.click();

		//  Submit data onto `scalarWith_StringData` Scalar Widget, but without SPECIAL_KEYS.enter KeyStroke
		findWidget("scalarWith_StringData")
			.getScalarCell("StringData", { mode: "kpi" })
			.setValue("06", false);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["2.00"], [""]]);

		// Click on (0,2) cell of `tableWith_StringData` Table Widget
		findWidget("tableWith_StringData")
			.getCell(0, 2)
			.click();

		//  Submit data onto `scalarWith_StringData` Scalar Widget, but without SPECIAL_KEYS.enter KeyStroke
		findWidget("scalarWith_StringData")
			.getScalarCell("StringData", { mode: "kpi" })
			.setValue("1984", false);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["3.00"], [""]]);

		// Click on (1,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_StringData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(1, 0)
			.click();

		// Assert data seen on `tableWith_StringData` Table
		findWidget("tableWith_StringData")
			.getGridValues()
			.should.be.shallowDeepEqual([["", "", "", "", ""]]);

		// Click on (0,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_StringData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(0, 0)
			.click();

		// Assert data seen on `tableWith_StringData` Table
		findWidget("tableWith_StringData")
			.getGridValues()
			.should.be.shallowDeepEqual([["05[unit]", "06[unit]", "1984[unit]", "", ""]]);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["3.00"], [""]]);

		//  Click onto `scalarWith_StringData` Scalar widget. Using "Delete" keystroke clear off the data.
		findWidget("scalarWith_StringData")
			.getScalarCell("StringData", { mode: "kpi" })
			.click()
			.pressKeys(SPECIAL_KEYS.delete);

		// Click on (1,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_StringData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(1, 0)
			.click();

		// Click on (0,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_StringData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(0, 0)
			.click();

		// Assert data seen on `tableWith_StringData` Table
		findWidget("tableWith_StringData")
			.getGridValues()
			.should.be.shallowDeepEqual([["05[unit]", "06[unit]", "", "", ""]]);
	}
);
