/*!
 * @AIMMS_FILE=models/SmarterDelivery/SmarterDelivery.aimms
 */

scenario("Assert correct order of loading JS files when having an accent in the name", () => {
	loadPage("Main Project/home");
	findWidget("home");
	getAppName().should.be.equal("im re1 *with* accent\u00D3");
});
