/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"Links that were shown through click on 'More' or 'Downwards arrow' are closed when menu is reopened.",
	() => {
		loadPage("Main Project/home");

		// Open the menu. Click on 'More' of 'Result'. The 11th link under 'Result' is visible.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Result")
			.isMenuLinkVisible("Main Project/Result/MKG Results")
			.should.be.equal(true);

		// Close and open the menu. The 11th link under 'Result' is not visible.
		getPageMenu()
			.toggleMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Result/MKG Results")
			.should.be.equal(false);

		// In the menu, though click on "Downwards arrow" expand level 3 links. Level 4 link is visible.
		getPageMenu()
			.toggleSubMenu("Main Project/Sales/Europe")
			.toggleSubMenu("Main Project/Sales/Europe/United Kingdom")
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom/England")
			.should.be.equal(true);

		// Close and open the menu. The expanded 2,3 and 4 level links are not visible.
		getPageMenu()
			.toggleMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom/England")
			.should.be.equal(false);
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom")
			.should.be.equal(false);
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe")
			.should.be.equal(true);

		// In the menu, though click on "More" and "Downwards arrow" expand to show level 2 links. Level 4 link is visible.

		getPageMenu().navigateToPage("Main Project/Sales/Asia");
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Result")
			.toggleSubMenu("Main Project/Result/MKG Results")
			.toggleMoreItems("Main Project/Result/MKG Results")
			.isMenuLinkVisible("Main Project/Result/MKG Results/MKG 11 Results")
			.should.be.equal(true);

		// Close and open the menu. The expanded 2 level link is not visible.
		getPageMenu()
			.toggleMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Result/MKG Results/MKG 11 Results")
			.should.be.equal(false);
	}
);
