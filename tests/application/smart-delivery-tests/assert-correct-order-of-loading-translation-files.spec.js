/*!
 * @AIMMS_FILE=models/SmarterDelivery/SmarterDelivery.aimms
 */

scenario("Assert correct order of loading JS files when having an accent in the name", () => {
	loadPage("Main Project/home");
	findWidget("home");

	findWidget("b1")
		.getRowHeaderCell(0, 0)
		.getText()
		.should.be.equal("Translation *with* accent\u00D3");
});
