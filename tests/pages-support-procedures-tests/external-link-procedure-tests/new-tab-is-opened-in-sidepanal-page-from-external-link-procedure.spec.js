/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to Verify opening of new tab when external link is procedure is triggered from a sidepanel page",
	() => {
		loadPage("Main Project/open external link page test");

		//Verify opening of new tab when external link is procedure is triggered from a sidepanel page
		getTabsCount().should.be.equal(1);

		findWidget("open_external_link_page_test")
			.getSidepanels()
			.openSidepanelTab("open external link sidepanel test");

		findWidget("externalLinkSidepanelButton_1").click();

		getTabsCount().should.be.equal(2);
	}
);
