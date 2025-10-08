/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Right-click on Line Chart points and assert respective item actions are shown.", () => {
	loadPage("Main Project/Item Actions/Charts/Line Chart Data");

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	// Close the Page Manager
	closeAppManager();

	/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

	// Right click on a Line Chart point
	findWidget("LineChart_1_1")
		.findPoint("Bubble Chart,IA_Copy_JobStart")
		.rightClick(1, 1);

	// Assert item actions are not available
	findWidget("LineChart_1_1")
		.getItemActions()
		.getData().should.not.exist;

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("line_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_Copy_JobStart");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Bubble Chart");

	// Right click on another Line Chart point
	findWidget("LineChart_1_1")
		.findPoint("Label,IA_Copy_JobStart")
		.rightClick(1, 1);

	// Assert item actions are not available
	findWidget("LineChart_1_1")
		.getItemActions()
		.getData().should.not.exist;

	// Assert store-focus entries are updated
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Label");
	//Close Sidepanel
	findWidget("line_chart_data")
		.getSidepanels()
		.closeSidepanelTab();

	/*
		  Unfold the Secondary page actions.
		  Click on action that clears of StoreFocus entries
		 Click on action that loads Item actions data for Line Chart
	*/
	findWidget("line_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	findWidget("line_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();
	findWidget("line_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(4)
		.click();
	findWidget("line_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	/*
		With Item actions data now configured.
		Right-click and assert respective item actions are shown.
	*/

	// Right click on a Line Chart point
	findWidget("LineChart_1_1")
		.findPoint("Bubble Chart,IA_Copy_JobStart")
		.rightClick(1, 1);

	// Assert respective item actions are available
	let itemActions = findWidget("LineChart_1_1")
		.getItemActions()
		.getData();

	itemActions.should.exist;
	// Assert there are 3 item actions. Assert the details.
	itemActions.should.have.numberOfItems.equal(3);
	itemActions.should.beEqualTo([
		{
			title: "More Info on this Widget.",
			icon: "aimms-info",
			state: "active",
		},
		{
			title: "Hide this Widget Info.",
			icon: "aimms-toggle-off",
			state: "inactive",
		},
		{
			title: "Bugs Trend for this Widget.",
			icon: "aimms-stats-dots",
			state: "active",
		},
	]);

	// Get the item actions context-menu off
	// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
	findWidget("LineChart_1_1")
		.findPoint("Bubble Chart,IA_Copy_JobStart")
		.click(1, 1);

	// Right click on another Line Chart point
	findWidget("LineChart_1_1")
		.findPoint("Line Chart,IA_Copy_JobStart")
		.rightClick(1, 1);

	// Assert respective item actions are available
	itemActions = findWidget("LineChart_1_1")
		.getItemActions()
		.getData();

	itemActions.should.exist;
	// Assert there are 3 item actions. Assert the details.
	itemActions.should.have.numberOfItems.equal(3);
	itemActions.should.beEqualTo([
		{
			title: "More Info on this Widget.",
			icon: "aimms-info",
			state: "active",
		},
		{
			title: "Hide this Widget Info.",
			icon: "aimms-toggle-off",
			state: "inactive",
		},
		{
			title: "Bugs Trend for this Widget.",
			icon: "aimms-stats-dots",
			state: "active",
		},
	]);

	// Get the item actions context-menu off
	// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
	findWidget("LineChart_1_1")
		.findPoint("Line Chart,IA_Copy_JobStart")
		.click(1, 1);

	// Right click on another Line Chart point
	findWidget("LineChart_1_1")
		.findPoint("Tree Map,IA_Copy_JobStart")
		.rightClick(1, 1);

	// Assert respective item actions are available
	itemActions = findWidget("LineChart_1_1")
		.getItemActions()
		.getData();

	itemActions.should.exist;
	// Assert there are 3 item actions. Assert the details.
	itemActions.should.have.numberOfItems.equal(3);
	itemActions.should.beEqualTo([
		{
			title: "More Info on this Widget.",
			icon: "aimms-info",
			state: "active",
		},
		{
			title: "Hide this Widget Info.",
			icon: "aimms-toggle-off",
			state: "inactive",
		},
		{
			title: "Bugs Trend for this Widget.",
			icon: "aimms-stats-dots",
			state: "active",
		},
	]);

	// Get the item actions context-menu off
	// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
	findWidget("LineChart_1_1")
		.findPoint("Tree Map,IA_Copy_JobStart")
		.click(1, 1);

	// Right click on another Line Chart point
	findWidget("LineChart_1_1")
		.findPoint("Bar Chart,IA_Copy_JobStart")
		.rightClick(1, 1);

	// Assert respective item actions are available
	itemActions = findWidget("LineChart_1_1")
		.getItemActions()
		.getData();

	itemActions.should.exist;
	// Assert there are 3 item actions. Assert the details.
	itemActions.should.have.numberOfItems.equal(3);
	itemActions.should.beEqualTo([
		{
			title: "More Info on this Widget.",
			icon: "aimms-info",
			state: "active",
		},
		{
			title: "Hide this Widget Info.",
			icon: "aimms-toggle-off",
			state: "inactive",
		},
		{
			title: "Bugs Trend for this Widget.",
			icon: "aimms-stats-dots",
			state: "active",
		},
	]);

	findWidget("LineChart_1_1")
		.findPoint("Bar Chart,IA_Copy_JobStart")
		.click(1, 1);

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("line_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_Copy_JobStart");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Bar Chart");
});
