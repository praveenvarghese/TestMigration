/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Create few new Grid pages, assert page layout highlighted on Page configurator.", () => {
	// Navigate to Home page, a page with classic layout.
	loadPage("Main Project/home");

	//Create a PageV2 page from main
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddSidepanelPage()
		.enterName("New Sidepanel PageV2");

	getAppManager().navigateToPage("Main Project/New Sidepanel PageV2");

	// Open Standard layouts section. And assert respective layout is highlighted
	openPageConfigurator().getLayoutPreviews().should.exist;
	openPageConfigurator().getWidgetAreas().should.exist;
	openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	// Open Custom layouts section. And assert no layout is highlighted
	openPageConfigurator().selectCustomLayoutsSection();
	openPageConfigurator().getLayoutPreviews().should.exist;
	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Custom", Layout: "" });

	//Create another child PageV2 page
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/New Sidepanel PageV2",
		})
		.clickOnAddSidepanelPage()
		.enterName("Child Sidepanel PageV2");

	getAppManager().navigateToPage("Main Project/New Sidepanel PageV2/Child Sidepanel PageV2");

	// While Custom layouts section is visible. And assert no layout is highlighted
	openPageConfigurator().getLayoutPreviews().should.exist;
	openPageConfigurator().selectCustomLayoutsSection();
	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Custom", Layout: "" });

	// Open Standard layouts section. And assert respective layout is highlighted
	openPageConfigurator().selectStandardLayoutsSection();
	openPageConfigurator().getLayoutPreviews().should.exist;
	openPageConfigurator().getWidgetAreas().should.exist;
	openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });
});
