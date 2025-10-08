/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario("Verify the searchbox presence within the selectionbox", () => {
	loadPage("Main Project/home");

	// Click the dropdown open in order to start typing text.
	findWidget("CountrySelector").click();

	// Pass a regular expression
	findWidget("CountrySelector").pressKeys(["r$"]);

	// Verify that the filtered results are as expected
	findWidget("CountrySelector")
		.getAllFullyVisibleOptions()
		.should.eql([]);

	// Close and reopen/reset the dropdown
	findWidget("CountrySelector").click();
	findWidget("CountrySelector").click();

	// Pass a regular expression
	findWidget("CountrySelector").pressKeys(["^g"]);

	// Verify that the filtered results are as expected
	findWidget("CountrySelector")
		.getAllFullyVisibleOptions()
		.should.eql([]);

	// Close and reopen/reset the dropdown
	findWidget("CountrySelector").click();
	findWidget("CountrySelector").click();

	// Pass a regular expression
	findWidget("CountrySelector").pressKeys([".e."]);

	// Verify that the filtered results are as expected
	findWidget("CountrySelector")
		.getAllFullyVisibleOptions()
		.should.eql([]);

	// Close and reopen/reset the dropdown
	findWidget("CountrySelector").click();
	findWidget("CountrySelector").click();

	// Pass a regular expression
	findWidget("CountrySelector").pressKeys(["g[aeio]b"]);

	// Verify that the filtered results are as expected
	findWidget("CountrySelector")
		.getAllFullyVisibleOptions()
		.should.eql([]);

	// Close and reopen/reset the dropdown
	findWidget("CountrySelector").click();
	findWidget("CountrySelector").click();

	// Pass a regular expression
	findWidget("CountrySelector").pressKeys(["er|or"]);

	// Verify that the filtered results are as expected
	findWidget("CountrySelector")
		.getAllFullyVisibleOptions()
		.should.eql([]);
});
