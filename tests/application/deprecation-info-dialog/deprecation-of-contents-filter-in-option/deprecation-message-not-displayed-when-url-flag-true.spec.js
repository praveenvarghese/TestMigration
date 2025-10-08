/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario(
	"For a WebUI using Contents.Filter.In Options in Widget Options-Advance Tab, asserting Deprecation Info Dialog and its contents shown on launching WebUI.",
	() => {
		// start from Home page.
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=true");

		// Assert Deprecation Info Dialog is available on the page.
		getDialog().should.not.exist;
	}
);
