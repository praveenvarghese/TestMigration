/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a multi-contents Bar-Line chart on a SidePanel, assert Store-Focus behaviour on chart elements.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Close the Page Manager sidebar
		closeAppManager();

		// Clear off Store-Focus data
		findWidget("bar-line_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bar-line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bar-line_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Open Sidepanel tab with Bar-Line Charts
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar-Line Chart");
		// Click on a linechart element
		findWidget("SP_BLC")
			.findPoint(["HS", "IA_JobDuration"])
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("HS");

		// Open Sidepanel tab with Bar-Line Charts
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar-Line Chart");
		// Click on another linechart element
		findWidget("SP_BLC")
			.findPoint(["JP", "IA_JobDuration"])
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("JP");

		// Open Sidepanel tab with Bar-Line Charts
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar-Line Chart");
		// Click on a barchart element
		findWidget("SP_BLC")
			.findBar(["MT", "IA_Copy_JobStart"])
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MT");

		// Open Sidepanel tab with Bar-Line Charts
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar-Line Chart");
		// Click on another barchart element
		findWidget("SP_BLC")
			.findBar(["LS", "IA_JobStart"])
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("LS");

		// Open Sidepanel tab with Bar-Line Charts
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar-Line Chart");
		// Click on another barchart element
		findWidget("SP_BLC")
			.findBar(["AM", "IA_JobStart"])
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("AM");
	}
);
