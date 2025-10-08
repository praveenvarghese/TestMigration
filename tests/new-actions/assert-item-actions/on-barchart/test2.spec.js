/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Pivot data on Bar Chart. Right-click on Bar Chart Elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Scroll down to BarChart_1_2 Chart
		findWidget("BarChart_1_2")
			.getHeaderRow(0)
			.click();

		// Right click on a Bar element of "Team Members - Widgets Info" Chart
		findWidget("BarChart_1_2")
			.findBar("IA_JobDuration,Image,MB")
			.rightClick(0, 0);

		// Assert respective item actions are available
		let itemActions = findWidget("BarChart_1_2")
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
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MB");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Image");
		findWidget("bar_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Pivot the data on Bar Chart
		findWidget("BarChart_1_2")
			.dragIndex("widget")
			.dropIn("stacked");

		// Close Option editor
		findWidget("BarChart_1_2").closeOptionDialog();

		// Right click on another Bar element
		findWidget("BarChart_1_2")
			.findBar("IA_JobDuration,MR,List")
			.rightClick();

		// Assert respective item actions are available
		itemActions = findWidget("BarChart_1_2")
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

		//Unfold the Secondary page actions and click on action that loads updated Item actions data for Bar Chart
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();

		// Right click on another Bar element
		findWidget("BarChart_1_2")
			.findBar("IA_JobDuration,EN,Gantt Chart")
			.rightClick();

		// Assert respective item actions are available
		itemActions = findWidget("BarChart_1_2")
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

		// Right click on another Bar element
		findWidget("BarChart_1_2")
			.findBar("IA_JobDuration,MKG,Text")
			.rightClick(2, 2);

		// Assert respective item actions are available
		itemActions = findWidget("BarChart_1_2")
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

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MKG");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Text");
	}
);
