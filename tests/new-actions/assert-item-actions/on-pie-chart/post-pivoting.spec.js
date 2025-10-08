/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Right-click on Pie Chart elements and assert respective item actions are shown.", () => {
	loadPage("Main Project/Item Actions/Charts/Pie Chart Data");

	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	// Close the Page Manager
	closeAppManager();

	// Pivot the data on Bubble Chart
	findWidget("PieChart_1_1")
		.dragIndex("team")
		.dropIn("Totals");
	findWidget("PieChart_1_1")
		.dragIndex("widget")
		.dropIn("Wedges");

	// Close Option editor
	findWidget("PieChart_1_1").closeOptionDialog();

	/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

	// Right click on a Pie Chart - solid Pie element
	findWidget("PieChart_1_1")
		.findWedge("IA_JobStart,Line Chart")
		.rightClick();

	// Assert item actions are not available
	findWidget("PieChart_1_1")
		.getItemActions()
		.getData().should.not.exist;

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("pie_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_JobStart");
	findWidget("Store Focus_1")
		.getValue("SelectedTeamMember")
		.should.be.equal("");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Line Chart");
	findWidget("pie_chart_data")
		.getSidepanels()
		.closeSidepanelTab();

	// Right click on a Pie Chart - clear (-ve valued) Pie element
	findWidget("PieChart_1_1")
		.findWedge("IA_JobDuration,Pie Chart")
		.rightClick();

	// Assert respective item actions are available
	let itemActions = findWidget("PieChart_1_1")
		.getItemActions()
		.getData();

	itemActions.should.exist;
	// Assert there is 1 item action. Assert the details.
	itemActions.should.have.numberOfItems.equal(1);
	itemActions.should.beEqualTo([
		{
			title: "Show Domain Knowledge rating for this combo.",
			icon: "aimms-rulers",
			state: "active",
		},
	]);

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("pie_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_JobDuration");
	findWidget("Store Focus_1")
		.getValue("SelectedTeamMember")
		.should.be.equal("");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Pie Chart");
	findWidget("pie_chart_data")
		.getSidepanels()
		.closeSidepanelTab();

	// Unfold the Secondary page actions and click on action that clears store focus data
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	// // Right click on a Pie Chart - solid Pie element
	// findWidget("PieChart_1_1")
	// 	.findWedge("IA_JobStart")
	// 	.rightClick();

	// // Assert item actions are not available
	// findWidget("PieChart_1_1")
	// 	.getItemActions()
	// 	.getData().should.not.exist;

	// // Right click on a Pie Chart - clear (-ve valued) Pie element
	// findWidget("PieChart_1_1")
	// 	.findWedge("(IA_JobDuration)")
	// 	.rightClick();

	// // Assert respective item actions are available
	// itemActions = findWidget("PieChart_1_1")
	// 	.getItemActions()
	// 	.getData();

	// itemActions.should.exist;
	// // Assert there is 1 item action. Assert the details.
	// itemActions.should.have.numberOfItems.equal(1);
	// itemActions.should.beEqualTo([
	// 	{
	// 		title: "Show Domain Knowledge rating for this combo.",
	// 		icon: "aimms-rulers",
	// 		state: "active",
	// 	},
	// ]);

	// // Open Sidepanel tab and assert store-focus entries are updated
	// findWidget("pie_chart_data")
	// 	.getSidepanels()
	// 	.openSidepanelTab("Chart Settings");
	// findWidget("Store Focus_1")
	// 	.getValue("SelectedIdentifier")
	// 	.should.be.equal("IA_JobDuration");
	// findWidget("Store Focus_1")
	// 	.getValue("SelectedTeamMember")
	// 	.should.be.equal("");
	// findWidget("Store Focus_1")
	// 	.getValue("SelectedWidget")
	// 	.should.be.equal("");
	// findWidget("pie_chart_data")
	// 	.getSidepanels()
	// 	.closeSidepanelTab();

	/*
		Unfold the Secondary page actions
		click on action that clears of store focus data
		click on action that updates item actions data
	*/
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.getPageActionV2Details(4)
		.click();
	findWidget("pie_chart_data")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	/*
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a Pie Chart - solid Pie element
	findWidget("PieChart_1_1")
		.findWedge("IA_JobStart,Label")
		.rightClick();

	// Assert respective item actions are available
	itemActions = findWidget("PieChart_1_1")
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
	// findWidget("PieChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
	findWidget("PieChart_1_1")
		.findWedge("IA_JobStart,Label")
		.click();

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("pie_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_JobStart");
	findWidget("Store Focus_1")
		.getValue("SelectedTeamMember")
		.should.be.equal("");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Label");
	findWidget("pie_chart_data")
		.getSidepanels()
		.closeSidepanelTab();

	// Right click on a Pie Chart - clear (-ve valued) Pie element
	findWidget("PieChart_1_1")
		.findWedge("IA_JobDuration,Image")
		.rightClick();

	// Assert respective item actions are available
	itemActions = findWidget("PieChart_1_1")
		.getItemActions()
		.getData();

	itemActions.should.exist;
	// Assert there are 4 item actions. Assert the details.
	itemActions.should.have.numberOfItems.equal(4);
	itemActions.should.beEqualTo([
		{
			title: "Show Domain Knowledge rating for this combo.",
			icon: "aimms-rulers",
			state: "active",
		},
		{
			title: "Hide this Widget Info.",
			icon: "aimms-toggle-off",
			state: "inactive",
		},
		{
			title: "Item Action $ * (@)",
			icon: "entypo-infinity",
			state: "active",
		},
		{
			title: `<>? ,./ :" \\;' {} [] -= _+ ~!@#$%^&*()`,
			icon: "aimms-stats-dots",
			state: "active",
		},
	]);

	// Get the item actions context-menu off
	// findWidget("PieChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
	findWidget("PieChart_1_1")
		.findWedge("IA_JobDuration,Image")
		.click();

	// Open Sidepanel tab and assert store-focus entries are updated
	findWidget("pie_chart_data")
		.getSidepanels()
		.openSidepanelTab("Chart Settings");
	findWidget("Store Focus_1")
		.getValue("SelectedIdentifier")
		.should.be.equal("IA_JobDuration");
	findWidget("Store Focus_1")
		.getValue("SelectedTeamMember")
		.should.be.equal("");
	findWidget("Store Focus_1")
		.getValue("SelectedWidget")
		.should.be.equal("Image");
	findWidget("pie_chart_data")
		.getSidepanels()
		.closeSidepanelTab();

	// // Unfold the Secondary page actions and click on action that clears of store focus entries
	// findWidget("pie_chart_data")
	// 	.getSecondaryPageActions()
	// 	.clickHamburgerButton();
	// findWidget("pie_chart_data")
	// 	.getSecondaryPageActions()
	// 	.getPageActionV2Details(0)
	// 	.click();
	// findWidget("pie_chart_data")
	// 	.getSecondaryPageActions()
	// 	.clickHamburgerButton();

	// // Right click on a Pie Chart - solid Pie element
	// findWidget("PieChart_1_1")
	// 	.findWedge("(IA_JobStart)")
	// 	.rightClick();

	// // Assert respective item actions are available
	// itemActions = findWidget("PieChart_1_1")
	// 	.getItemActions()
	// 	.getData();

	// itemActions.should.exist;
	// // Assert there are 3 item actions. Assert the details.
	// itemActions.should.have.numberOfItems.equal(3);
	// itemActions.should.beEqualTo([
	// 	{
	// 		title: "More Info on this Widget.",
	// 		icon: "aimms-info",
	// 		state: "active",
	// 	},
	// 	{
	// 		title: "Hide this Widget Info.",
	// 		icon: "aimms-toggle-off",
	// 		state: "inactive",
	// 	},
	// 	{
	// 		title: "Bugs Trend for this Widget.",
	// 		icon: "aimms-stats-dots",
	// 		state: "active",
	// 	},
	// ]);

	// // Right click on a Pie Chart - clear (-ve valued) Pie element
	// findWidget("PieChart_1_1")
	// 	.findWedge("(IA_JobDuration)")
	// 	.rightClick();

	// // Assert respective item actions are available
	// itemActions = findWidget("PieChart_1_1")
	// 	.getItemActions()
	// 	.getData();

	// itemActions.should.exist;
	// // Assert there are 4 item actions. Assert the details.
	// itemActions.should.have.numberOfItems.equal(4);
	// itemActions.should.beEqualTo([
	// 	{
	// 		title: "Show Domain Knowledge rating for this combo.",
	// 		icon: "aimms-rulers",
	// 		state: "active",
	// 	},
	// 	{
	// 		title: "Hide this Widget Info.",
	// 		icon: "aimms-toggle-off",
	// 		state: "inactive",
	// 	},
	// 	{
	// 		title: "Item Action $ * (@)",
	// 		icon: "entypo-infinity",
	// 		state: "active",
	// 	},
	// 	{
	// 		title: `<>? ,./ :" \\;' {} [] -= _+ ~!@#$%^&*()`,
	// 		icon: "aimms-stats-dots",
	// 		state: "active",
	// 	},
	// ]);

	// // Open Sidepanel tab and assert store-focus entries are updated
	// findWidget("pie_chart_data")
	// 	.getSidepanels()
	// 	.openSidepanelTab("Chart Settings");
	// findWidget("Store Focus_1")
	// 	.getValue("SelectedIdentifier")
	// 	.should.be.equal("IA_JobDuration");
	// findWidget("Store Focus_1")
	// 	.getValue("SelectedTeamMember")
	// 	.should.be.equal("");
	// findWidget("Store Focus_1")
	// 	.getValue("SelectedWidget")
	// 	.should.be.equal("");
});
