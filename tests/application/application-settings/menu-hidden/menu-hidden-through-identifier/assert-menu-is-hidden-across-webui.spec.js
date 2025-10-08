/*!
 * @AIMMS_FILE=models/Bugs/GL1538-TotalAggregators/TotalAggregators.aimms
 */

scenario(
	"On a WebUI app that has MenuHidden identifier set for 'Menu Hidden' option entry. Assert menu is shown/hidden based on its MenuHidden identifier value.",
	() => {
		loadPage("Main Project/home");

		// Model used - models\Bugs\TotalAggregators

		// Assert Menu is available on "Home Page"
		getPageMenu().should.exist;

		// Navigate to "Parent Page"
		findWidget("Navigate to Parent Page_1").click();

		// Assert Menu is available on this "Parent Page"
		getPageMenu().should.exist;

		// Navigate to "Child Page"
		findWidget("Navigate to Child Page").click();

		// Assert Menu is available on this "Child Page"
		getPageMenu().should.exist;

		// Navigate back to "Home Page"
		findWidget("Navigate to Home Page").click();

		// Set MenuHidden identififer value to true.
		findWidget("Menu Hidden").setValue(true);

		// Assert Menu is hidden on "Home Page".
		getPageMenu().should.not.exist;

		// Navigate to "Parent Page"
		findWidget("Navigate to Parent Page_1").click();

		// Assert Menu is hidden on this "Parent Page"
		getPageMenu().should.not.exist;

		// Navigate to "Child Page"
		findWidget("Navigate to Child Page").click();

		// Assert Menu is hidden on this "Child Page"
		getPageMenu().should.not.exist;

		// Navigate to "Sibling Page"
		findWidget("Navigate to Sibling Page").click();

		// Assert Menu is hidden on this "Sibling Page"
		getPageMenu().should.not.exist;
	}
);
