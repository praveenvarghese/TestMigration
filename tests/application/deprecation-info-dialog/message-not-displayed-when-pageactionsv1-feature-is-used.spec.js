/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"For a WebUI using Page Actions V1 feature, asserting that Deprecation dialog not shown on launching WebUI",
	() => {
		// We start from Home page.
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=false");
		// Assert Deprecation Info Dialog is not available on the page.
		getDialog().should.not.exist;
	}
);
