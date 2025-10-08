/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"After page navigation, links that were shown through click on 'More' or 'Downwards arrow' are closed in the menu.",
	() => {
		loadPage("Main Project/home");

		// In the menu, verify a level 3 child link is not visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia/India")
			.should.be.equal(false);

		// In the menu, though click on "More" and "Downwards arrow" expand to shown level 4 child link.
		getPageMenu()
			.toggleSubMenu("Main Project/Sales/Asia")
			.toggleMoreItems("Main Project/Sales/Asia")
			.toggleSubMenu("Main Project/Sales/Asia/South Asia");

		//Navigate to level 2 page.
		getPageMenu().navigateToPage("Main Project/Sales/Asia/North Korea");

		//Open the menu. Verify the level 3  11th child link is not visible
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia")
			.should.be.equal(false);

		//Open the menu. Verify the level 4 child link is not visible
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia/India")
			.should.be.equal(false);

		//Close and open the menu. Verify the level 3 'South Asia' child link is not visible
		getPageMenu()
			.toggleMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia")
			.should.be.equal(false);
		//In the menu. Verify the level 3 'Indonesia' child link is visible
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/Indonesia")
			.should.be.equal(true);

		//Redirect to a different page
		getPageMenu().navigateToPage("Main Project/S&OP Review");

		//Verify the level 3 child links under 'Sales' are not visible
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/Indonesia")
			.should.be.equal(false);
	}
);
