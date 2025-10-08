/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
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
				"Widget Selector",
				"Solve Model",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"List Widget",
				"TotalCostPerIslandLineChart_1",
			]);

		// Update visibility of "Label" widget to be shown.
		findWidget("Widget Selector").select(["Label"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TheIslandLegend",
				"Widget Selector",
				"Solve Model",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"List Widget",
				"Lab1",
				"TotalCostPerIslandLineChart_1",
			]);

		// Update visibility of "Tree Map" widget to be shown.
		findWidget("Widget Selector").select(["Tree Map"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TotalCostPerIslandTreeMap",
				"TheIslandLegend",
				"Widget Selector",
				"Solve Model",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"List Widget",
				"Lab1",
				"TotalCostPerIslandLineChart_1",
			]);

		// Update visibility of "Text" widget to be shown.
		findWidget("Widget Selector").select(["Text"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TotalCostPerIslandTreeMap",
				"ExplanotaryText",
				"TheIslandLegend",
				"Widget Selector",
				"Solve Model",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"List Widget",
				"Lab1",
				"TotalCostPerIslandLineChart_1",
			]);

		// Update visibility of all remaining widgets to be shown.
		findWidget("Widget Selector").selectAll();

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TotalCostPerPlane",
				"TotalCostPerIsland",
				"TotalCostPerIslandTreeMap",
				"ExplanotaryText",
				"TheIslandLegend",
				"Widget Selector",
				"Solve Model",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"List Widget",
				"Lab1",
				"Teide",
				"TotalCostPerIslandLineChart_1",
			]);

		// Update visibility of "Image" and "Barchart" widgets to not been shown.
		findWidget("Widget Selector").deselect(["Image", "Bar Chart"]);

		//Assert the widgets shown on the Page.
		findWidget("second_page")
			.getVisibleWidgets()
			.should.eql([
				"TotalCostPerIsland",
				"TotalCostPerIslandTreeMap",
				"ExplanotaryText",
				"TheIslandLegend",
				"Widget Selector",
				"Solve Model",
				"Fetch latest Planes Info",
				"Clear Schedule_1",
				"List Widget",
				"Lab1",
				"TotalCostPerIslandLineChart_1",
			]);
	}
);
