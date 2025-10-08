/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Test asserting widgets listed in Widget Manager.", () => {
	loadPage("Main Project/home");

	openWidgetManager()
		.getWidgets()
		.should.be.eql([
			"Plane Assignment Map",
			"Clear Schedule",
			"Optimize Schedule",
			"SelectedPlane",
			"Results",
			"PlaneImage",
			"PlaneSelectionBox",
			"Plane Data",
			"DailyPassengers",
			"AircraftData",
			"zoom-table",
			"OpenDIalogPage",
		]);

	closeWidgetManager();

	getPageMenu().navigateToPage("Main Project/DisplayDomain");

	openWidgetManager()
		.getWidgets()
		.should.be.eql(["displaydomain"]);

	closeWidgetManager();

	getPageMenu().navigateToPage("Main Project/THird Page/Empty Page Do Not Delete");

	openWidgetManager()
		.getWidgets()
		.should.be.eql([]);
});
