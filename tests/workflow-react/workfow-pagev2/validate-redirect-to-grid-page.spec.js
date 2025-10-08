/*!
 * @AIMMS_FILE=models/react-workflow-models/GridPageRedirect/GridPageRedirect.aimms
 */

scenario("Redirecting a page to a grid page", () => {
	loadPage("Main Project/home");

	// Navigate to Page 1, which has a redirect to a PageV2 page. Using the App manager, Page 1 should be opened.
	openAppManager().navigateToPageWithRedirect({
		initialUri: "Main Project/home/Page 1",
		finalUri: "Main Project/home/Page 1",
	});

	// Verify whether we indeed landed on the original page.
	getCurrentPage().should.be.equal("Main Project/home/Page 1");

	// Using the Page menu, a redirect should take place.
	openPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/home/Page 1",
		finalUri: "Main Project/home/Grid 1",
	});

	// Verify whether we indeed landed on the redirect page.
	getCurrentPage().should.be.equal("Main Project/home/Grid 1");
});
