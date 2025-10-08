/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for item action on Treemap in dialog page", () => {
	loadPage("Main Project/home");

	findWidget("OpenDIalogPage").click();

	getDialog().should.exist;

	findWidget("DialogTreeMapWidget")
		.findRectangle("TrafficDensity, Traffic-01")
		.rightClick();

	findWidget("DialogTreeMapWidget")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Traffic Details", icon: "aimms-info", state: "active" },
			{ title: "View Traffic Details", icon: "aimms-cart", state: "active" },
		]);
});
