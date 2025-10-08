/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Having page layout being changed from Standard Layout to a Custom Layout, assert SidePanel tabs and the widgets inside them.",
	() => {
		// Navigate to Test page, a page with Standard layout
		loadPage("Main Project/Test Page");

		// Change the page layout to 'Custom Layout MKG'.
		openPageConfigurator().selectLayout("Custom Layout MKG", "true");

		// Verify the sidepanel tabs continue to be available
		findWidget("test_page")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql(["Side Panels", "KPIs", "Filters", "Help", "Store Focus", "MKG"]);

		// Open "KPIs" sidepanel and verify all the expected widgets are visible
		findWidget("test_page")
			.getSidepanels()
			.openSidepanelTab("KPIs");
		findWidget("kpis_1")
			.getVisibleWidgets()
			.should.eql(["Author", "SelectedBook"]);

		// Open "SidePanels" sidepanel and verify all the expected widgets are visible
		findWidget("test_page")
			.getSidepanels()
			.openSidepanelTab("Side Panels");
		findWidget("sidepanels_1")
			.getVisibleWidgets()
			.should.eql(["SidePanels"]);

		// Navigate to another page and come back
		getPageMenu().navigateToPage("Main Project/Test Page/Custom Grid Page");
		getPageMenu().navigateToPage("Main Project/Test Page");

		// Verify the sidepanel tabs continue to be available
		findWidget("test_page")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql(["Side Panels", "KPIs", "Filters", "Help", "Store Focus", "MKG"]);

		// Open "KPIs" sidepanel and verify all the expected widgets are visible
		findWidget("test_page")
			.getSidepanels()
			.openSidepanelTab("KPIs");
		findWidget("kpis_1")
			.getVisibleWidgets()
			.should.eql(["Author", "SelectedBook"]);

		// Open "SidePanels" sidepanel and verify all the expected widgets are visible
		findWidget("test_page")
			.getSidepanels()
			.openSidepanelTab("Side Panels");
		findWidget("sidepanels_1")
			.getVisibleWidgets()
			.should.eql(["SidePanels"]);
	}
);
