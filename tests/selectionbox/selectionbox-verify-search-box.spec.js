/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario("Verify the searchbox presence within the selectionbox", () => {
	loadPage("Main Project/home");

	// Upon startup, there are 6 elements displayed in the SelectionBox. This should then result in the searchbox being present.
	findWidget("CountrySelector").click();

	findWidget("CountrySelector").hasSearchBox().should.be.true;

	// Pass an ESC to close the dropdown again, preventing that the click on the button will not work because of it still being open.
	findWidget("CountrySelector").pressKeys([SPECIAL_KEYS.escape]);

	// Run a procedure to delete an element from the list of elements in the SelectionBox.
	findWidget("RemoveElement").click();

	// Verify that the searchbox is indeed not present anymore.
	findWidget("CountrySelector").hasSearchBox().should.be.false;

	// A later finding by Pratap, in huge selection lists: after a search, some 'item-...' entries would appear at the bottom of the displayed list
	loadPage("Main Project/5thPage");

	findWidget("HugeOne").click();

	findWidget("HugeOne").pressKeys(["111"]);

	findWidget("HugeOne")
		.getAllFullyVisibleOptions()
		.should.eql([
			"Entry-00111",
			"Entry-01110",
			"Entry-01111",
			"Entry-01112",
			"Entry-01113",
			"Entry-01114",
		]);

	findWidget("HugeOne").scrollPageDown();

	findWidget("HugeOne").activateSearchBox();

	findWidget("HugeOne").pressKeys([SPECIAL_KEYS.backspace, "2"]);

	findWidget("HugeOne")
		.getAllFullyVisibleOptions()
		.should.eql([
			"Entry-00112",
			"Entry-01112",
			"Entry-01120",
			"Entry-01121",
			"Entry-01122",
			"Entry-01123",
		]);
});
