/*!
 * @AIMMS_FILE=models/Bugs/GL1382-SelectionBoxOrdering/SelectionBoxOrdering.aimms
 */

scenario(
	"On a single page WebUI app, that has MenuHidden identifier set for 'Menu Hidden' option entry. Assert menu is hidden based . ",
	() => {
		loadPage("Main Project/home");

		// Model used - models\Bugs\SelectionBoxOrdering

		// Assert Menu is available on Home Page.
		getPageMenu().should.exist;

		// Set MenuHidden identifier value to true
		findWidget("MenuHidden").setValue(true);

		// Assert Menu is now hidden on Home Page.
		getPageMenu().should.not.exist;
	}
);
