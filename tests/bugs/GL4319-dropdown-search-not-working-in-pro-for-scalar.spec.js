/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Search for the element parameter is not working for scalar in pro mode", () => {
	loadPage("Main Project/home");

	findWidget("TheSelectedCountry")
		.getValue()
		.should.be.equal("");

	findWidget("TheSelectedCountry").setValue("NOR");

	findWidget("TheSelectedCountry")
		.getValue()
		.should.be.equal("NOR");
});
