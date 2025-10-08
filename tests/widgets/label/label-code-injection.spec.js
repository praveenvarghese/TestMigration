/*!
 * @AIMMS_FILE=models/Label/Label.aimms
 */

scenario("Assert handling code injection in label widget", () => {
	loadPage("Main Project/home");

	findWidget("TestLabel")
		.getLabelText()
		.should.eql("Hi");
});
