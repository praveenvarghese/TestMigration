/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("With menu being open, verify menu collapses on click of top level header buttons", () => {
	loadPage("Main Project/home");

	// Verifying menu is not open on page load
	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Open the menu
	getPageMenu()
		.toggleMenu()
		.isMenuOpen()
		.should.be.equal(true);

	//Open Page Manager Sidebar
	openAppManager();

	//Verify menu is collapsed.
	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Open the menu
	getPageMenu()
		.toggleMenu()
		.isMenuOpen()
		.should.be.equal(true);

	//Click on Page Settings button
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.click();

	//Verify menu is collapsed.
	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Open the menu
	getPageMenu()
		.toggleMenu()
		.isMenuOpen()
		.should.be.equal(true);

	//Click on Widget Manager button
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.click();

	//Verify menu is collapsed.
	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Open the menu
	getPageMenu()
		.toggleMenu()
		.isMenuOpen()
		.should.be.equal(true);

	//Click on Data Manager button
	getPageHeader()
		.getButtons()
		.getDataManager()
		.click();

	//Verify menu is collapsed.
	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);

	// Open the menu
	getPageMenu()
		.toggleMenu()
		.isMenuOpen()
		.should.be.equal(true);

	findWidget("home").openOptionDialog();

	//Verify menu is collapsed.
	getPageMenu()
		.isMenuOpen()
		.should.be.equal(false);
});
