/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Assert Tooltip for identifier value", () => {
	loadPage("Main Project/home");

	findWidget("StoreFocus")
		.getScalarIdentifier("Bar_SelectedIdentifierSet")
		.getIdentifierTooltipText()
		.should.be.equal("Bar_SelectedIdentifierSet");
});
