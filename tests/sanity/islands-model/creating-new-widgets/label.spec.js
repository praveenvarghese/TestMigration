/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Label widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Label widget "SmokeTest_Label"
	createWidget("Label", [], "SmokeTest_Label");

	// Assert "SmokeTest_Label" is of widget type - Label
	findWidget("SmokeTest_Label").should.be.a.widgetOfType("label");

	// Assert the empty message on above Label widget
	findWidget("SmokeTest_Label")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Label");
	findWidget("SmokeTest_Label").emptyWidgetMessageHasIcon("icon-tag").should.be.true;

	// On create widget wizard, assert contents section is disabled for widget of type Label
	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Label")
		.isContentsSectionDisplayed()
		.should.be.equal(false);
});
