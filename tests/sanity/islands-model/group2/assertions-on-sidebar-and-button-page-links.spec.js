/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting button pagelinks behaviour", () => {
	// We start from Home page.
	loadPage("Main Project/home");

	// Navigate to "Main Project/Switch Page" page
	openAppManager().navigateToPage("Main Project/Switch Page");

	// Navigate to "Main Project/home" page
	openAppManager().navigateToPage("Main Project/home");

	// Click on "Go To Third Page" button.
	findWidget("PageJumpTestButton").click();

	// Assert page is navigated to "Main Project/THird Page"
	getCurrentPage().should.be.equal("Main Project/THird Page");

	// Navigate to "Main Project/home" page
	openAppManager().navigateToPage("Main Project/home");

	// Assert the browser Tabs count is 1.
	getTabsCount().should.be.equal(1);

	// Click on "Canarias7 Newspaper" button.
	findWidget("Canarias7 Newspaper").click();
	// Assert a new tab is opened. So the count of tabs is now 2.
	getTabsCount().should.be.equal(2);
});
