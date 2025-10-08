/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On the Sidepanel, right-click on Pie Chart elements and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Open Sidepanel tab with Pie Chart
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Pie Chart");

		/*
		With no Item actions data.
		Right-click and assert no item actions are shown.
		*/

		// Right click on a Pie Chart - solid Pie element, available on SidePanel
		findWidget("SP_PieChart")
			.findWedge("IA_JobStart,Bubble Chart")
			.rightClick();

		// Assert item actions are not available
		findWidget("SP_PieChart")
			.getItemActions()
			.getData().should.not.exist;

		// Right click on a Pie Chart - clear (-ve valued) Pie element, available on SidePanel
		findWidget("SP_PieChart")
			.findWedge("IA_JobDuration,Image")
			.rightClick();
		// Assert there is 1 item action. Assert the details.

		findWidget("SP_PieChart")
			.getItemActions()
			.getData()
			.should.beEqualTo([
				{
					title: "Show Domain Knowledge rating for this combo.",
					icon: "aimms-rulers",
					state: "active",
				},
			]);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("Image");
		findWidget("item_actions")
			.getSidepanels()
			.closeSidepanelTab();

		/*
			Unfold the Secondary page actions
			Click on action that clears off Store Focus data
			Click on action that updates Item actions data
		*/
		findWidget("item_actions")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		/*
		With Item actions data now updated.
		Right-click and assert respective item actions are shown.
		*/

		// Open Sidepanel tab with Pie Chart
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Pie Chart");

		// Right click on a Pie Chart - 0-sized Pie element, available on SidePanel
		findWidget("SP_PieChart")
			.findWedge("IA_JobDuration,Pie Chart")
			.rightClick();

		// Assert respective item actions are available
		findWidget("SP_PieChart")
			.getItemActions()
			.getData()
			.should.beEqualTo([
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
	}
);
