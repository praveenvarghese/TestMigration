/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Right-click on Bubble Chart elements and assert their UI behaviours.", () => {
	loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	// Close the Page Manager
	closeAppManager();

	/*
			With no Item actions data.
			Right click on Bubble Chart elements and assert the UI behaviours
	*/

	// Right click on a Bubble Chart - solid bubble element
	findWidget("BubbleChart_1_1")
		.findBubble("MB, Map")
		.rightClick();

	// Assert UI behaviour on the right-clicked bubbles
	let bubble_MB_Map = findWidget("BubbleChart_1_1").findBubble("MB, Map");
	bubble_MB_Map.hasClass("is-active").should.be.equal(true);
	bubble_MB_Map.getCSSStyleProperty("opacity").should.be.equal("1");
	bubble_MB_Map.getCSSStyleProperty("fill-opacity").should.be.equal("1");
	bubble_MB_Map
		.getCSSStyleProperty("stroke")
		.should.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_MB_Map.getCSSStyleProperty("stroke-width").should.be.equal("2px");

	let bubble_KH_PieChart = findWidget("BubbleChart_1_1").findBubble("KH, Pie Chart");
	bubble_KH_PieChart.hasClass("is-active").should.be.equal(false);
	bubble_KH_PieChart.getCSSStyleProperty("fill-opacity").should.be.equal("0");
	bubble_KH_PieChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_KH_PieChart
		.getCSSStyleProperty("stroke")
		.should.not.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_KH_PieChart.getCSSStyleProperty("stroke-width").should.be.equal("1px");

	let bubble_PK_GanttChart = findWidget("BubbleChart_1_1").findBubble("PK, Gantt Chart");
	bubble_PK_GanttChart.hasClass("is-active").should.be.equal(false);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-opacity").should.be.equal("0.7");
	bubble_PK_GanttChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_PK_GanttChart
		.getCSSStyleProperty("stroke")
		.should.not.contain(`${colors.colorPrimitiveGrey100.rgbWithWhitespace}`);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-width").should.be.equal("4px");

	// Right click on a Bubble Chart - clear (-ve valued) bubble element
	findWidget("BubbleChart_1_1")
		.findBubble("KH, Pie Chart")
		.rightClick();

	// Assert UI behaviour on the right-clicked bubbles
	bubble_MB_Map = findWidget("BubbleChart_1_1").findBubble("MB, Map");
	bubble_MB_Map.hasClass("is-active").should.be.equal(false);
	bubble_MB_Map.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("stroke").should.contain(colors.colorMod16Ord8.rgb);
	bubble_MB_Map.getCSSStyleProperty("stroke-width").should.be.equal("0px");

	bubble_KH_PieChart = findWidget("BubbleChart_1_1").findBubble("KH, Pie Chart");
	bubble_KH_PieChart.hasClass("is-active").should.be.equal(true);
	bubble_KH_PieChart.getCSSStyleProperty("fill-opacity").should.be.equal("0");
	bubble_KH_PieChart.getCSSStyleProperty("opacity").should.be.equal("1");
	bubble_KH_PieChart
		.getCSSStyleProperty("stroke")
		.should.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_KH_PieChart.getCSSStyleProperty("stroke-width").should.be.equal("2px");

	bubble_PK_GanttChart = findWidget("BubbleChart_1_1").findBubble("PK, Gantt Chart");
	bubble_PK_GanttChart.hasClass("is-active").should.be.equal(false);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-opacity").should.be.equal("0.7");
	bubble_PK_GanttChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_PK_GanttChart
		.getCSSStyleProperty("stroke")
		.should.not.contain(`${colors.colorPrimitiveGrey100.rgbWithWhitespace}`);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-width").should.be.equal("4px");

	// Right click on a Bubble Chart - 0-sized bubble element
	findWidget("BubbleChart_1_1")
		.findBubble("PK, Gantt Chart")
		.rightClick(0, 0);

	// Assert UI behaviour on the right-clicked bubbles
	bubble_MB_Map = findWidget("BubbleChart_1_1").findBubble("MB, Map");
	bubble_MB_Map.hasClass("is-active").should.be.equal(false);
	bubble_MB_Map.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("stroke").should.contain(colors.colorMod16Ord8.rgb);
	bubble_MB_Map.getCSSStyleProperty("stroke-width").should.be.equal("0px");

	bubble_KH_PieChart = findWidget("BubbleChart_1_1").findBubble("KH, Pie Chart");
	bubble_KH_PieChart.hasClass("is-active").should.be.equal(false);
	bubble_KH_PieChart.getCSSStyleProperty("fill-opacity").should.be.equal("0");
	bubble_KH_PieChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_KH_PieChart.getCSSStyleProperty("stroke").should.contain(colors.colorMod16Ord9.rgb);
	bubble_KH_PieChart.getCSSStyleProperty("stroke-width").should.be.equal("1px");

	bubble_PK_GanttChart = findWidget("BubbleChart_1_1").findBubble("PK, Gantt Chart");
	bubble_PK_GanttChart.hasClass("is-active").should.be.equal(true);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-opacity").should.be.equal("0.7");
	bubble_PK_GanttChart.getCSSStyleProperty("opacity").should.be.equal("1");
	bubble_PK_GanttChart
		.getCSSStyleProperty("stroke")
		.should.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-width").should.be.equal("4px");

	// Unfold the Secondary page actions and click on action that updates item actions data
	findWidget("bubble_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	findWidget("bubble_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(4)
		.click();
	findWidget("bubble_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	/*
		With Item actions data updated.
		Right click on Bubble Chart elements and assert the UI behaviours
	*/

	// Right click on a Bubble Chart - solid bubble element
	findWidget("BubbleChart_1_1")
		.findBubble("MB, Map")
		.rightClick();

	// Assert UI behaviour on the right-clicked bubbles
	bubble_MB_Map = findWidget("BubbleChart_1_1").findBubble("MB, Map");
	bubble_MB_Map.hasClass("is-active").should.be.equal(true);
	bubble_MB_Map.getCSSStyleProperty("opacity").should.be.equal("1");
	bubble_MB_Map.getCSSStyleProperty("fill-opacity").should.be.equal("1");
	bubble_MB_Map
		.getCSSStyleProperty("stroke")
		.should.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_MB_Map.getCSSStyleProperty("stroke-width").should.be.equal("2px");

	bubble_KH_PieChart = findWidget("BubbleChart_1_1").findBubble("KH, Pie Chart");
	bubble_KH_PieChart.hasClass("is-active").should.be.equal(false);
	bubble_KH_PieChart.getCSSStyleProperty("fill-opacity").should.be.equal("0");
	bubble_KH_PieChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_KH_PieChart
		.getCSSStyleProperty("stroke")
		.should.not.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_KH_PieChart.getCSSStyleProperty("stroke-width").should.be.equal("1px");

	bubble_PK_GanttChart = findWidget("BubbleChart_1_1").findBubble("PK, Gantt Chart");
	bubble_PK_GanttChart.hasClass("is-active").should.be.equal(false);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-opacity").should.be.equal("0.7");
	bubble_PK_GanttChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_PK_GanttChart
		.getCSSStyleProperty("stroke")
		.should.not.contain(`${colors.colorPrimitiveGrey100.rgbWithWhitespace}`);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-width").should.be.equal("4px");

	// Right click on a Bubble Chart - clear (-ve valued) bubble element
	findWidget("BubbleChart_1_1")
		.findBubble("KH, Pie Chart")
		.rightClick();

	// Assert UI behaviour on the right-clicked bubbles
	bubble_MB_Map = findWidget("BubbleChart_1_1").findBubble("MB, Map");
	bubble_MB_Map.hasClass("is-active").should.be.equal(false);
	bubble_MB_Map.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("stroke").should.contain(colors.colorMod16Ord8.rgb);
	bubble_MB_Map.getCSSStyleProperty("stroke-width").should.be.equal("0px");

	bubble_KH_PieChart = findWidget("BubbleChart_1_1").findBubble("KH, Pie Chart");
	bubble_KH_PieChart.hasClass("is-active").should.be.equal(true);
	bubble_KH_PieChart.getCSSStyleProperty("fill-opacity").should.be.equal("0");
	bubble_KH_PieChart.getCSSStyleProperty("opacity").should.be.equal("1");
	bubble_KH_PieChart
		.getCSSStyleProperty("stroke")
		.should.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_KH_PieChart.getCSSStyleProperty("stroke-width").should.be.equal("2px");

	bubble_PK_GanttChart = findWidget("BubbleChart_1_1").findBubble("PK, Gantt Chart");
	bubble_PK_GanttChart.hasClass("is-active").should.be.equal(false);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-opacity").should.be.equal("0.7");
	bubble_PK_GanttChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_PK_GanttChart
		.getCSSStyleProperty("stroke")
		.should.not.contain(`${colors.colorPrimitiveGrey100.rgbWithWhitespace}`);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-width").should.be.equal("4px");

	// Right click on a Bubble Chart - 0-sized bubble element
	findWidget("BubbleChart_1_1")
		.findBubble("PK, Gantt Chart")
		.rightClick(0, 0);

	// Assert UI behaviour on the right-clicked bubbles
	bubble_MB_Map = findWidget("BubbleChart_1_1").findBubble("MB, Map");
	bubble_MB_Map.hasClass("is-active").should.be.equal(false);
	bubble_MB_Map.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	bubble_MB_Map.getCSSStyleProperty("stroke").should.contain(colors.colorMod16Ord8.rgb);
	bubble_MB_Map.getCSSStyleProperty("stroke-width").should.be.equal("0px");

	bubble_KH_PieChart = findWidget("BubbleChart_1_1").findBubble("KH, Pie Chart");
	bubble_KH_PieChart.hasClass("is-active").should.be.equal(false);
	bubble_KH_PieChart.getCSSStyleProperty("fill-opacity").should.be.equal("0");
	bubble_KH_PieChart.getCSSStyleProperty("opacity").should.be.equal("0.7");
	bubble_KH_PieChart.getCSSStyleProperty("stroke").should.contain(colors.colorMod16Ord9.rgb); //rgb(165, 165, 59)
	bubble_KH_PieChart.getCSSStyleProperty("stroke-width").should.be.equal("1px");

	bubble_PK_GanttChart = findWidget("BubbleChart_1_1").findBubble("PK, Gantt Chart");
	bubble_PK_GanttChart.hasClass("is-active").should.be.equal(true);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-opacity").should.be.equal("0.7");
	bubble_PK_GanttChart.getCSSStyleProperty("opacity").should.be.equal("1");
	bubble_PK_GanttChart
		.getCSSStyleProperty("stroke")
		.should.contain(`${colors.colorPrimitiveGrey80.rgbWithWhitespace}`);
	bubble_PK_GanttChart.getCSSStyleProperty("stroke-width").should.be.equal("4px");
});
