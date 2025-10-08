/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 * @DURATION=medium
 */

scenario("Verify menu collapses after navigating to a page, through click on menu links", () => {
	loadPage("Main Project/home");

	// Verification on 1st level link
	getPageMenu().navigateToPage("Main Project/S&OP Review");
	getCurrentPage().should.be.equal("Main Project/S&OP Review");

	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Verification on 2nd level link
	getPageMenu().navigateToPage("Main Project/S&OP Review/Individual Forecast");
	getCurrentPage().should.be.equal("Main Project/S&OP Review/Individual Forecast");

	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Verification on 3rd level link
	getPageMenu().navigateToPage(
		"Main Project/S&OP Review/Individual Forecast/Customer Product Data"
	);
	getCurrentPage().should.be.equal(
		"Main Project/S&OP Review/Individual Forecast/Customer Product Data"
	);

	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Verification on 4th level link
	getPageMenu().navigateToPage(
		"Main Project/S&OP Review/Individual Forecast/Customer Product Data/Nunc nec luctus"
	);
	getCurrentPage().should.be.equal(
		"Main Project/S&OP Review/Individual Forecast/Customer Product Data/Nunc nec luctus"
	);

	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Verification on 5th level link
	getPageMenu().navigateToPage(
		"Main Project/S&OP Review/Individual Forecast/Customer Product Data/Nunc nec luctus/Some submenu item 2"
	);
	getCurrentPage().should.be.equal(
		"Main Project/S&OP Review/Individual Forecast/Customer Product Data/Nunc nec luctus/Some submenu item 2"
	);

	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);
});
