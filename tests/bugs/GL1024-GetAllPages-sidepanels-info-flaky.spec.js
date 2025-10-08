/*!
 * @AIMMS_FILE=models/Bugs/GL1024-GetAllPages/GetAllPages.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("GL1024 - GetAllPages should automatically run after CRUD actions on sidepanels.", () => {
	loadPage(
		"Main Project/home?_aimms_only_persistence.write=true"
	); /* Persistence needs to be true, as this test will add/rename/delete SidePanels */

	/* Verify that the initial content of the AllPageIds set is as expected */
	findWidget("PagesTable")
		.getNumRowsInGridViewport()
		.should.be.equal(5);

	/* Create a SidePanel at root level */
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddSidepanelPage()
		.enterName("SidePanels")
		.pressKeys([SPECIAL_KEYS.enter]);

	/* Navigate to the just created SidePanel page */
	getAppManager().navigateToPage("Main Project/SidePanels");

	/* Create few more SidePanels at child levels */
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels",
		})
		.clickOnAddSidepanelPage()
		.enterName("KPIs")
		.pressKeys([SPECIAL_KEYS.enter]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels",
		})
		.clickOnAddSidepanelPage()
		.enterName("Filters")
		.pressKeys([SPECIAL_KEYS.enter]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels",
		})
		.clickOnAddSidepanelPage()
		.enterName("Help")
		.pressKeys([SPECIAL_KEYS.enter]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels/Help",
		})
		.clickOnAddSidepanelPage()
		.enterName("MKG")
		.pressKeys([SPECIAL_KEYS.enter]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels/Help",
		})
		.clickOnAddSidepanelPage()
		.enterName("E2E")
		.pressKeys([SPECIAL_KEYS.enter]);

	/* Check the effect */
	getAppManager().navigateToPage("Main Project/home");
	findWidget("PagesTable")
		.getNumRowsInGridViewport()
		.should.be.equal(11);

	/* Also delete few SidePanel page */
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels/Help/MKG",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels/Filters",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	/* Check the effect */
	findWidget("PagesTable")
		.getNumRowsInGridViewport()
		.should.be.equal(9);

	/* Rename few SidePanel pages */
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels/Help/E2E",
		})
		.clickOnRename()
		.enterName("Automation")
		.pressKeys([SPECIAL_KEYS.enter]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SidePanels/Help",
		})
		.clickOnRename()
		.enterName("Help Section")
		.pressKeys([SPECIAL_KEYS.enter]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
		})
		.clickOnAddPage()
		.enterName("MKG")
		.pressKeys([SPECIAL_KEYS.enter]);

	/* Check the effect */
	findWidget("PagesTable")
		.getNumRowsInGridViewport()
		.should.be.equal(10);
	findWidget("PagesTable")
		.getCell(9, 0)
		.getValue()
		.should.be.equal("Automation");
	findWidget("PagesTable")
		.getCell(7, 0)
		.getValue()
		.should.be.equal("Help Section");
});
