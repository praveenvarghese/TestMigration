/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Check a bunch of widget dimensions. Based on a bug where suddenly the up/download widgets were displayed twice as high as they should have been.",
	() => {
		loadPage("Main Project/home");

		// Button
		findWidget("Canarias7 Newspaper")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		// Multiselect
		findWidget("PlaneSelectionBox")
			.getDimensions()
			.should.eql([250, 170]);

		// Image
		findWidget("PlaneImage")
			.getDimensions()
			.should.eql([250, 170]);

		// Bubble chart
		findWidget("AircraftData")
			.getDimensions()
			.should.eql([510, 350]);

		// Table
		findWidget("DailyPassengers")
			.getDimensions()
			.should.eql([900, 350]);

		loadPage("Main Project/Second Page");

		// Bar chart
		findWidget("TotalCostPerPlane")
			.getDimensions()
			.should.eql([380, 350]);

		// Pie chart
		findWidget("TotalCostPerIsland")
			.getDimensions()
			.should.eql([380, 350]);

		// Legend
		findWidget("TheIslandLegend")
			.getDimensions()
			.should.eql([250, 350]);

		// Line chart
		findWidget("TotalCostPerIslandLineChart_1")
			.getDimensions()
			.should.eql([510, 350]);

		// Another multiselect
		findWidget("Widget Selector")
			.getDimensions()
			.should.eql([250, 530]);

		// Tree map
		findWidget("TotalCostPerIslandTreeMap")
			.getDimensions()
			.should.eql([380, 350]);

		// Text widget
		findWidget("ExplanotaryText")
			.getDimensions()
			.should.eql([380, 350]);

		// Image widget
		findWidget("Teide")
			.getDimensions()
			.should.eql([510, 350]);

		// List widget
		findWidget("List Widget")
			.getDimensions()
			.should.eql([250, 350]);

		// Label widget
		findWidget("Lab1")
			.getDimensions()
			.should.eql([510, constants.HEADERLESS_WIDGET_HEIGHT]);

		// A longer button
		findWidget("Clear Schedule_1")
			.getDimensions()
			.should.eql([380, constants.HEADERLESS_WIDGET_HEIGHT]);

		loadPage("Main Project/THird Page");

		// Upload widget
		findWidget("UploadTheFile")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		// Download widget
		findWidget("DownloadTheFile")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		loadPage("Main Project/Gantt Page");

		// Gantt widget
		findWidget("The Gantt Chart")
			.getDimensions()
			.should.eql([900, 530]);

		loadPage("Main Project/Great Test Page");

		// Compact scalar widget
		findWidget("CompactScalar")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		// Slider widget
		findWidget("MyTestSlider")
			.getDimensions()
			.should.eql([250, 170]);

		// Scalar elementpar box
		findWidget("BlineFilterByScalar")
			.getDimensions()
			.should.eql([250, 170]);

		// Small selectionbox
		findWidget("BlineFilterBySelectionBox")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		loadPage("Main Project/Switch Page");

		// Scalar widget with two entries
		findWidget("BiggestFrom")
			.getDimensions()
			.should.eql([380, 170]);

		loadPage("Main Project/MapV3 Test Page");

		// Map V3 widget
		findWidget("MapV3Test")
			.getDimensions()
			.should.eql([1030, 530]);
	}
);
