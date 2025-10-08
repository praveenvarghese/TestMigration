/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On the Sidepanel, right-click on Bar Chart elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Open Sidepanel tab with Bar Charts
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar Chart");

		/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

		// Right click on a Bar element on the Sidepanel
		findWidget("SP_IA")
			.findBar("MKG,IA_JobStart,Tree Map")
			.rightClick(0, 0);

		// Assert item actions are not available
		findWidget("SP_IA")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// Right click on another Bar element on the Sidepanel
		findWidget("SP_IA")
			.findBar("MB,IA_JobDuration,Image")
			.rightClick(0, 0);

		// Assert respective item actions are available
		let itemActions = findWidget("SP_IA")
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
		findWidget("SP_IA")
			.findBar("MB,IA_JobDuration,Image")
			.click(0, 0);

		// Right click on another Bar element on the Sidepanel
		findWidget("SP_IA")
			.findBar("MKG,IA_JobDuration,Image")
			.rightClick(0, 0);

		// Assert respective item actions are available
		findWidget("SP_IA")
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
		findWidget("SP_IA")
			.findBar("MKG,IA_JobDuration,Image")
			.click(0, 0);

		// Open another Sidepanel tab and assert store-focus entries are updated
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember2")
			.should.be.equal("MKG");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget2")
			.should.be.equal("Image");

		//Unfold the Secondary page actions and click on action that loads updated Item actions data for Bar Chart
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		/*
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

		// Open the Sidepanel with Bar Chart
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar Chart");

		// Right click on a Bar element on the Sidepanel
		findWidget("SP_IA")
			.findBar("MKG,IA_JobStart,Scalar")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("SP_IA")
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
		findWidget("SP_IA")
			.findBar("MKG,IA_JobStart,Scalar")
			.click(0, 0);

		// Right click on another Bar element on the Sidepanel
		findWidget("SP_IA")
			.findBar("LS,IA_JobDuration,Bar Chart")
			.rightClick(0, 0);

		// Assert respective item actions are not available
		itemActions = findWidget("SP_IA")
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
		findWidget("SP_IA")
			.findBar("LS,IA_JobDuration,Bar Chart")
			.click(0, 0);

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
			.should.be.equal("Bar Chart");
	}
);
