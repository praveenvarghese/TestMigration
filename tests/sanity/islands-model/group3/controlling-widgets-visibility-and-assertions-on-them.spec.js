/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Controlling widgets visibility on the pag through flags, and tests asserting chart elements shown and the widgets shown on page.",
	() => {
		loadPage("Main Project/home");

		findWidget("PlaneSelectionBox").selectAll();

		// Navigate to "Main Project/Second Page" page
		openAppManager().navigateToPage("Main Project/Second Page");

		// Close the Page Manager sidebar
		closeAppManager();

		// Click on the "Solve Model" buttons
		findWidget("Solve Model").click();

		// Assert the no. of bars shown on Barchart
		findWidget("TotalCostPerPlane")
			.getNumberOfBars()
			.should.be.equal(3);

		// Assert the no. of wedges shown on Piechart
		findWidget("TotalCostPerIsland")
			.getWedgesCount()
			.should.be.equal(7);

		// Assert the no. of points shown on Linechart
		findWidget("TotalCostPerIslandLineChart_1")
			.getCountOfPoints()
			.should.be.equal(7);

		// Assert the no. of rectangles shown on Treemap
		findWidget("TotalCostPerIslandTreeMap")
			.getRectanglesCount()
			.should.be.equal(7);

		// Select None on the selection widget
		findWidget("Widget Selector").selectNone();

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TheIslandLegend",
				"Solve Model",
				"TotalCostPerIslandLineChart_1",
				"Widget Selector",
				"List Widget",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
			]);

		// Update visibility of "Label" widget to be shown.
		findWidget("Widget Selector").select(["Label"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TheIslandLegend",
				"Solve Model",
				"TotalCostPerIslandLineChart_1",
				"Widget Selector",
				"List Widget",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"Lab1",
			]);

		// Update visibility of "Tree Map" widget to be shown.
		findWidget("Widget Selector").select(["Tree Map"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TheIslandLegend",
				"Solve Model",
				"TotalCostPerIslandLineChart_1",
				"Widget Selector",
				"TotalCostPerIslandTreeMap",
				"List Widget",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"Lab1",
			]);

		// Update visibility of "Text" widget to be shown.
		findWidget("Widget Selector").select(["Text"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TheIslandLegend",
				"Solve Model",
				"TotalCostPerIslandLineChart_1",
				"Widget Selector",
				"TotalCostPerIslandTreeMap",
				"ExplanotaryText",
				"List Widget",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"Lab1",
			]);

		// Update visibility of all remaining widgets to be shown.
		findWidget("Widget Selector").selectAll();

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TotalCostPerPlane",
				"TotalCostPerIsland",
				"TheIslandLegend",
				"Solve Model",
				"TotalCostPerIslandLineChart_1",
				"Widget Selector",
				"TotalCostPerIslandTreeMap",
				"ExplanotaryText",
				"Teide",
				"List Widget",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"Lab1",
			]);

		// Update visibility of "Image" and "Barchart" widgets to not been shown.
		findWidget("Widget Selector").deselect(["Image", "Bar Chart"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TotalCostPerIsland",
				"TheIslandLegend",
				"Solve Model",
				"TotalCostPerIslandLineChart_1",
				"Widget Selector",
				"TotalCostPerIslandTreeMap",
				"ExplanotaryText",
				"List Widget",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"Lab1",
			]);
	}
);
