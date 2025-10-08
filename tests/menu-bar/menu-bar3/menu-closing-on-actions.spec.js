/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"With menu being open, verify menu collapses on click of menubar, 'ESC' key and on click outside menu area",
	() => {
		loadPage("Main Project/home");

		// Open the menu
		getPageMenu()
			.toggleMenu()
			.isMenuOpen()
			.should.be.equal(true);

		// Toggle the menu. Menu should be closed.
		getPageMenu()
			.toggleMenu()
			.isMenuOpen()
			.should.be.equal(false);

		// Open the menu
		getPageMenu()
			.toggleMenu()
			.isMenuOpen()
			.should.be.equal(true);

		//On "ESC" key press
		getPageMenu().pressKeys(SPECIAL_KEYS.escape);

		//Menu should be closed.
		getPageMenu()
			.isMenuOpen()
			.should.be.equal(false);

		//To Do//
		// Click on veil and check menu is closed
	}
);
