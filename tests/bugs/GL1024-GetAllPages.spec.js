/*!
 * @AIMMS_FILE=models/Bugs/GL1024-GetAllPages/GetAllPages.aimms
 */

scenario(
	"GL1024 - GetAllPages should automatically run after CRUD actions on pages/sidepanels.",
	() => {
		loadPage(
			"Main Project/home?_aimms_only_persistence.write=true"
		); /* Persistence needs to be true, as this test will add/rename/delete pages */

		/* Verify that the initial content of the AllPageIds set is as expected */
		findWidget("PagesTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("root");

		findWidget("PagesTable")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Main Project");

		findWidget("PagesTable")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("home");

		findWidget("PagesTable")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("SidePanel1");

		findWidget("PagesTable")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("2ndPage");

		/* Rename a page to see the effect on the PagesTable */
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/2ndPage",
			})
			.clickOnRename()
			.enterName("Second Page")
			.pressKeys([SPECIAL_KEYS.enter]);

		/* Check the effect */
		findWidget("PagesTable")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("Second Page");

		/* Also delete a page */
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Second Page",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		findWidget("PagesTable")
			.getNumRowsInGridViewport()
			.should.be.equal(4);
	}
);
