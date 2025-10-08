/*!
 * @AIMMS_FILE=models/PILTestModel2/PILTestModel2.aimms
 */

scenario("Check that the Tabbed widget also works with library pages.", () => {
	// First check all Tabbed pages on the home page of the main model (which includes library pages too)
	loadPage("Main Project/home");

	findWidget("MainTabbed").navigateToTabbedPage("MainPage1");
	findWidget("mainpage1")
		.getVisibleWidgets()
		.should.eql(["MainScalar"]);

	findWidget("MainTabbed").navigateToTabbedPage("Lib1Page1");
	findWidget("l1::lib_1_page1")
		.getVisibleWidgets()
		.should.eql(["l1::Lib1Scal2", "l1::Lib1Image"]);

	findWidget("MainTabbed").navigateToTabbedPage("Lib2Page1");
	findWidget("l2::lib_2_page1")
		.getVisibleWidgets()
		.should.eql(["l2::Lib2Scalar"]);

	// Then check all Tabbed pages on a page of Library1 (which includes library pages and a page from the main model)
	loadPage("Lib1/Lib1Page2");

	findWidget("l1::NewTabbed").navigateToTabbedPage("MainPage1");
	findWidget("mainpage1")
		.getVisibleWidgets()
		.should.eql(["MainScalar"]);

	findWidget("l1::NewTabbed").navigateToTabbedPage("Lib1Page1");
	findWidget("l1::lib_1_page1")
		.getVisibleWidgets()
		.should.eql(["l1::Lib1Scal2", "l1::Lib1Image"]);

	findWidget("l1::NewTabbed").navigateToTabbedPage("Lib2Page1");
	findWidget("l2::lib_2_page1")
		.getVisibleWidgets()
		.should.eql(["l2::Lib2Scalar"]);
});
