/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Map widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Map widget "SmokeTest_Map"
	createWidget("Map", [], "SmokeTest_Map", 10, 4);

	// Assert "SmokeTest_Map" is of widget type - Map
	findWidget("SmokeTest_Map").should.be.a.widgetOfType("map-v2");

	// Assert the empty message on above Map widget
	findWidget("SmokeTest_Map").zoomIn().should.exist;
	findWidget("SmokeTest_Map").zoomOut().should.exist;
	findWidget("SmokeTest_Map")
		.getFooterText()
		.should.contains("Leaflet");

	// On create widget wizard, assert contents section is disabled for widget of type Map
	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Map")
		.isContentsSectionDisplayed()
		.should.be.equal(false);
});
