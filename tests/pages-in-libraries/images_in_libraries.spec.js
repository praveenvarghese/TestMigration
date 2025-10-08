/*!
 * @AIMMS_FILE=models/PILTestModel2/PILTestModel2.aimms
 */

scenario("Check that images can be referenced from within the Main model and libraries.", () => {
	loadPage("Main Project/MainPage2");

	findWidget("MainImage")
		.pickColor(95, 95)
		.should.beSameColorAs([255, 0, 0]);

	loadPage("Lib1/Lib1Page1");

	findWidget("l1::Lib1Image")
		.pickColor(95, 95)
		.should.beSameColorAs([0, 0, 255]);

	loadPage("Lib2/Lib2Page2");

	findWidget("l2::Lib2Image")
		.pickColor(95, 95)
		.should.beSameColorAs([0, 255, 0]);
});
