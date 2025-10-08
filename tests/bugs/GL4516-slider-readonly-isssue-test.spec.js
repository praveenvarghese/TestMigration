/*!
 * @AIMMS_FILE=models/Bugs/GL4516-ReadOnlySlider/ReadOnlySlider.aimms
 */

scenario("Check for readonly identifier in slider the slider button is disabled", () => {
	loadPage("Main Project/home");

	findWidget("r")
		.getValue()
		.should.be.equal("9");

	findWidget("r").isSliderDisabled().should.be.true;

	findWidget("q").isSliderDisabled().should.be.false;

	findWidget("q").moveSlider(SPECIAL_KEYS.arrow_right);

	findWidget("r").isSliderDisabled().should.be.true;

	findWidget("r")
		.getValue()
		.should.be.equal("12");

	findWidget("r").isSliderDisabled().should.be.true;
});
