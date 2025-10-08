/*!
 * @AIMMS_FILE=models/Bugs/GL3272-ErrorMessageBugWithSelectionBoxV2/Do Everything.aimms
 */

scenario(
	"validate error dialog is not-displayed for grid-pages when selectionboxv2 widget is present",
	() => {
		loadPage("Main Project/home");

		//Validate in normal GL Page
		getDialog().should.not.exist;

		//Validate in GL Sidepanel Page
		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("KPIs");
		getDialog().should.not.exist;

		//Validate in GL Dialog Page
		findWidget("openDialog").click();

		findDialog()
			.findButton("OK")
			.click();

		getDialog().should.not.exist;
	}
);
