/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Resizing a table and asserting cells shown in the table.", () => {
	loadPage("Main Project/home");

	findWidget("DailyPassengers")
		.getNumColsInGridViewport()
		.should.be.equal(7);

	findWidget("DailyPassengers")
		.getNumRowsInGridViewport()
		.should.be.equal(9);

	openWidgetManager().setWidgetSize("DailyPassengers", { width: 4 });

	findWidget("DailyPassengers")
		.getNumColsInGridViewport()
		.should.be.equal(3);

	openWidgetManager().setWidgetSize("DailyPassengers", { height: 1 });

	findWidget("DailyPassengers")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	openWidgetManager().setWidgetSize("DailyPassengers", { width: 5, height: 3 });

	findWidget("DailyPassengers")
		.getNumColsInGridViewport()
		.should.be.equal(5);

	findWidget("DailyPassengers")
		.getNumRowsInGridViewport()
		.should.be.equal(14);
});
