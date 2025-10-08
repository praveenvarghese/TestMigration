/*!
 * @AIMMS_FILE=models/Bugs/GL3272-ErrorMessageBugWithSelectionBoxV2/Do Everything.aimms
 */

scenario(
	"validate error dialog is displayed when selectionboxv2 widget is present and Grid Layout is disabled",
	() => {
		loadPage("Main Project/home?ignore-grid-layout=true");

		//Validate in normal GL Page
		getDialog().should.exist;

		findDialog()
			.findButton("Dismiss")
			.click();

		//Validate in GL Sidepanel Page
		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("KPIs");

		getDialog().should.exist;

		findDialog()
			.findButton("Dismiss")
			.click();

		// //Validate in GL Dialog Page
		// findWidget("openDialog").click();

		// findDialog()
		// 	.findButton("OK")
		// 	.click();

		// getDialog().should.exist;
	}
);
