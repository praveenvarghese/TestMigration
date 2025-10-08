/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Adding few widgets to the page through Widget-Manager and Page-Configurator.", () => {
	// Load home page
	loadPage("Main Project/home?table-v2=false");

	// For a page with Classic layout, add a widget through Widget-Manager. And assert its presence on page
	createWidget("table", ["Flag", "Flag1"], "V1 W1");
	findWidget("V1 W1").should.be.a.widgetOfType("table");

	// Navigate to a page with Standard pageV2 layout
	getPageMenu().navigateToPage("Main Project/Book Corner");

	// Open Page-Configurator and add a widget through it
	openPageConfigurator().createWidget("table", ["Flag", "Flag1"], "V2 W1");

	// Move the widget to an area and assert its presence on page
	getPageConfigurator()
		.dragWidget("V2 W1")
		.toArea("Area A");
	findWidget("V2 W1").should.be.a.widgetOfType("table");

	// Add a widget through Widget-Manager
	createWidget("table", ["Flag", "Flag1"], "V2 W2");

	// Open Page-Configurator. Move the above added widget to an area and assert its presence on page
	openPageConfigurator()
		.dragWidget("V2 W2")
		.toArea("Area A");
	findWidget("V2 W2").should.be.a.widgetOfType("table");
});
