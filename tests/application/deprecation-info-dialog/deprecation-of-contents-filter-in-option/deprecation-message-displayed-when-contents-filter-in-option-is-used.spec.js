/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario(
	"For a WebUI using Contents.Filter.In Options in Widget Options-Advance Tab, asserting Deprecation Info Dialog and its contents shown on launching WebUI.",
	() => {
		// start from Home page.
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=false");

		// Assert Deprecation Info Dialog is available on the page.
		getDialog().should.exist;

		// Assert Deprecation Info Dialog - Title.
		findDialog()
			.getTitle()
			.should.equal(`Phasing out Widget Filtering`);

		// Assert Deprecation Info Dialog - Message.
		findDialog()
			.getMessage()
			.should.equal(
				`You are making use of a deprecated Widget Filtering functionality that uses "contents.filters.in" option. This feature would be fully eliminated in an upcoming release. Please adjust your WebUI to the use of the Slicing on Identifiers. This is not to be confused with the Table Filtering feature.`
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
