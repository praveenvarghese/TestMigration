/*!
 * @AIMMS_FILE=models/MapSlowness/MapSlowness.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Zooming with the mousewheen should keep the current mouse position as centered (#1176).",
	() => {
		loadPage("Main Project/home");

		findWidget("SlowMap").mouseWheelZoom(500, 200, 100, true);
		findWidget("SlowMap").mouseWheelZoom(500, 200, 100, true);
		findWidget("SlowMap").mouseWheelZoom(500, 200, 100, true);

		findWidget("Map Stuff")
			.getValue("MapCenterLongitude")
			.should.eql("-80.95");

		findWidget("Map Stuff")
			.getValue("MapCenterLattitude")
			.should.eql("74.67");

		findWidget("SlowMap").mouseWheelZoom(500, 200, 100, false);
		findWidget("SlowMap").mouseWheelZoom(500, 200, 100, false);

		findWidget("Map Stuff")
			.getValue("MapCenterLongitude")
			.should.eql("-40.09");

		findWidget("Map Stuff")
			.getValue("MapCenterLattitude")
			.should.eql("42.49");
	}
);
