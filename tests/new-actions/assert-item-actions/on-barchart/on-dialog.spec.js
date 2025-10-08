/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a Dialog, right-click on Bar Chart elements and assert respective item actions are shown.",
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
			.findBar("IA_JobDuration,Bar Chart,LS")
			.rightClick(0, 0);

		// Click on the item action
		findWidget("BarChart_1_2")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		//Assert a Dialog is open
		getDialog().should.exist;

		// Right click on a Bar element on the Dialog
		findWidget("DP_BarChart")
			.findBar("EN,Line Chart,IA_JobDuration")
			.rightClick(0, 0);

		// Assert item actions are available
		let itemActions = findWidget("DP_BarChart")
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
		findWidget("DP_BarChart")
			.findBar("EN,Line Chart,IA_JobDuration")
			.click(0, 0);

		// Right click on another Bar element on the Dialog
		findWidget("DP_BarChart")
			.findBar("GLD,List,IA_JobStart")
			.rightClick(0, 0);

		// Assert item actions are not available
		findWidget("DP_BarChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember2")
			.should.be.equal("GLD");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget2")
			.should.be.equal("List");
		//Close Sidepanel
		findWidget("bar_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

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

		/*
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

		// Right click on a Bar element of "Scrum Master's - Widget Info " Chart
		findWidget("BarChart_1_1")
			.findBar("Bubble Chart,IA_JobStart")
			.rightClick();

		// Click on the item action
		findWidget("BarChart_1_1")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		//Assert a Dialog is open
		getDialog().should.exist;

		// Right click on a Bar element on the Dialog
		findWidget("DP_BarChart")
			.findBar("PV,Text,IA_JobStart")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("DP_BarChart")
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
		findWidget("DP_BarChart")
			.findBar("PV,Text,IA_JobStart")
			.click(0, 0);

		// Right click on another Bar element on the Dialog
		findWidget("DP_BarChart")
			.findBar("LS,Text,IA_JobDuration")
			.rightClick(5, 10);

		// Assert respective item actions are available
		itemActions = findWidget("DP_BarChart")
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
		findWidget("DP_BarChart")
			.findBar("LS,Text,IA_JobDuration")
			.click(5, 10);

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember2")
			.should.be.equal("LS");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget2")
			.should.be.equal("Text");
	}
);
