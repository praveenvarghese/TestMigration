/*!
 * @AIMMS_FILE=models/ReverseLinkTest/ReverseLinkTest.aimms
 */

scenario("Check the reverse store focus in a table with one multi-dimensional identifier", () => {
	loadPage("Main Project/home");

	findWidget("Selection").setValue("SelectedCountry1", "Austria");
	findWidget("Selection").setValue("SelectedCountry2", "Luxemburg");
	findWidget("Selection").setValue("SelectedIdentifier", "Export");

	findWidget("Export Data")
		.getCell(2, 5)
		.isFocused()
		.should.equal(true);

	findWidget("Selection").setValue("SelectedCountry1", "France");
	findWidget("Selection").setValue("SelectedCountry2", "Germany");
	findWidget("Selection").setValue("SelectedIdentifier", "Export");

	findWidget("Export Data")
		.getCell(2, 5)
		.isFocused()
		.should.equal(false);

	findWidget("Export Data")
		.getCell(3, 1)
		.isFocused()
		.should.equal(true);
});
