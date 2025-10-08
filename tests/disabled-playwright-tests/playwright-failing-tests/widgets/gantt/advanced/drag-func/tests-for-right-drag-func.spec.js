/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Verify End time resize of Gantt chart job.", () => {
	loadPage("Main Project/Gantt Page");

	//Validate Start and End time of the job before resize
	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("Start: 20:00 Sun Mar 27");

	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("End: 08:00 Wed Mar 30");

	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.click();

	//Increase the End time
	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.rightHandleRightDragOfTheJob(48);

	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("Start: 20:00 Sun Mar 27");

	//Validate Start and End time of the job after resize
	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("End: 16:00 Wed Mar 30");

	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.click();

	//Decrease the End time
	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.rightHandleLeftDragOfTheJob(48);

	//Validate Start and End time of the job after resize to original size
	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("Start: 20:00 Sun Mar 27");

	findWidget("The Gantt Chart")
		.findResource(["Klaas"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("End: 08:00 Wed Mar 30");
});
