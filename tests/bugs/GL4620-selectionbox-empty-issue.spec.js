/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 * @WEBUI_MODE=end_user
 */

scenario("GL4620 - Selection box empty issue in pro mode when UI editable is zero", () => {
	loadPage("Main Project/home");

	findWidget("CountrySelector").select("NED");

	findWidget("CountrySelector")
		.getValue()
		.should.be.equal("NED");
});
