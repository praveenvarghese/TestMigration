/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"After page navigation, links that were shown through click on 'Downwards arrow' are closed in the menu.",
	() => {
		loadPage("Main Project/home");

		// In the menu, verify a level 3 child link is not visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom/England")
			.should.be.equal(false);

		// In the menu, though click on "Downwards arrow" expand level 3 links. Level 4 link is visible.
		getPageMenu().toggleSubMenu("Main Project/Sales/Europe");

		//In the menu, verify level 2 child link is visible.
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom")
			.should.be.equal(true);

		//Navigate to Level 3 'Sales/Europe/United Kingdom' page.
		getPageMenu().navigateToPage("Main Project/Sales/Europe/United Kingdom");

		//In the menu, verify level 3 child links is visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom/England")
			.should.be.equal(true);

		//Navigate to Level 2 'Sales/Europe' page.
		getPageMenu().navigateToPage("Main Project/Sales/Europe");

		//In the menu, verify level 2 child link is visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom")
			.should.be.equal(true);
	}
);
