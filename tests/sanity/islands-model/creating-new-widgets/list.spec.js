/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new List widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a List widget "SmokeTest_List"
	createWidget("List", [], "SmokeTest_List");

	// Assert "SmokeTest_List" is of widget type - List
	findWidget("SmokeTest_List").should.be.a.widgetOfType("list");

	// Assert the empty message on above List widget
	findWidget("SmokeTest_List")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty List");
	findWidget("SmokeTest_List").emptyWidgetMessageHasIcon("icon-lists").should.be.true;

	// On create widget wizard, assert contents section is disabled for widget of type List
	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("List")
		.isContentsSectionDisplayed()
		.should.be.equal(false);
});
