/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"Right-click on Bubble Chart elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

		// Right click on a Bubble Chart - solid bubble element
		findWidget("BubbleChart_1_1")
			.findBubble("MB, Map")
			.rightClick();

		// Assert item actions are not available
		findWidget("BubbleChart_1_1")
			.getItemActions()
			.getData().should.not.exist;

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MB");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Map");
		findWidget("bubble_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Unfold the Secondary page actions and click on action that clears of store focus entries
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Right click on a Bubble Chart - clear (-ve valued) bubble element
		findWidget("BubbleChart_1_1")
			.findBubble("KH, Pie Chart")
			.rightClick();

		// Assert item actions are not available
		findWidget("BubbleChart_1_1")
			.getItemActions()
			.getData().should.not.exist;

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("KH");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Pie Chart");
		findWidget("bubble_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Unfold the Secondary page actions and click on action that clears of store focus entries
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Right click on a Bubble Chart - 0-sized bubble element
		findWidget("BubbleChart_1_1")
			.findBubble("PK, Gantt Chart")
			.rightClick(0, 0);

		// Assert item actions are not available
		findWidget("BubbleChart_1_1")
			.getItemActions()
			.getData().should.not.exist;

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("PK");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Gantt Chart");
		findWidget("bubble_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Unfold the Secondary page actions and click on action that clears of store focus entries
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		/*
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

		// Right click on a Bubble Chart - solid bubble element
		findWidget("BubbleChart_1_1")
			.findBubble("MB, Map")
			.rightClick();

		// Assert respective item actions are available
		let itemActions = findWidget("BubbleChart_1_1")
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
		// findWidget("BubbleChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BubbleChart_1_1")
			.findBubble("MB, Map")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MB");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Map");
		findWidget("bubble_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Unfold the Secondary page actions and click on action that clears of store focus entries
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Right click on a Bubble Chart - clear (-ve valued) bubble element
		findWidget("BubbleChart_1_1")
			.findBubble("KH, Pie Chart")
			.rightClick();

		// Assert respective item actions are available
		itemActions = findWidget("BubbleChart_1_1")
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
		// findWidget("BubbleChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BubbleChart_1_1")
			.findBubble("KH, Pie Chart")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("KH");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Pie Chart");
		findWidget("bubble_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Unfold the Secondary page actions and click on action that clears of store focus entries
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bubble_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Right click on a Bubble Chart - 0-sized bubble element
		findWidget("BubbleChart_1_1")
			.findBubble("PK, Gantt Chart")
			.rightClick(0, 0);

		// Assert respective item actions are available
		itemActions = findWidget("BubbleChart_1_1")
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
		// findWidget("BubbleChart_1_1").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BubbleChart_1_1")
			.findBubble("PK, Gantt Chart")
			.click(0, 0);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("PK");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Gantt Chart");
	}
);
