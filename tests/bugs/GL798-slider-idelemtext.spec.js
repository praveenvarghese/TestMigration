/*!
 * @AIMMS_FILE=models/Bugs/GL798-SliderIdElemText/idelemtext.aimms
 */

scenario("Check slider identifier name gets translated by IdentifierElementText", () => {
	loadPage("Main Project/home");

	findWidget("TestSlider")
		.getIdentifier()
		.should.be.equal("test_name");
});
