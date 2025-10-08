/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_GridLayout/ModelFromScratch2.aimms
 */

scenario(
	"For an app where neither Page Actions V1 nor Map V1 features are used, asserting no Deprecation Info Dialog and its contents are shown on launching WebUI.",
	() => {
		// We start from Home page.
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=false");

		// Assert Deprecation Info Dialog is not available on the page.
		getDialog().should.not.exist;
	}
);
