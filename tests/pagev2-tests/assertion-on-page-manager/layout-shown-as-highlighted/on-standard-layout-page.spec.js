/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"On a page with Standard page layout, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
		loadPage("Main Project/Test Page");

		openPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator().getWidgetAreas().should.exist;
		getPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

		// Open Custom layouts section. And assert no layout is highlighted
		getPageConfigurator().selectCustomLayoutsSection();
		getPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "" });

		getPageConfigurator().selectAppSection();
		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });
	}
);
