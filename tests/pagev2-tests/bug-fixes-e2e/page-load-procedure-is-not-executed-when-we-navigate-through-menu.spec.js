/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Page load procedure is executed for sidepanel open when we navigate through Menu ",
	() => {
		loadPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.isSidepanelTabOpened().should.be.true;

		getPageMenu().navigateToPage("Main Project/S&OP Review");

		findWidget("s_and_op_review")
			.getSidepanels()
			.isSidepanelTabOpened().should.be.false;

		getPageMenu().navigateToPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.isSidepanelTabOpened().should.be.true;

		pageRefresh();

		findWidget("home")
			.getSidepanels()
			.isSidepanelTabOpened().should.be.true;
	}
);
