/*!
 * @AIMMS_FILE=models/HTMLInHeaders/HTMLInHeaders.aimms
 */

scenario("Verify that HTML can be displayed for identifier names in the header", () => {
	loadPage("Main Project/home");

	// Upon startup, check for the Irish flag to appear at the right position in the header.
	findWidget("Country Data")
		.pickColor(281, 66)
		.should.beSameColorAs([248, 152, 40]);
});
