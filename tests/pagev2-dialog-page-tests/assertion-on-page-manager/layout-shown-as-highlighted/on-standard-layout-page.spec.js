/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"On a page with Standard page layout, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
		loadPage("Main Project/StandardDialogPageWithWidgets");

		findWidget("standarddialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator().getWidgetAreas().should.exist;
		openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 7" });

		// Open Custom layouts section. And assert no layout is highlighted
		openPageConfigurator().selectCustomLayoutsSection();
		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "" });

		getPageConfigurator().selectAppSection();
		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 7" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 7" });
	}
);
