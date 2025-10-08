/*!
 * @AIMMS_FILE=models/StoreFocusInHeaderCells/StoreFocusInHeaderCells.aimms
 */

scenario("Check the store focus when clicking on header cells (as opposed to data cells)", () => {
	loadPage("Main Project/home");

	findWidget("Export Data")
		.getRowHeaderCell(0, 0)
		.click();

	findWidget("Store Focus Info")
		.getValue("SelectedIdentifier")
		.should.eql("Import");

	findWidget("Store Focus Info")
		.getValue("SelectedYear")
		.should.eql("2000");

	findWidget("Store Focus Info")
		.getValue("SelectedProduct")
		.should.eql("Flowers");

	findWidget("Export Data")
		.getColHeaderCell(1, 4)
		.click();

	findWidget("Store Focus Info")
		.getValue("SelectedCountryTo")
		.should.eql("Germany");

	findWidget("Store Focus Info")
		.getValue("SelectedCountryFrom")
		.should.eql("The Netherlands");
});
