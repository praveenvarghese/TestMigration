/*!
 * @AIMMS_FILE=models/PILTestModel3/PILTestModel3.aimms
 */

scenario(
	"Check that the expected error is displayed when specifying a structural lib page in the menu bar.",
	() => {
		loadPage("Main Project/home");

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Menu configuration validation:The pageId "l1::lib1" is not a valid type. Only "page" or "pagev2-grid" are valid page types for a menu item. & 1 more error.'
			);
	}
);
