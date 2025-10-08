/*!
 * @AIMMS_FILE=models/Bugs/GL799-AlwaysShow/FruitsModel.aimms
 */

scenario("Display identifier with domain condition and visibility Always Show", () => {
	loadPage("Main Project/home");

	findWidget("Fruits Info")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("0.00 kg");
});
