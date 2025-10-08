/*!
 * @AIMMS_FILE=models/Bugs/GL3272-ErrorMessageBugWithSelectionBoxV2/Do Everything.aimms
 */

scenario(
	"validate error dialog is displayed for classic-pages when selectionboxv2 widget is present",
	() => {
		loadPage("Main Project/WebUI Form");

		//Validate in normal GL Page
		getDialog().should.exist;

		findDialog()
			.findButton("Dismiss")
			.click();

		//Validate in GL Sidepanel Page
		findWidget("webui_form")
			.getSidepanels()
			.openSidepanelTab("Classic Page");

		getDialog().should.exist;

		findDialog()
			.findButton("Dismiss")
			.click();

		//Validate in GL Dialog Page
		findWidget("openClassicDialog").click();

		findDialog()
			.findButton("OK")
			.click();

		getDialog().should.exist;
	}
);
