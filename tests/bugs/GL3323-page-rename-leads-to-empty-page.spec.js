/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("GL3323 - When renaming a page using the app manager, the page became empty.", () => {
	loadPage("Main Project/home");

	// Assert that widgets exist on the page by doing some dummy assertions.
	findWidget("Book Table")
		.getCell(4, 2)
		.getValue()
		.should.be.equal("Charlotte Brontë");

	// Rename the home page
	openAppManager().unfoldPageNodes(["Main Project/home"]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
		})
		.clickOnRename()
		.enterName("My New Home")
		.pressKeys([SPECIAL_KEYS.enter]);

	// And make sure that the previous widget is still there
	findWidget("Book Table")
		.getCell(4, 2)
		.getValue()
		.should.be.equal("Charlotte Brontë");

	// Repeat the same process, but now for a subpage
	loadPage("Main Project/Bugs/2383");

	// Assert that widgets exist on the page by doing some dummy assertions.
	findWidget("Testdata_1")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("157.55");

	// Rename the subpage
	openAppManager().unfoldPageNodes(["Main Project/home"]);
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Bugs/2383",
		})
		.clickOnRename()
		.enterName("A lovely number")
		.pressKeys([SPECIAL_KEYS.enter]);

	// And make sure that the previous widget is still there
	findWidget("Testdata_1")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("157.55");
});
