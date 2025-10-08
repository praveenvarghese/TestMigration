/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Widget type switch options displayed for older bar chart ", () => {
	loadPage("Main Project/Home");

	//In CLassic Page
	// Bar Chart
	findWidget("SupplyData")
		.openChangeWidgetTypeOptionEditor()
		.getAllWidgetTypeDetails()
		.should.eql([
			"Bar Chart",
			"Bar Line Chart",
			"Bubble Chart",
			"Gantt Chart",
			"Line Chart",
			"Pie Chart",
			"Scalar",
			"Slider",
			"Table",
			"Tree Map",
			"Combination Chart",
		]);

	// Scalar widget
	findWidget("TotalCosts")
		.openChangeWidgetTypeOptionEditor()
		.getAllWidgetTypeDetails()
		.should.eql([
			"Bar Chart",
			"Bar Line Chart",
			"Bubble Chart",
			"Gantt Chart",
			"Line Chart",
			"Pie Chart",
			"Scalar",
			"Slider",
			"Table",
			"Tree Map",
		]);

	getPageMenu().navigateToPage("Main Project/Grid_Page_Custom_Layout");

	//In custom Layout
	// Bar Chart
	findWidget("Supply_table")
		.openChangeWidgetTypeOptionEditor()
		.getAllWidgetTypeDetails()
		.should.eql([
			"Bar Chart",
			"Bar Line Chart",
			"Bubble Chart",
			"Gantt Chart",
			"Line Chart",
			"Pie Chart",
			"Scalar",
			"Slider",
			"Table",
			"Tree Map",
			"Combination Chart",
		]);

	// Scalar widget
	findWidget("TotalCosts_scalar")
		.openChangeWidgetTypeOptionEditor()
		.getAllWidgetTypeDetails()
		.should.eql([
			"Bar Chart",
			"Bar Line Chart",
			"Bubble Chart",
			"Gantt Chart",
			"Line Chart",
			"Pie Chart",
			"Scalar",
			"Slider",
			"Table",
			"Tree Map",
		]);
});
