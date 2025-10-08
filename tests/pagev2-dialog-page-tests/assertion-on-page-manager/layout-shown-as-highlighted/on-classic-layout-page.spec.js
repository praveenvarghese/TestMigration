/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"On a page with classic page layout, assert page layout highlighted on Page configurator.",
	() => {
		// Navigate to classicDialogPageWithWidgets page, a page with classic layout.
		loadPage("Main Project/classicDialogPageWithWidgets");

		findWidget("classicdialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Small");

		openPageConfigurator().getClassicLayoutWidgetArea().should.exist;
		getPageConfigurator()
			.getClassicLayoutWidgetAreaText()
			.should.be.equal(
				"Select a non-classic layout to arrange your widgets in areas.\n\nOr use the Widget Manager for the currently selected layout."
			);

		getPageConfigurator().getLayoutPreviews().should.exist;
		getPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout: classic" });

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
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout: classic" });

		closeAppManager();
		openPageConfigurator()
			.getSelectedLayoutInfo()
			.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout: classic" });
	}
);
