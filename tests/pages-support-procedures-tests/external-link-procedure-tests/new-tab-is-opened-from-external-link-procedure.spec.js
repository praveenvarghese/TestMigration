/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify opening of new tab when external link is procedure is triggered from a page",
	() => {
		loadPage("Main Project/open external link page test");

		//Verify opening of new tab when external link is procedure is triggered from a page
		getTabsCount().should.be.equal(1);

		findWidget("OpenExternalLinkFromPage").click();

		getTabsCount().should.be.equal(2);
	}
);
