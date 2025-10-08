/*!
 * @AIMMS_FILE=models/Bugs/GL00907-UponLeavePage/UponLeavePage.aimms
 */

scenario("Run upon-leave-procedure of main page including check for allowed", () => {
	loadPage("Main Project/home");

	findWidget("AssignValue")
		.getValue()
		.should.equal("0.00");

	openAppManager().navigateToPage("Main Project/tabPage");

	getDialog().should.exist;

	findDialog()
		.getTitle()
		.should.equal(`Leave Page?`);

	findDialog()
		.getMessage()
		.should.equal(`Page incomplete, please assign Value=1 before leaving this page.`);

	findDialog()
		.getButtons()
		.should.shallowDeepEqual(["Stay", "Leave"]);

	findDialog()
		.findButton("Leave")
		.click();

	getDialog().should.not.exist;

	openAppManager().navigateToPage("Main Project/Page1");

	getLogMessage().openList();

	getLogMessage()
		.getCount()
		.should.be.equal(0);
});
