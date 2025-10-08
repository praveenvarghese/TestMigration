/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario(
	"Check a bunch of widget dimensions. Based on a bug where suddenly the up/download widgets were displayed twice as high as they should have been.",
	() => {
		//Page V2 has fractions of pixels as widget dimensions. To ignore these, a pixel tolerance is used in doing the assertions on the dimensions.
		const pixelTolerance = 1;

		loadPage("Main Project/home");

		// Button
		findWidget("Canarias7 Newspaper")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		// Multiselect
		findWidget("PlaneSelectionBox")
			.getDimensions()
			.should.eql([250, 335]);

		// Image
		findWidget("PlaneImage")
			.getDimensions()
			.should.eql([250, 170]);

		// Bubble chart
		findWidget("AircraftData")
			.getDimensions()
			.should.eql([782, 500]);

		// Table
		findWidget("DailyPassengers")
			.getDimensions()
			.should.eql([782, 500]);

		loadPage("Main Project/Second Page");

		// Bar chart
		findWidget("TotalCostPerPlane")
			.getDimensions()
			.should.eql([450, 400]);

		// Pie chart
		findWidget("TotalCostPerIsland")
			.getDimensions()
			.should.eql([450, 400]);

		// Legend
		findWidget("TheIslandLegend")
			.getDimensions()
			.should.eql([450, 400]);

		// Line chart
		findWidget("TotalCostPerIslandLineChart")
			.getDimensions()
			.should.eql([450, 400]);

		// Another multiselect
		findWidget("Widget Selector")
			.getDimensions()
			.should.eql([450, 400]);

		// Tree map
		findWidget("TotalCostPerIslandTreeMap")
			.getDimensions()
			.should.eql([450, 400]);

		// Text widget
		findWidget("ExplanotaryText")
			.getDimensions()
			.should.eql([450, 400]);

		// Image widget
		findWidget("Teide")
			.getDimensions()
			.should.eql([450, 296]);

		// Label widget
		findWidget("Lab1")
			.getDimensions()
			.should.eql([450, constants.HEADERLESS_WIDGET_HEIGHT]);

		// A longer button
		findWidget("Solve Model")
			.getDimensions()
			.should.eql([450, constants.HEADERLESS_WIDGET_HEIGHT]);

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
			.should.eql([916, 400]);

		loadPage("Main Project/Great Test Page");

		// Compact scalar widget
		findWidget("CompactScalar")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		// Scalar elementpar box
		findWidget("BlineFilterByScalar")
			.assertDimensions(250, 210, pixelTolerance) // Using a tolerance here because the real size is 166.5 locally
			.should.eql(true);

		// Small selectionbox
		findWidget("BlineFilterBySelectionBox")
			.getDimensions()
			.should.eql([250, constants.HEADERLESS_WIDGET_HEIGHT]);

		loadPage("Main Project/Switch Page");

		// Scalar widget with two entries
		findWidget("BiggestFrom")
			.getDimensions()
			.should.eql([400, 192]);

		loadPage("Main Project/MapV2 Test Page");

		// Map V2 widget
		findWidget("MapV2Test")
			.getDimensions()
			.should.eql([966, 400]);
	}
);
