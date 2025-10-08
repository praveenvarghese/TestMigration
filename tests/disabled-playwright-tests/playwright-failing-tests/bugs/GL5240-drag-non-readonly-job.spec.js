/*!
 * @AIMMS_FILE=models/Bugs/GL5240-EmployeeSchedule/EmployeeSchedule.aimms
 */

scenario("Validate that drag is possible for non-readonly job", () => {
	loadPage("Main Project/Gantt");

	//Validate end time of the job before resize
	findWidget("JobDuration")
		.getValue()
		.should.equal("4.00");

	//Decrease the end time
	findWidget("gnt_assignementPerRestaurant")
		.findResource(["EllenG"])
		.findJob("Table Cleaner")
		.click();

	findWidget("gnt_assignementPerRestaurant")
		.findResource(["EllenG"])
		.findJob("Table Cleaner")
		.rightHandleLeftDragOfTheJob(48);

	//Validate end time of the job after resize
	findWidget("JobDuration")
		.getValue()
		.should.equal("3.00");
});
