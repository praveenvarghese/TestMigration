/*!
 * @AIMMS_FILE=models/Bugs/GL1320-MultiSelectSearchBoxDisappeared/MSP.aimms
 */

scenario("GL1320 - In some scenarios the search box of the MultiSelect widget disappeared.", () => {
	loadPage("Main Project/home");

	// Check the number of columns in the row header area
	findWidget("Mult").getSearchBox().should.exist;

	findWidget("Mult")
		.getSearchBox()
		.click()
		.keys("l");

	findWidget("Mult").getSearchBox().should.exist;
});
