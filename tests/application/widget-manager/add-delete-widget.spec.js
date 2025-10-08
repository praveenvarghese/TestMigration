/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Adds a widget and later deletes the widget, asserts widgets loaded on the page widget creation demo",
	() => {
		loadPage("Main Project/home");

		createWidget("scalar", ["CitySelected"], "CitySelected");

		findWidget("home_1")
			.getVisibleWidgets()
			.should.eql([
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
				"CitySelected",
			]);

		openWidgetManager()
			.deleteWidget("CitySelected")
			.deleteWidget("AircraftData");
		closeWidgetManager();

		findWidget("home_1")
			.getVisibleWidgets()
			.should.eql([
				"Plane Assignment Map",
				"Clear Schedule",
				"Optimize Schedule",
				"SelectedPlane",
				"Results",
				"PlaneImage",
				"PlaneSelectionBox",
				"Plane Data",
				"DailyPassengers",
				"zoom-table",
				"OpenDIalogPage",
			]);
	}
);
