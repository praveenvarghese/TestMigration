/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"Verify stickiness of menu bar, when child links are unfured through click on downward arrow or more link.",
	() => {
		loadPage("Main Project/home");

		getPageMenu()
			.isMenuOpen()
			.should.be.equal(false);
		getPageMenu()
			.isMenuBarVisible()
			.should.be.equal(true);

		getPageMenu().toggleMenu();

		getPageMenu()
			.isMenuOpen()
			.should.be.equal(true);
		getPageMenu()
			.isMenuBarVisible()
			.should.be.equal(true);

		getPageMenu()
			.toggleSubMenu("Main Project/Sales/Asia")
			.isMenuBarVisible()
			.should.be.equal(true);

		getPageMenu()
			.toggleMoreItems("Main Project/Sales/Asia")
			.isMenuBarVisible()
			.should.be.equal(true);

		getPageMenu()
			.toggleSubMenu("Main Project/Sales/Asia/South Asia")
			.isMenuBarVisible()
			.should.be.equal(true);

		getPageMenu()
			.toggleMoreItems("Main Project/Result")
			.isMenuBarVisible()
			.should.be.equal(true);
	}
);
