/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("5014 - Dialog Button Text wrap ", () => {
	loadPage("Main Project/DialogWithWrapTextButton");

	findWidget("Show Dialog").click();

	waitForBackgroundActionToComplete();

	getDialog().should.exist;

	findDialog()
		.getButtonSetStyleProperty("flexWrap") //flex-Wrap
		.should.be.equal("wrap");

	findDialog().findButton("Cancel");
});
