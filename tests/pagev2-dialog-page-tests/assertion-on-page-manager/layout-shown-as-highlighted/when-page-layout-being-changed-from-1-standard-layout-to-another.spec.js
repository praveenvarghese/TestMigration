/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Having page layout being changed from 1 Standard Layout to another, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
		loadPage("Main Project/StandardDialogPageWithWidgets");

		// Change the layout of the page.
		openPageConfigurator().selectLayout("Layout 6");

		findWidget("standarddialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		// On Standard layouts section, assert respective layout is highlighted
		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator().getWidgetAreas().should.exist;
		openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 6" });

		// Open Custom layouts section. And assert no layout is highlighted
		openPageConfigurator().selectCustomLayoutsSection();
		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator()
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
