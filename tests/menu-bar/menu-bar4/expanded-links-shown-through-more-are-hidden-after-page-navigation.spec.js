/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"After page navigation, links that were shown through click on 'More' are closed in the menu.",
	() => {
		loadPage("Main Project/home");

		// Open the menu. Click on 'More' of 'Review Dataset'. The 11th link is visible.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Review Dataset");

		//In the menu. The 11th link under 'Review Dataset' is visible.
		getPageMenu()
			.isMenuLinkVisible("Main Project/Review Dataset/Asia-South Review Data")
			.should.be.equal(true);

		//Navigate to the 1oth link 'Review Dataset/Asia-Pacific Review Data'
		getPageMenu().navigateToPage("Main Project/Review Dataset/Asia-Pacific Review Data");

		//Open the menu. The 11th link under 'Review Dataset' is not visible.
		getPageMenu()
			.toggleMenu()
			.isMenuLinkVisible("Main Project/Review Dataset/Asia-South Review Data")
			.should.be.equal(false);
	}
);
