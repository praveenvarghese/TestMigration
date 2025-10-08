/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 * @WEBUI_MODE=end_user
 */

scenario("GL5337 - Selection box search doesn't work when UI editable =1", () => {
	loadPage("Main Project/home");

	findWidget("CountrySelector").select("NOR");

	findWidget("CountrySelector")
		.getValue()
		.should.be.equal("NOR");
});
