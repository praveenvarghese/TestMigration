/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 * @DURATION=medium
 */

scenario(
	"Configuring Primary and Secondary page actions, and asserting the details of the page actions loaded.",
	() => {
		loadPage("Main Project/Page Actions V2");

		// Verify there are no Primary page action on the page
		findWidget("page_actions_v2")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		//Configure Primary Page Action's through Page's "Workflow Items Option Editor"
		findWidget("page_actions_v2")
			.openPageExtensionsOptionEditor()
			.setOptions([
				{
					name: "Primary Page Action",
					value: "PrimaryAction",
				},
			]);

		// Verify Primary Page Action is available on the page.
		findWidget("Few Flags").setValue("LetsOptimize", true);
		findWidget("page_actions_v2")
			.getPrimaryPageAction()
			.getButton().should.exist;
		// Verify there are no Secondary page action(s) on the page
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(0);

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
		// Verify 10 Secondary page actions are available on the page.
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(10);
		// Verify Primary Page Action continues to be available on the page.
		findWidget("page_actions_v2")
			.getPrimaryPageAction()
			.getButton().should.exist;

		//Navigate to another page.
		getPageMenu().navigateToPage("Main Project/No Optimize");
		//Verify the page actions added earlier are not available on this  page.
		findWidget("no_optimize")
			.getPrimaryPageAction()
			.getButton().should.not.exist;
		findWidget("no_optimize")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(0);

		// Navigate back to "Page Actions V2" page, and assert the earlier added Page Actions exists
		getPageMenu().navigateToPage("Main Project/Page Actions V2");
		findWidget("page_actions_v2")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("page_actions_v2")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(10);
	}
);
