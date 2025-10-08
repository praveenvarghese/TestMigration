/*!
 * @AIMMS_FILE=models/PageV2/InvisibleWidgets/InvisibleWidgets.aimms
 */

scenario("Checking that widget invisibility also works on a PageV2 page.", () => {
	loadPage("Main Project/home");

	// home page use Layout 7
	// Verify that all 4 widgets are present in assigned areas
	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area D", widgets: ["CityDataTable"] },
			{ areaName: "Area A", widgets: ["Vis", "Invis"] },
			{ areaName: "Area B", widgets: ["CityDataTable2"] },
		]);

	// Check that CityDataTable2 is visible
	findWidget("home")
		.getVisibleWidgets()
		.should.eql(["Vis", "Invis", "CityDataTable2", "CityDataTable"]);

	// Make CityDataTable2 invisible by pressing the button to do so.
	findWidget("Invis").click();

	// Verify that all 4 widgets are still present in assigned areas (i.e. the invisible one should not 'just' be in unassigned)
	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area D", widgets: ["CityDataTable"] },
			{ areaName: "Area A", widgets: ["Vis", "Invis"] },
			{ areaName: "Area B", widgets: ["CityDataTable2"] },
		]);

	// Check that CityDataTable2 is now invisible
	findWidget("home")
		.getVisibleWidgets()
		.should.eql(["Vis", "Invis", "CityDataTable"]);

	// Make CityDataTable2 visible again by pressing the button to do so.
	findWidget("Vis").click();

	// Verify that all 4 widgets are present in assigned areas
	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area D", widgets: ["CityDataTable"] },
			{ areaName: "Area A", widgets: ["Vis", "Invis"] },
			{ areaName: "Area B", widgets: ["CityDataTable2"] },
		]);

	// Check that CityDataTable2 is visible again
	findWidget("home")
		.getVisibleWidgets()
		.should.eql(["Vis", "Invis", "CityDataTable2", "CityDataTable"]);
});
