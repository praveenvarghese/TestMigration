/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Validate Widget type switch options displayed for older bar line and line chart ", () => {
	loadPage("Main Project/Item Actions/Charts/Line Chart Data");

	//In CLassic Page
	// Line Chart
	findWidget("LineChart_1_1")
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

	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

	// Bar Line Chart
	findWidget("BarLineChart_1_1")
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

	//Pie Chart
	loadPage("Main Project/Item Actions/Charts/Pie Chart Data");

	// Scalar widget
	findWidget("PieChart_1_1")
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
