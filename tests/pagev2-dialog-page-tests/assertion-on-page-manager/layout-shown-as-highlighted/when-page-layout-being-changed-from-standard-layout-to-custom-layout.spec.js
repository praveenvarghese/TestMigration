/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Having page layout being changed from 1 Standard Layout to another, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to 'StandardDialogPageWithWidgets' page, a page with 1 of our Standard layouts.
		loadPage("Main Project/StandardDialogPageWithWidgets");

		// Change the page layout to 'Custom Layout MKG'.
		openPageConfigurator().selectLayout("CustomLayout1", "true");

		findWidget("standarddialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		// On Custom layouts section,assert respective layout is highlighted
		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
		openPageConfigurator().getWidgetAreas().should.exist;
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Custom", Layout: "CustomLayout1" });

		// Open Standard layouts section. And assert no layout is highlighted
		openPageConfigurator().selectStandardLayoutsSection();
		openPageConfigurator().getLayoutPreviews().should.exist;
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "" });

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
