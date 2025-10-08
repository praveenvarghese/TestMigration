/*!
 * @AIMMS_FILE=models/WizardModel/WizardModel.aimms
 */

scenario("Ability to remove a wizard from the new App Manager", () => {
	loadPage("Main Project/SecondPage");

	getCurrentPageWizard().exists().should.be.true;

	getCurrentPageWizard().cancel();

	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SecondPage",
		})
		.clickOnRemoveWizard();

	findDialog()
		.findButton("Remove wizard")
		.click();

	getCurrentPageWizard().exists().should.be.false;
});
