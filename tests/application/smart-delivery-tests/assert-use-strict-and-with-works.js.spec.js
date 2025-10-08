/*!
 * @AIMMS_FILE=models/SmarterDelivery/SmarterDelivery.aimms
 */

scenario("Assert try/catch added to allow 'use strict' to work with 'with'", () => {
	loadPage("Main Project/home");
	findWidget("home");
	getPageMenu()
		.getName()
		.should.be.equal("menu - with");
});
