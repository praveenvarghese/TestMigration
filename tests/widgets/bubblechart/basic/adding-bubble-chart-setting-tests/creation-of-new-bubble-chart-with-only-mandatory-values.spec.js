/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Create a new bubble chart widget and add all the mandatory values", () => {
	loadPage("Main Project/Charts/TestBubbleChartPage");

	//Create a new bubble chart widget
	createWidget("bubblechart", [], "NewBubbleChart");

	openWidgetManager().setWidgetSize("NewBubbleChart", { width: 4, height: 4 });

	findWidget("testbubblechartpage_1")
		.getVisibleWidgets()
		.should.eql(["NewBubbleChart"]);

	findWidget("NewBubbleChart")
		.getEmptyMessage()
		.should.be.equal("Empty Bubblechart");

	//Add X,Y,Size value and max reference value
	//ALso validate error message on the widget
	findWidget("NewBubbleChart")
		.openBubbleChartSettingsOptionEditor()
		.getBubbleChartSetting("X")
		.setValue({
			value: "CostOfProducts",
			valueType: "IDENTIFIER",
			optionEditorType: "IDENTIFIER",
			sliceInfo: null,
		});

	findWidget("NewBubbleChart")
		.getEmptyMessage()
		.should.be.equal("Expected 3 identifiers, one for each of: X, Y, size.");

	findWidget("NewBubbleChart")
		.openBubbleChartSettingsOptionEditor()
		.getBubbleChartSetting("Y")
		.setValue({
			value: "NumberOfProducts",
			valueType: "IDENTIFIER",
			optionEditorType: "IDENTIFIER",
			sliceInfo: null,
		});

	findWidget("NewBubbleChart")
		.getEmptyMessage()
		.should.be.equal("Expected 3 identifiers, one for each of: X, Y, size.");

	findWidget("NewBubbleChart")
		.openBubbleChartSettingsOptionEditor()
		.getBubbleChartSetting("Size")
		.setValue({
			value: "NumberOfProducts",
			valueType: "IDENTIFIER",
			optionEditorType: "IDENTIFIER",
			sliceInfo: null,
		});

	findWidget("NewBubbleChart")
		.findBubbles()
		.should.have.numberOfItems(5);

	findWidget("NewBubbleChart")
		.findBubble(["biryani"])
		.click();

	findWidget("NewBubbleChart")
		.findBubbles()
		.should.include.something.like({
			label: "(biryani)",
			value: "x: 10.00, y: 150.00, size: 150.00",
		});

	//Navigate to diffrent page and validate bubble chart widget is not deleted or modified
	openAppManager().navigateToPage("Main Project/Charts");

	openAppManager().navigateToPage("Main Project/Charts/TestBubbleChartPage");

	findWidget("NewBubbleChart")
		.findBubbles()
		.should.have.numberOfItems(5);

	findWidget("NewBubbleChart")
		.findBubble(["biryani"])
		.click();

	findWidget("NewBubbleChart")
		.findBubbles()
		.should.include.something.like({
			label: "(biryani)",
			value: "x: 10.00, y: 150.00, size: 150.00",
		});
});
