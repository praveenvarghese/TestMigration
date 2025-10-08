/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Right-click on Bar Chart elements and assert respective item actions are shown.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	// Close the Page Manager
	closeAppManager();

	// Disable default browser context menu on the page
	findWidget("bar_chart_data").unBindBrowserContextmenu();

	/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

	// Right click on a Bar element
	findWidget("BarChart_1_1")
		.findBar("Bubble Chart,IA_JobStart")
		.rightClick();

	// Assert item actions are not available
	findWidget("BarChart_1_1")
		.getItemActions()
		.getData().should.not.exist;

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("bar_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_JobStart");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Bubble Chart");

	// Right click on another Bar element
	findWidget("BarChart_1_1")
		.findBar("Label,IA_JobStart")
		.rightClick();

	// Assert item actions are not available
	findWidget("BarChart_1_1")
		.getItemActions()
		.getData().should.not.exist;

	// Assert store-focus entries are updated
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Label");

	// Unfold the Secondary page actions and click on action that loads Item actions data for Bar Chart
	findWidget("bar_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	findWidget("bar_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(4)
		.click();

	/*
		With Item actions data now configured.
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a Bar element
	findWidget("BarChart_1_1")
		.findBar("Bubble Chart,IA_JobStart")
		.rightClick();

	// Assert respective item actions are available
	let itemActions = findWidget("BarChart_1_1")
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
	findWidget("BarChart_1_1")
		.findBar("Bubble Chart,IA_JobStart")
		.click();

	// Right click on another Bar element
	findWidget("BarChart_1_1")
		.findBar("Line Chart,IA_JobStart")
		.rightClick();

	// Assert respective item actions are available
	itemActions = findWidget("BarChart_1_1")
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

	findWidget("BarChart_1_1")
		.findBar("Line Chart,IA_JobStart")
		.click();
});
