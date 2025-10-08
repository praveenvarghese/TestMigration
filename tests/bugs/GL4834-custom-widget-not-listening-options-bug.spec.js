/*!
 * @AIMMS_FILE=models/Bugs/GL4834-CustomWidgetBug/Test2.aimms
 */

scenario("GL4834 -old style custom widgets were not rendered bug", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getVisibleWidgets()
		.should.eql(["dashboardarrow", "erwer", "pDummyScalarW"]);

	findWidget("pDummyScalarW").setValue(false);

	findWidget("home")
		.getVisibleWidgets()
		.should.eql(["pDummyScalarW"]);
});
