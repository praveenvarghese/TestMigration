/*!
 * @AIMMS_FILE=models/CombiChartConversions/CombiChartConversions.aimms
 */

function ConvertAndAssertWidget(name, expectedMessage) {
	findWidget(name)
		.openChangeWidgetTypeOptionEditor()
		.changeWidgetTypeTo("combinationchart");

	// Click on the 'Continue' button on the dialog which appears
	// findWidget(name)
	// 	.getContinueButtonOnConversionDialog()
	// 	.click();

	findDialog()
		.getMessage()
		.should.equal(expectedMessage);

	findDialog()
		.findButton("Continue")
		.click();

	// A new widget called "name_1" should have been created, with the expected type.
	findWidget(name + "_1").should.be.a.widgetOfType("combinationchart");
}

scenario("Verify the conversion of Bar/Line/BarLine charts to a combination Chart", () => {
	loadPage("Main Project/home?_aimms_only_highcharts=true");

	openAppManager();

	// Verify the widgets at the start
	getAppManager().unfoldWidgetContainers(["Main Project/home"]);

	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Main Project",
				Slug: "main_project",
				NodeType: "Pagev2-grid",
				Tooltip: "Main Project",
				NodeState: "Expanded",
				Icon: "",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "home",
				Slug: "home",
				NodeType: "Pagev2-grid",
				Tooltip: "home [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-home",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "4",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "PrecipitationData",
				Slug: "PrecipitationData",
				NodeType: "Widget",
				Tooltip: "PrecipitationData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "TemperatureData",
				Slug: "TemperatureData",
				NodeType: "Widget",
				Tooltip: "TemperatureData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "ClimateData",
				Slug: "ClimateData",
				NodeType: "Widget",
				Tooltip: "ClimateData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "AveragesInNumbers",
				Slug: "AveragesInNumbers",
				NodeType: "Widget",
				Tooltip: "AveragesInNumbers [ Widget ]",
				WidgetState: "",
			},
		]);

	// Convert the Bar, the Line and the BarLine chart
	ConvertAndAssertWidget(
		"PrecipitationData",
		"This action will create a copy of this 'PrecipitationData' chart widget with the Combination Chart Type.\t\t\t\tPlease be informed, your existing chart will be retained as is and it will be placed under the Unassigned area of this page layout."
	);
	ConvertAndAssertWidget(
		"TemperatureData",
		"This action will create a copy of this 'TemperatureData' chart widget with the Combination Chart Type.\t\t\t\tPlease be informed, your existing chart will be retained as is and it will be placed under the Unassigned area of this page layout.\t\t\t\tNote:Display domain options will not be converted automatically and need to be updated manually after the conversion."
	);
	ConvertAndAssertWidget(
		"ClimateData",
		"This action will create a copy of this 'ClimateData' chart widget with the Combination Chart Type.\t\t\t\tPlease be informed, your existing chart will be retained as is and it will be placed under the Unassigned area of this page layout.\t\t\t\tNote:Aggregators are not supported in the new Combination Chart Type."
	);

	// Check the widgets in the widget list of the page. Not jkust the new widgets should be there, but also the originals.
	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Main Project",
				Slug: "main_project",
				NodeType: "Pagev2-grid",
				Tooltip: "Main Project",
				NodeState: "Expanded",
				Icon: "",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "home",
				Slug: "home",
				NodeType: "Pagev2-grid",
				Tooltip: "home [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-home",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "7",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "PrecipitationData",
				Slug: "PrecipitationData",
				NodeType: "Widget",
				Tooltip: "PrecipitationData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "TemperatureData",
				Slug: "TemperatureData",
				NodeType: "Widget",
				Tooltip: "TemperatureData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "ClimateData",
				Slug: "ClimateData",
				NodeType: "Widget",
				Tooltip: "ClimateData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "AveragesInNumbers",
				Slug: "AveragesInNumbers",
				NodeType: "Widget",
				Tooltip: "AveragesInNumbers [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "PrecipitationData (1)",
				Slug: "PrecipitationData_1",
				NodeType: "Widget",
				Tooltip: "PrecipitationData (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "TemperatureData (1)",
				Slug: "TemperatureData_1",
				NodeType: "Widget",
				Tooltip: "TemperatureData (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "ClimateData (1)",
				Slug: "ClimateData_1",
				NodeType: "Widget",
				Tooltip: "ClimateData (1) [ Widget ]",
				WidgetState: "",
			},
		]);

	// On the original BarLine chart, some options were set. Check whether these are also set in the converted widget.
	// The Y-axis lowerbound/upperbound/stepsize should have been converted too.
	findWidget("ClimateData_1")
		.getYaxisScaleValues()
		.should.eql(["-10", "0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]);

	findWidget("ClimateData_1")
		.getTitle()
		.should.eql("BarLine Climate Data");

	findWidget("ClimateData_1")
		.getNumberOfBars()
		.should.eql(12);

	findWidget("ClimateData_1")
		.getNumberOfPoints()
		.should.eql(12);

	// On the original Bar chart, a slicing on the index was present. Verify that the number of bars in the
	// converted widget is also 3, as a result of that.
	findWidget("PrecipitationData_1")
		.getNumberOfBars()
		.should.eql(3);

	// On the original Line chart, the Title was also set.
	findWidget("TemperatureData_1")
		.getTitle()
		.should.eql("Winter Chart");

	// The Line chart also had a Display Domain active, restricting the number of points shown to 3. This will not be converted
	// automatically, so 12 points are expected.
	findWidget("TemperatureData_1")
		.getNumberOfPoints()
		.should.eql(12);
});
