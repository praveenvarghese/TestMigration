/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"On a page with custom page layout, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Custom Grid Page' page, a page with a Custom layout.
		loadPage("Main Project/KPIs/Energy Score");

		// Open Custom layouts section. And assert respective layout is immediately highlighted without having to select the 'Custom' tab
		openPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		getPageConfigurator().getWidgetAreas().should.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "CustomLayout1" });

		getPageConfigurator().selectAppSection();
		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "CustomLayout1" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "CustomLayout1" });
	}
);
