/*!
 * @AIMMS_FILE=models/Bugs/GL00901-UponLeaveTab/UponLeaveTab.aimms
 */

scenario("Run upon-leave-procedure of main page, not upon-leave-procedure of tabpage", () => {
	loadPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/Page1");

	findWidget("ValueScalar")
		.getValue()
		.should.be.equal("1.00");
});
