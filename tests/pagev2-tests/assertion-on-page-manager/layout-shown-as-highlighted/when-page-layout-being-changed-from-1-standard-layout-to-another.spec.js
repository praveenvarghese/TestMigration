/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Having page layout being changed from 1 Standard Layout to another, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
		loadPage("Main Project/Test Page");

		// Change the layout of the page.
		openPageConfigurator().selectLayout("Layout 6");

		// On Standard layouts section, assert respective layout is highlighted
		getPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator().getWidgetAreas().should.exist;
		getPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 6" });

		// Open Custom layouts section. And assert no layout is highlighted
		getPageConfigurator().selectCustomLayoutsSection();
		getPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 6" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 6" });
	}
);
