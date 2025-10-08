/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"On a page with classic page layout, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Custom Grid Page' page, a page with a Custom layout.
		loadPage("Main Project/Test Page/Custom Grid Page");

		// A correct custom layout is highlighted without doing anything else, when opening the page configurator
		openPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		getPageConfigurator().getWidgetAreas().should.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "Custom Layout MKG" });

		getPageConfigurator().selectAppSection();
		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "Custom Layout MKG" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "Custom Layout MKG" });
	}
);
