/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Assert SidePanel tabs and the widgets inside them, while we navigate through pages having classic, Standard and Custom page layouts.",
	() => {
		// Navigate to Home page, a page with classic layout.
		loadPage("Main Project/home");

		// Verify the sidepanel tabs visible on Home page
		findWidget("home")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql(["Side Panels", "KPIs", "Filters", "Help", "Store Focus", "MKG"]);

		// Open "KPIs" sidepanel and verify all the expected widgets are visible
		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("KPIs");
		findWidget("kpis_1")
			.getVisibleWidgets()
			.should.eql(["Author", "SelectedBook"]);

		// Open "SidePanels" sidepanel and verify all the expected widgets are visible
		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("Side Panels");
		findWidget("sidepanels_1")
			.getVisibleWidgets()
			.should.eql(["SidePanels"]);

		// Navigate to Test page, a page with non-classic layout
		getPageMenu().navigateToPage("Main Project/Test Page");

		// Verify the sidepanel tabs visible on Home page
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

		// Navigate to "Test Page/Custom Grid Page", a page with custom layout
		getPageMenu().navigateToPage("Main Project/Test Page/Custom Grid Page");

		// Verify the sidepanel tabs visible on Home page
		findWidget("custom_grid_page")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql(["Side Panels", "KPIs", "Filters", "Help", "Store Focus", "MKG"]);

		// Open "KPIs" sidepanel and verify all the expected widgets are visible
		findWidget("custom_grid_page")
			.getSidepanels()
			.openSidepanelTab("KPIs");
		findWidget("kpis_1")
			.getVisibleWidgets()
			.should.eql(["Author", "SelectedBook"]);

		// Open "SidePanels" sidepanel and verify all the expected widgets are visible
		findWidget("custom_grid_page")
			.getSidepanels()
			.openSidepanelTab("Side Panels");
		findWidget("sidepanels_1")
			.getVisibleWidgets()
			.should.eql(["SidePanels"]);
	}
);
