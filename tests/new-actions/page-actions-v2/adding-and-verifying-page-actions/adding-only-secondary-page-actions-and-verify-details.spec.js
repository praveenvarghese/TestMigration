/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Configuring Secondary page actions, and asserting the details of the page actions loaded.",
	() => {
		loadPage("Main Project/Page Actions V2");

		//Configure Secondary Page Actions through Page's "Workflow Items Option Editor"
		findWidget("page_actions_v2")
			.openPageExtensionsOptionEditor()
			.setOptions([
				{
					name: "Secondary Page Actions",
					value: "SecondaryPageActions",
				},
			]);
		findWidget("page_actions_v2").closeOptionDialog();

		// Verify Secondary page actions menu button exists, collapsed. Unfolding it, verify a total 10 page actions exists.
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded()
			.should.be.equal(false);
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(10);

		// Verify Primary Page Action is not available on the page.
		findWidget("page_actions_v2")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		//Navigate to another page.
		getPageMenu().navigateToPage("Main Project/No Optimize");
		//Verify the page actions added earlier are not available on this  page.
		findWidget("no_optimize")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		// Navigate back to "Page Actions V2" page, and assert the earlier added Page Actions exists
		getPageMenu().navigateToPage("Main Project/Page Actions V2");
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded()
			.should.be.equal(false);
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(10);
	}
);
