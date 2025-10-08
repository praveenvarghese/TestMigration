/*!
 * @AIMMS_FILE=models/Bugs/c3568-TableCellDataUpdateOrder/c3568.aimms
 */

scenario(
	"Customer Ticket 3568 - Change in WebUI Table cell Binary-Data is now updated first and then StoreFocus is set.",
	() => {
		loadPage("Main Project/home?table-v2=false");

		// Test data setup
		findWidget("Test Data Setup").click();

		// Assert data seen on `tableWith_BinaryData` Table
		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["0.00", "1.00", "1.00", "1.00", "0.00"]]);

		//  Submit True onto (0,0) cell of `tableWith_BinaryData` Table
		findWidget("tableWith_BinaryData")
			.getCell(0, 0)
			.setValue(true);

		// Assert data seen on `tableWith_BinaryData` Table
		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00", "1.00", "1.00", "1.00", "0.00"]]);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["1.00"], [""]]);

		//  Enter False onto (0,1) cell of `tableWith_BinaryData` Table, but without SPECIAL_KEYS.enter KeyStroke
		findWidget("tableWith_BinaryData")
			.getCell(0, 1)
			.setValue(false);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["2.00"], [""]]);

		//  Click onto (0,2) cell of `tableWith_BinaryData` Table. And set False.
		findWidget("tableWith_BinaryData")
			.getCell(0, 2)
			.setValue(false);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["3.00"], [""]]);

		// Click on (1,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_BinaryData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(1, 0)
			.click();

		// Assert data seen on `tableWith_BinaryData` Table
		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00", "0.00", "0.00", "1.00", "1.00"]]);

		// Click on (0,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_BinaryData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(0, 0)
			.click();

		// Assert data seen on `tableWith_BinaryData` Table
		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00", "0.00", "0.00", "1.00", "0.00"]]);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["3.00"], [""]]);

		//  Click onto (0,1) cell of `tableWith_BinaryData` Table. Using "Delete" keystroke clear off the data.
		findWidget("tableWith_BinaryData")
			.getCell(0, 3)
			.click()
			.pressKeys(SPECIAL_KEYS.delete);

		// Click on (1,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_BinaryData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(1, 0)
			.click();

		// Click on (0,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_BinaryData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(0, 0)
			.click();

		// Assert data seen on `tableWith_BinaryData` Table
		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00", "0.00", "0.00", "0.00", "0.00"]]);
	}
);
