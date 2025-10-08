/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On the Sidepanel, right-click on Bubble Chart elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Open Sidepanel tab with Bubble Chart
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bubble Chart");

		/*
		With no Item actions data.
		Right-click and assert no item actions are shown.
		*/

		// Right click on a Bubble Chart - solid bubble element, available on SidePanel
		findWidget("SP_BubbleChart")
			.findBubble("MR")
			.rightClick(0, 0);

		// Assert item actions are not available
		findWidget("SP_BubbleChart")
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
			.should.be.equal("MR");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("");
		findWidget("bubble_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

		// Unfold the Secondary page actions and click on action that updates Item actions data
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
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

		// Open Sidepanel tab with Bubble Chart
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bubble Chart");

		//	Right click on a Bubble Chart - 0-sized bubble element, available on SidePanel
		findWidget("SP_BubbleChart")
			.findBubble("MR")
			.rightClick(0, 0);

		// Workaround until front-end fix a bug for linux only where the rightClick needs to be
		// clicked twice
		findWidget("SP_BubbleChart")
			.findBubble("MR")
			.rightClick();

		// Assert respective item actions are available

		findWidget("SP_BubbleChart")
			.getItemActions()
			.getData().should.exist;

		findWidget("SP_BubbleChart")
			.getItemActions()
			.getData()
			.should.beEqualTo([
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

		//Get the item actions context-menu off
		findWidget("SP_BubbleChart").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MR");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("");
	}
);
