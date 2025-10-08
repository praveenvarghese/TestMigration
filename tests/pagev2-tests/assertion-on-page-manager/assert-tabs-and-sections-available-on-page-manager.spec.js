/*!
 * @AIMMS_FILE=models/PageV2/InvisibleWidgets/InvisibleWidgets.aimms
 */

scenario(
	"With PageV2 feature On and Off, checks for navigator tabs on Page Manager. And the respective page manager screens visible.",
	() => {
		loadPage("Main Project/home");

		// On the Home page, that is of Classic layout. Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;
		getPageConfigurator().getLayoutPreviews().should.exist;

		loadPage("Main Project/home");

		// Navigate to another page of classic-layout
		getPageMenu().navigateToPage("Main Project/Factories");

		//  Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;

		// Navigate to another page of grid-layout
		getPageMenu().navigateToPage("Main Project/GridPage");

		//  Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;

		// Navigate to another Dialog page of classic-layout
		getAppManager().navigateToPage("Main Project/Dialogs");

		//  Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;

		// Navigate to another Dialog page of grid-layout
		getAppManager().navigateToPage("Main Project/GridDialogPage");

		//  Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;

		// Navigate to another SidePanel page of classic-layout
		getAppManager().navigateToPage("Main Project/SidePanels");

		//  Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;

		// Navigate to another SidePanel page of grid-layout
		getAppManager().navigateToPage("Main Project/GridSidePanelPage");

		//  Assert the App Manager headers.
		openAppManager()
			.getNavigatorTabs()
			.should.eql(["App", "Page"]);

		// Click on "App" Tab and assert the PageTree is visible
		getAppManager()
			.getAppNavigatorTab()
			.click();
		getAppManager().getPagesTree().should.exist;

		// Click on "Page" Tab and assert the Layout configuration is visible
		getAppManager()
			.getPageNavigatorTab()
			.click();
		getAppManager().getPageLayoutConfigurator().should.exist;
	}
);
