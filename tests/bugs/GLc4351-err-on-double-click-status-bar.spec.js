/*!
 * @AIMMS_FILE=models//Bugs/GLc4351-StatusBarDoubleClick/Statusbar.aimms
 */

scenario("Assert no error is thrown when double click-ing on status bar.", () => {
	loadPage("Main Project/home");

	getStatusBar().doubleClickStatusBarMessage(0);

	getDialog().should.exist;

	findWidget("show_history").clickDialogPageButton("ok");

	getLogMessage()
		.getCount()
		.should.be.equal(0);
});
