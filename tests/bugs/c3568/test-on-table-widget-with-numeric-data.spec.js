/*!
 * @AIMMS_FILE=models/Bugs/c3568-TableCellDataUpdateOrder/c3568.aimms
 */

scenario(
	"Customer Ticket 3568 - Change in WebUI Table cell Numeric-Data is now updated first and then StoreFocus is set.",
	() => {
		loadPage("Main Project/home?table-v2=false");

		// Test data setup
		findWidget("Test Data Setup").click();

		// Assert data seen on `tableWith_NumericData` Table
		findWidget("tableWith_NumericData")
			.getGridValues()
			.should.be.shallowDeepEqual([["5.00", "5.00", "5.00", "5.00", "5.00"]]);

		//  Submit data onto (0,0) cell of `tableWith_NumericData` Table
		findWidget("tableWith_NumericData")
			.getCell(0, 0)
			.setValue("05061984.2328", true);

		// Assert data seen on `tableWith_NumericData` Table
		findWidget("tableWith_NumericData")
			.getGridValues()
			.should.be.shallowDeepEqual([["5,061,994.23", "5.00", "5.00", "5.00", "5.00"]]);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["1.00"], [""]]);

		//  Enter data onto (0,1) cell of `tableWith_NumericData` Table, but without SPECIAL_KEYS.enter KeyStroke
		findWidget("tableWith_NumericData")
			.getCell(0, 1)
			.setValue("561984.2356", false);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["2.00"], [""]]);

		//  Click onto (0,2) cell of `tableWith_NumericData` Table. Enter data, but without SPECIAL_KEYS.enter KeyStroke
		findWidget("tableWith_NumericData")
			.getCell(0, 2)
			.click()
			.setValue("5684.1128", false);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["3.00"], [""]]);

		// Click on (1,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_NumericData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(1, 0)
			.click();

		// Assert data seen on `tableWith_NumericData` Table
		findWidget("tableWith_NumericData")
			.getGridValues()
			.should.be.shallowDeepEqual([["5.00", "5.00", "5.00", "5.00", "5.00"]]);

		// Click on (0,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_NumericData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(0, 0)
			.click();

		// Assert data seen on `tableWith_NumericData` Table
		findWidget("tableWith_NumericData")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["5,061,994.23", "561,994.24", "5,694.11", "5.00", "5.00"],
			]);

		// Assert data shown on Store Focus table.
		findWidget("table-storefocus")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["3.00"], [""]]);

		//  Click onto (0,1) cell of `tableWith_NumericData` Table. Using "Delete" keystroke clear off the data.
		findWidget("tableWith_NumericData")
			.getCell(0, 1)
			.click()
			.pressKeys(SPECIAL_KEYS.delete);

		// Click on (1,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_NumericData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(1, 0)
			.click();

		// Click on (0,0) cell of `tableWith_iIndex1` Table. This so that the sliced data on `tableWith_NumericData` Table is changed.
		findWidget("tableWith_iIndex1")
			.getCell(0, 0)
			.click();

		// Assert data seen on `tableWith_NumericData` Table
		findWidget("tableWith_NumericData")
			.getGridValues()
			.should.be.shallowDeepEqual([["5,061,994.23", "5.00", "5,694.11", "5.00", "5.00"]]);
	}
);
