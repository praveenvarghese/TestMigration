/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validate widget header options for end user mode", () => {
	loadPage("Main Project/home/Application Settings");

	findWidget("Application Settings_1").setValue(false);

	getPageMenu().navigateToPage("Main Project/Item Actions/Scalar Data");

	//Scalar Widget
	findWidget("Numeric Data")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("Numeric Data")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("Numeric Data")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	findWidget("Numeric Data")
		.getWidgetMenu()
		.click();

	findWidget("Numeric Data")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("Numeric Data")
		.isWidgetMenuOptionDisplayed(0)
		.should.be.eql(false);

	//Bar Chart Widget
	openPageMenu().navigateToPage("Main Project/Item Actions/Charts/Bar Chart Data");

	findWidget("BarChart_1_1")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("BarChart_1_1")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("BarChart_1_1")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	findWidget("BarChart_1_1")
		.getWidgetMenu()
		.click();

	findWidget("BarChart_1_1")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("BarChart_1_1")
		.isWidgetMenuOptionDisplayed(6)
		.should.be.eql(false);

	//Combination Chart
	getPageMenu().navigateToPage("Main Project/combi chart page");

	findWidget("combichart1")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("combichart1")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("combichart1")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	findWidget("combichart1")
		.getWidgetMenu()
		.click();

	findWidget("combichart1")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("combichart1")
		.isWidgetMenuOptionDisplayed(0)
		.should.be.eql(false);

	//Map Widget
	getPageMenu().navigateToPage("Main Project/MapV3 Test Page/MapV3");

	findWidget("MapV3")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("MapV3")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("MapV3")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	findWidget("MapV3")
		.getWidgetMenu()
		.click();

	findWidget("MapV3")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("MapV3")
		.isWidgetMenuOptionDisplayed(6)
		.should.be.eql(false);
});
