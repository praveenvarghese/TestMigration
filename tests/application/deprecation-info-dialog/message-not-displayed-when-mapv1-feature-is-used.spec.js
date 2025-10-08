/*!
 * @AIMMS_FILE=models/MapV2Model/MapV2Model.aimms
 */

scenario(
	"For a WebUI using Map V1 feature, asserting that Deprecation dialog not shown on launching WebUI.",
	() => {
		// We start from Home page.
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=false");
		getDialog().should.not.exist;
	}
);
