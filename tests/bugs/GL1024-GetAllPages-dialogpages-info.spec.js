/*!
 * @AIMMS_FILE=models/Bugs/GL1024-GetAllPages/GetAllPages.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"GL1024 - GetAllPages should automatically run after CRUD actions on dialog pages.",
	() => {
		loadPage(
			"Main Project/home?_aimms_only_persistence.write=true"
		); /* Persistence needs to be true, as this test will add/rename/delete Dialog pages */

		// Add a DialogPage at root level
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddDialogPage()
			.enterName("DialogPages")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Navigate to the just created Dialog page, and few more child Dialog pages
		getAppManager()
			.navigateToPage("Main Project/DialogPages")
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages",
			})
			.clickOnAddDialogPage()
			.enterName("Validation1")
			.pressKeys([SPECIAL_KEYS.enter]);
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages",
			})
			.clickOnAddDialogPage()
			.enterName("Validation2")
			.pressKeys([SPECIAL_KEYS.enter]);
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages",
			})
			.clickOnAddDialogPage()
			.enterName("Validation3")
			.pressKeys([SPECIAL_KEYS.enter]);
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages/Validation2",
			})
			.clickOnAddDialogPage()
			.enterName("Validation 2.1")
			.pressKeys([SPECIAL_KEYS.enter]);
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages/Validation2",
			})
			.clickOnAddDialogPage()
			.enterName("Validation 2.2")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Check the effect
		getAppManager().navigateToPage("Main Project/home");
		findWidget("PagesTable")
			.getNumRowsInGridViewport()
			.should.be.equal(11);

		// Delete few Dialog pages
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages/Validation2/Validation 2.1",
			})
			.clickOnDelete()
			.actionYes()
			.click();
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages/Validation1",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Check the effect
		findWidget("PagesTable")
			.getNumRowsInGridViewport()
			.should.be.equal(9);

		// Add another Dialog page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.clickOnAddDialogPage()
			.enterName("MKG")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Rename few Dialog pages
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages/Validation2/Validation 2.2",
			})
			.clickOnRename()
			.enterName("WF2 Home")
			.pressKeys([SPECIAL_KEYS.enter]);
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/DialogPages/Validation3",
			})
			.clickOnRename()
			.enterName("Supply WorkFlow Validation")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Check the effect
		findWidget("PagesTable")
			.getNumRowsInGridViewport()
			.should.be.equal(10);
		findWidget("PagesTable")
			.getCell(8, 0)
			.getValue()
			.should.be.equal("WF2 Home");
		findWidget("PagesTable")
			.getCell(7, 0)
			.getValue()
			.should.be.equal("Supply WorkFlow Validation");
	}
);
