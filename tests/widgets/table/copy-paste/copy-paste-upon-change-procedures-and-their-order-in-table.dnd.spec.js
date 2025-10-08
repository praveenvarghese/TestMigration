/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function PerformCopyPaste(fromPage, fromTable, toPage, toTable, fromSelection, toCell) {
	loadPage(fromPage);

	// Copy a block of cells from the source table and paste it into the destination table on the destination page
	findWidget(fromTable).setSelection(
		fromSelection[0],
		fromSelection[1],
		fromSelection[2],
		fromSelection[3]
	);

	findWidget(fromTable).pressCtrl(["c"]);

	if (fromPage !== toPage) {
		loadPage(toPage);
	}

	// Select the position where to paste into
	findWidget(toTable).setSelection(toCell[0], toCell[1], toCell[0], toCell[1]);

	findWidget(toTable).pressCtrl(["v"]);
}

scenario("copy-paste-upon-change-procedures-and-their-order-in-table", () => {
	//Copy a cell value and paste the value in the same table

	PerformCopyPaste(
		"Main Project/Tables/Tables_1",
		"UnitCosts_table_1",
		"Main Project/Tables/Tables_1",
		"UnitCosts_table_1",
		[1, 2, 1, 2],
		[2, 2]
	);

	findWidget("UnitCosts_table_1")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("13.90 kEuro/ton");

	findWidget("Transport_chart_1")
		.isEmpty()
		.should.be.equal(true);

	//Click on Optimize primary page action.
	findWidget("tables_1")
		.getPrimaryPageAction()
		.click();

	waitForBackgroundActionToComplete();

	findWidget("Transport_chart_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"16.32 ton",
				"11.73 ton",
				"11.23 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
			],
			[
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"16.26 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"10.11 ton",
				"15.92 ton",
				"0.00 ton",
			],
			[
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"10.36 ton",
				"16.87 ton",
				"10.67 ton",
				"0.00 ton",
				"3.37 ton",
				"14.93 ton",
			],
		]);

	//Copy a cell value from a page and navigate to another page with table which has upon chnage procedure and paste the value.

	PerformCopyPaste(
		"Main Project/Tables/Tables_0",
		"UC_NoUnits",
		"Main Project/Tables/Tables_1",
		"UnitCosts_table_1",
		[1, 1, 1, 1],
		[2, 4]
	);

	findWidget("UnitCosts_table_1")
		.getCell(2, 4)
		.getValue()
		.should.be.equal("76.67 kEuro/ton");

	findWidget("Transport_chart_1")
		.isEmpty()
		.should.be.equal(true);

	//Click on Optimize primary page action.
	findWidget("tables_1")
		.getPrimaryPageAction()
		.click();

	waitForBackgroundActionToComplete();

	findWidget("Transport_chart_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"16.32 ton",
				"11.73 ton",
				"11.23 ton",
				"0.00 ton",
				"10.36 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
			],
			[
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"16.26 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"10.11 ton",
				"15.92 ton",
				"0.00 ton",
			],
			[
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"0.00 ton",
				"16.87 ton",
				"10.67 ton",
				"0.00 ton",
				"3.37 ton",
				"14.93 ton",
			],
		]);
});
