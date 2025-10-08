/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On the Dialog page, right-click on Bubble Chart elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Click on the button that opens Dialog
		findWidget("Open Dialog").click();

		//Assert a Dialog is open
		getDialog().should.exist;

		/*
		With no Item actions data.
		Right-click and assert no item actions are shown.
		*/

		// Click on a Bubble Chart - 0-sized bubble element
		findWidget("DP_BubbleChart")
			.findBubble("Scalar")
			.click();

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");

		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Scalar");
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

		// Click on the button that opens Dialog
		findWidget("Open Dialog").click();

		//Assert a Dialog is open
		getDialog().should.exist;

		// Right click on a Bubble Chart - clear (-ve valued) bubble element
		findWidget("DP_BubbleChart")
			.findBubble("Label")
			.rightClick();

		// Workaround until front-end fix a bug for linux only where the rightClick needs to be
		// clicked twice
		findWidget("DP_BubbleChart")
			.findBubble("Label")
			.rightClick();

		findWidget("DP_BubbleChart")
			.getItemActions()
			.getData().should.exist;

		findWidget("DP_BubbleChart")
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

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("BB_Size");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Label");
	}
);
