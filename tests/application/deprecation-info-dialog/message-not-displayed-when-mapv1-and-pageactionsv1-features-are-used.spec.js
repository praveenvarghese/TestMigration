/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a WebUI using Map V1 and Page Actions V1 features, asserting that Deprecation dialog not shown on launching WebUI.",
	() => {
		// We start from Home page.
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=true");

		// Assert Deprecation Info Dialog is not available on the page.
		getDialog().should.not.exist;
	}
);
