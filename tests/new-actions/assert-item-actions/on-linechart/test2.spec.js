/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Pivot data on Line Chart. Right-click on Line Chart Elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Line Chart Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Scroll down to LineChart_1_2 Chart
		findWidget("LineChart_1_2")
			.getHeaderRow(0)
			.click();

		// Right click on a Line Chart point of "Team Members - Widgets Info" Chart
		findWidget("LineChart_1_2")
			.findPoint("IA_Copy_JobDuration,Image,MB")
			.rightClick(0, 0);

		// Assert respective item actions are available
		let itemActions = findWidget("LineChart_1_2")
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

		// Get the item actions context-menu off
		// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("LineChart_1_2")
			.findPoint("IA_Copy_JobDuration,Image,MB")
			.click(0, 0);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MB");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Image");
		findWidget("line_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Pivot the data on Line Chart
		findWidget("LineChart_1_2")
			.dragIndex("widget")
			.dropIn("stacked");
		findWidget("LineChart_1_2")
			.dragIndex("team")
			.dropIn("x-axis");
		findWidget("LineChart_1_2")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("overlays");

		// Close Option editor
		findWidget("LineChart_1_2").closeOptionDialog();

		// Right click on another Line Chart point
		findWidget("LineChart_1_2")
			.findPoint("MKG,Tree Map,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("LineChart_1_2")
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

		// Get the item actions context-menu off
		// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("LineChart_1_2")
			.findPoint("MKG,Tree Map,IA_Copy_JobDuration")
			.click(0, 0);

		//Unfold the Secondary page actions and click on action that loads updated Item actions data for Line Chart
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();

		// Right click on another Line Chart point
		findWidget("LineChart_1_2")
			.findPoint("PV,Map,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("LineChart_1_2")
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
		// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("LineChart_1_2")
			.findPoint("PV,Map,IA_Copy_JobDuration")
			.click(0, 0);

		// Right click on another Line Chart point
		findWidget("LineChart_1_2")
			.findPoint("KH,Line Chart,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("LineChart_1_2")
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
		// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("LineChart_1_2")
			.findPoint("KH,Line Chart,IA_Copy_JobDuration")
			.click(0, 0);

		// Right click on another Line Chart point
		findWidget("LineChart_1_2")
			.findPoint("LS,Pie Chart,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("LineChart_1_2")
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
		// findWidget("LineChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("LineChart_1_2")
			.findPoint("LS,Pie Chart,IA_Copy_JobDuration")
			.click(0, 0);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("LS");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Pie Chart");
		//Close Sidepanel
		findWidget("line_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		/* Yet to handle Click/ Right-Click on Chart-Line-Item

		//Unfold the Secondary page actions and click on action that clears Store Focus data
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();

		// Right click on the line connecting points
		findWidget("LineChart_1_2")
			.getLine("AM")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("LineChart_1_2")
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

		/*

		/* Commented out, as Store Focus is not set when we right-click on the chart-line-item
			// // Open Sidepanel tab and assert store-focus entries are updated
			// findWidget("line_chart_data")
			// 	.getSidepanels()
			// 	.openSidepanelTab("Chart Settings");
			// findWidget("Store Focus_1")
			// 	.getValue("SelectedIdentifier")
			// 	.should.be.equal("IA_Copy_JobDuration");
			// findWidget("Store Focus_1")
			// 	.getValue("SelectedTeamMember")
			// 	.should.be.equal("LS");
			// findWidget("Store Focus_1")
			// 	.getValue("SelectedWidget1")
			// 	.should.be.equal("Pie Chart");
			// //Close Sidepanel
			// findWidget("line_chart_data")
			// 	.getSidepanels()
			// 	.closeSidepanelTab();
		*/
	}
);
