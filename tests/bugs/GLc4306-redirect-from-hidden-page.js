/*!
 * @AIMMS_FILE=models/Bugs/GLc4306-RedirectHiddenPage/Test.aimms
 * @TEST_TYPE=fast
 */

scenario("Test to verify redirect functionality of workflow ", () => {
	loadPage("Main Project/home/page01/page02");

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink(1)
		.click();

	getCurrentPage().should.be.equal("Main Project/home");

	findWidget("sampleText").should.exist;
});
