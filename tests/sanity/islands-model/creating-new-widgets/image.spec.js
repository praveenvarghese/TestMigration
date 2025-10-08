/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Image widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create an Image widget "SmokeTest_Image"
	createWidget("Image", [], "SmokeTest_Image", 8, 4);

	// Assert "SmokeTest_Image" is of widget type - Image
	findWidget("SmokeTest_Image").should.be.a.widgetOfType("image");

	// Assert the empty message on above Image widget
	findWidget("SmokeTest_Image")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Image");
	findWidget("SmokeTest_Image").emptyWidgetMessageHasIcon("icon-image2").should.be.true;

	// On create widget wizard, assert contents section is disabled for widget of type Image
	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Image")
		.isContentsSectionDisplayed()
		.should.be.equal(false);
});
