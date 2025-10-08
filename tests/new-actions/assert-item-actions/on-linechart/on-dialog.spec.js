/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a Dialog, right-click on Line Chart point and assert respective item actions are shown.",
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
			.findPoint("IA_Copy_JobDuration,Line Chart,LS")
			.rightClick(0, 0);

		// Click on the item action
		findWidget("LineChart_1_2")
			.getItemActions()
			.getItemActionDetails(0)
			.click(0, 0);

		//Assert a Dialog is open
		getDialog().should.exist;

		// Right click on a Line Chart point on the Dialog
		findWidget("DP_LineChart")
			.findPoint("GLD,Image,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert item actions are available
		let itemActions = findWidget("DP_LineChart")
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
		// findWidget("DP_LineChart").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("DP_LineChart")
			.findPoint("GLD,Image,IA_Copy_JobDuration")
			.click(0, 0);

		// Right click on another Line Chart point on the Dialog
		findWidget("DP_LineChart")
			.findPoint("OL,Label,IA_Copy_JobStart")
			.rightClick(0, 0);

		// Assert item actions are not available
		findWidget("DP_LineChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember2")
			.should.be.equal("OL");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget2")
			.should.be.equal("Label");
		//Close Sidepanel
		findWidget("line_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

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

		/*
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

		// Right click on a Line Chart point of "Scrum Master's - Widget Info " Chart
		findWidget("LineChart_1_1")
			.findPoint("Bubble Chart,IA_Copy_JobStart")
			.rightClick(0, 0);

		// Click on the item action
		findWidget("LineChart_1_1")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		//Assert a Dialog is open
		getDialog().should.exist;

		// Right click on a Line Chart point on the Dialog
		findWidget("DP_LineChart")
			.findPoint("EN,Tree Map,IA_Copy_JobStart")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("DP_LineChart")
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
		// findWidget("DP_LineChart").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("DP_LineChart")
			.findPoint("EN,Tree Map,IA_Copy_JobStart")
			.click(0, 0);

		// Right click on another Line Chart point on the Dialog
		findWidget("DP_LineChart")
			.findPoint("JP,List,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("DP_LineChart")
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

		findWidget("DP_LineChart")
			.findPoint("JP,List,IA_Copy_JobDuration")
			.click(0, 0);

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember2")
			.should.be.equal("JP");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget2")
			.should.be.equal("List");
	}
);
