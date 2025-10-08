/*!
 * @AIMMS_FILE=models/Bugs/GL1611-NamespaceTranslation/NamespaceTranslation.aimms
 */

scenario(
	"On a single page WebUI app, that has literal 1 value set for 'Menu Hidden' option entry. Assert menu is hidden. ",
	() => {
		loadPage("Main Project/home");

		// Model used - models\Bugs\GL1611-NamespaceTranslation

		// Assert Menu is hidden on Home Page.
		getPageMenu().should.not.exist;

		// Assert "Menu Hidden" option entry in Application settings/Misc tab exists
	}
);
