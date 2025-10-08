/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario("Verify whether the searchbox is being reset when reopening the selectionbox", () => {
	loadPage("Main Project/home");

	// Open the dropdown + searchbox
	findWidget("CountrySelector").click();

	// Do a search on an existing element
	findWidget("CountrySelector").pressKeys(["GIB"]);

	// Verify that this text is indeed present in the searchbox.
	findWidget("CountrySelector")
		.getSearchText()
		.should.equal("GIB");

	// Close the dropdown + searchbox
	findWidget("CountrySelector").click();

	// Do a 'dummy action' (click a button in this case) in order to move the focus away from the selectionbox.
	findWidget("RemoveElement").click();
	findWidget("AddElement").click();

	// Open the dropdown + searchbox again
	findWidget("CountrySelector").click();

	// Verify that the search box is now empty.
	findWidget("CountrySelector")
		.getSearchText()
		.should.equal("");
});
