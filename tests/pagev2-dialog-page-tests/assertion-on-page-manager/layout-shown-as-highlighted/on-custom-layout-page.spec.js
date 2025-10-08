/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"On a page with custom page layout, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Custom Grid Page' page, a page with a Custom layout.
		loadPage("Main Project/CustomDialogPageWithWidgets");

		findWidget("customdialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Large");

		// Assert the custom highlight is visible as the selected layout
		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		openPageConfigurator().getWidgetAreas().should.exist;
		openPageConfigurator()
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
