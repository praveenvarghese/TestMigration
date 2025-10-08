/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Slider widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Slider widget "SmokeTest_Slider"
	createWidget("Slider", ["SliderValue"], "SmokeTest_Slider", 4, 2);

	// Assert "SmokeTest_Slider" is of widget type - Slider
	findWidget("SmokeTest_Slider").should.be.a.widgetOfType("slider");

	// Assert the empty message on above Slider widget
	findWidget("SmokeTest_Slider")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Please add a minimum in the widget options");
	findWidget("SmokeTest_Slider").emptyWidgetMessageHasIcon("icon-equalizer2").should.be.true;

	// Create another Slider widget "SmokeTest_Slider1" without any contents
	createWidget("Slider", [], "SmokeTest_Slider1", 4, 2);

	// Assert "SmokeTest_Slider1" is of widget type - Slider
	findWidget("SmokeTest_Slider1").should.be.a.widgetOfType("slider");

	// Assert the empty message on above Slider widget
	findWidget("SmokeTest_Slider1")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Slider");
	findWidget("SmokeTest_Slider1").emptyWidgetMessageHasIcon("icon-equalizer2").should.be.true;
});
