/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Verify Start time resize of Gantt chart job.", () => {
	loadPage("Main Project/Gantt Page");

	//Validate Start and End time of the job before resize
	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("Start: 19:30 Sun Mar 27");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("End: 19:30 Mon Mar 28");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.click();

	//Increase the STart time

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.leftHandleLeftDragOfTheJob(54);

	//Validate Start and End time of the job after resize
	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("Start: 10:30 Sun Mar 27");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("End: 19:30 Mon Mar 28");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.click();

	//Decrease the start time
	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.leftHandleRightDragOfTheJob(54);

	//Validate Start and End time of the job after resize
	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("Start: 19:30 Sun Mar 27");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getTooltip()
		.should.contain("End: 19:30 Mon Mar 28");
});
