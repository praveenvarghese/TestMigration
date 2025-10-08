/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Add a new Dialog page and assert the different sizes and buttons available.", () => {
	loadPage("Main Project/home");

	//Create a dialog page from Main Project
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddDialogPage()
		.enterName("Create Dialog Page");

	getAppManager().navigateToPage("Main Project/Create Dialog Page");

	closeAppManager();

	//Validate the different sizes option available on Dialog page
	findWidget("create_dialog_page")
		.getDialogPageSizes()
		.should.eql(["small", "medium", "large", "custom"]);

	//Validate by default "Small" is selected
	findWidget("create_dialog_page")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	//Validate default button placeholders in dialog page
	findWidget("create_dialog_page")
		.checkPlaceHolderButtonText()
		.should.eql([
			{
				text: "Cancel",
				title: "Button actions and text can be set via OpenDialogPage procedure",
			},
			{
				text: "OK",
				title: "Button actions and text can be set via OpenDialogPage procedure",
			},
		]);
});
