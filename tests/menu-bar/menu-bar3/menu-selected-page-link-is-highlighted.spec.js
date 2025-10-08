/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"The current page link, be it 1st level and deep inner link is visible in the menu.",
	() => {
		loadPage("Main Project/home");

		// Open the menu. Through click on 'More' and downwards arrow, identify a level 3 link.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Result")
			.toggleSubMenu("Main Project/Result/MKG Results")
			.toggleMoreItems("Main Project/Result/MKG Results");

		//Click on the 1evel 3 link.
		getPageMenu().navigateToPage("Main Project/Result/MKG Results/MKG 11 Results");

		//Open the menu. The current selected page (level 3) link is visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Result/MKG Results/MKG 11 Results")
			.should.be.equal(true);

		// Open the menu. Through click on downwards arrow, identify a level 4 link.
		getPageMenu()
			.toggleSubMenu("Main Project/Sales/Europe")
			.toggleSubMenu("Main Project/Sales/Europe/United Kingdom");

		//Click on the 1evel 4 link.
		getPageMenu().navigateToPage("Main Project/Sales/Europe/United Kingdom/England");

		//Open the menu. The current selected page (level 4) link is visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom/England")
			.should.be.equal(true);

		// Open the menu. Through click on 'More' identify a level 1 link.
		getPageMenu().toggleMoreItems("Main Project/Review Dataset");

		//Navigate to the 11th link under 'Main Project/Review Dataset'
		getPageMenu().navigateToPage("Main Project/Review Dataset/Asia-South Review Data");

		//Open the menu. The current selected page link (11th link under 'Main Project/Review Dataset') is visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Review Dataset/Asia-South Review Data")
			.should.be.equal(true);

		//Earlier opened level 3 and 4 links are not visible
		getPageMenu()
			.isMenuLinkVisible("Main Project/Result/MKG Results/MKG 11 Results")
			.should.be.equal(false);
		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Europe/United Kingdom/England")
			.should.be.equal(false);

		// In the menu, identify a deeper level 4 link wherein we get vertical scroll on the menu.
		getPageMenu()
			.toggleSubMenu("Main Project/Sales/Asia")
			.toggleMoreItems("Main Project/Sales/Asia")
			.toggleSubMenu("Main Project/Sales/Asia/South Asia");

		//Click on the level 4 link.
		getPageMenu().navigateToPage("Main Project/Sales/Asia/South Asia/India");

		//Open the menu. The current selected page link (level 4 link with a vertical scoll in menu) is visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia/India")
			.should.be.equal(true);

		//Click on the level 2 link.
		getPageMenu().navigateToPage("Main Project/Sales/Africa");

		//Earlier opened level 3 and 4 links are not visible
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia")
			.should.be.equal(false);

		getPageMenu()
			.isMenuLinkVisible("Main Project/Sales/Asia/South Asia/India")
			.should.be.equal(false);
	}
);
