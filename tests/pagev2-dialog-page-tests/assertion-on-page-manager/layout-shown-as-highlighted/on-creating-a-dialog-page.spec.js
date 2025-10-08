/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Create few new Grid pages, assert page layout highlighted on Page configurator.", () => {
	// Navigate to Home page, a page with classic layout.
	loadPage("Main Project/home");

	//Create a PageV2 page from Main Project
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddDialogPage()
		.enterName("New Dialog PageV2")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Navigate to the page created
	getAppManager().navigateToPage("Main Project/New Dialog PageV2");
	closeAppManager();

	findWidget("new_dialog_pagev2")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	// Open Standard layouts section. And assert respective layout is highlighted
	openPageConfigurator().getLayoutPreviews().should.exist;
	openPageConfigurator().getWidgetAreas().should.exist;
	openPageConfigurator().getClassicLayoutWidgetArea().should.not.exist;
	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	findWidget("new_dialog_pagev2")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	// Open Custom layouts section. And assert no layout is highlighted
	openPageConfigurator().selectCustomLayoutsSection();
	openPageConfigurator().getLayoutPreviews().should.exist;
	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Custom", Layout: "" });

	//Create another child PageV2 page
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/New Dialog PageV2",
		})
		.clickOnAddDialogPage()
		.enterName("Child Dialog PageV2")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Navigate to the page created
	getAppManager().navigateToPage("Main Project/New Dialog PageV2/Child Dialog PageV2");
	closeAppManager();

	findWidget("child_dialog_pagev2")
		.getSelectedDialogPageSize()
		.should.eql("Small");

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
