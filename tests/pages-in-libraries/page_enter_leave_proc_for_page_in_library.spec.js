/*!
 * @AIMMS_FILE=models/PILTestModel/PILTestModel.aimms
 */

scenario(
	"Assert that the page enter and page leave procedures also work on a page in a library",
	() => {
		loadPage("Main Project/home");

		// Enter the model on a page where Global1 is displayed and has its initial value of 0.
		loadPage("Mischa Library 2/Second Page");
		findWidget("ml2::GV")
			.getValue()
			.should.eql("0.00");

		// Now enter the page First Page in MischaLib1. This page has a page enter procedure, which sets the value of Global1 to 10.
		openAppManager().navigateToPage("MischaLib1/First Page");
		findWidget("ml1::Scal")
			.getValue()
			.should.eql("10.00");

		// And leave this page. The page leave procedure should set Global1 to -10.
		openAppManager().navigateToPage("Mischa Library 2/Second Page");
		findWidget("ml2::GV")
			.getValue()
			.should.eql("-10.00");
	}
);
