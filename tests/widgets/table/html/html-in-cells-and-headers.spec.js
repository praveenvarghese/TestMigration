/*!
 * @AIMMS_FILE=models/HTMLInHeaders/HTMLInHeaders.aimms
 */

scenario("Verify that HTML is displayed in the cells, the column and the row headers", () => {
	loadPage("Main Project/home?table-v2=true");

	// A green bar in a cell
	findWidget("AirlineCountryData")
		.pickColor(490, 448)
		.should.beSameColorAs([57, 130, 61]);

	// The blue/green of the Aer Lingus logo in the column header
	findWidget("AirlineCountryData")
		.pickColor(643, 51)
		.should.beSameColorAs([0, 99, 114]);

	// The orange of the Irish flag in the row header
	findWidget("AirlineCountryData")
		.pickColor(73, 340)
		.should.beSameColorAs([248, 152, 40]);
});
