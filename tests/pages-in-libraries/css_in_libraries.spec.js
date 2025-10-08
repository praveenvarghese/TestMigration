/*!
 * @AIMMS_FILE=models/PILTestModel2/PILTestModel2.aimms
 */

scenario(
	"Check that the special data-library attribute on each page to indicate its library works with CSS.",
	() => {
		loadPage("Main Project/MainPage2");

		// The css provided (in Lib2) does explicitly only target tables in Lib2, so the background color
		// of the table in the Main Project should be the default (which is black).
		findWidget("MainTable")
			.getCell(0, 0)
			.getCSSStyleProperty("background-color")
			.should.be.equal("rgba(0, 0, 0, 0)");

		loadPage("Lib2/Lib2Page2");

		// Thw background color of the table in Lib2 should reflect the css, which should make it red.
		findWidget("l2::L2Table")
			.getCell(0, 0)
			.getCSSStyleProperty("background-color")
			.should.be.equal("rgb(255, 0, 0)");
	}
);
