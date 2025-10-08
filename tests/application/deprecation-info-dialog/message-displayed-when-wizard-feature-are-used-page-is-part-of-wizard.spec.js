/*!
 * @AIMMS_FILE=models/WizardModel/WizardModel.aimms
 */

scenario(
	"For a WebUI using Wizard features, asserting Deprecation Info Dialog and its contents shown on launching WebUI.",
	() => {
		// We start from Home page.
		loadPage("Main Project/SecondPage?_aimms_only_no_deprecation_dialog=false");

		// Assert Deprecation Info Dialog is available on the page.
		getDialog().should.exist;

		// Assert Deprecation Info Dialog - Title.
		findDialog()
			.getTitle()
			.should.equal(`Phasing out Wizard`);

		// Assert Deprecation Info Dialog - Message.
		findDialog()
			.getMessage()
			.should.equal(
				`You are using the Wizard. The Wizard is deprecated and will be removed in an upcoming release. Please adjust to the use of the Workflow Panel. Since AIMMS version 4.68, the Workflow Panel is available.`
			);

		// Assert the buttons available
		findDialog()
			.getButtons()
			.should.shallowDeepEqual(["More information", "OK"]);

		// Click on Deprecation Info Dialog - OK button.
		findDialog()
			.findButton("OK")
			.click();

		// Assert Deprecation Info Dialog is not available on the page.
		getDialog().should.not.exist;
	}
);
