/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Verify Drag and Drop functionality of jobs across resources", () => {
	loadPage("Main Project/Gantt Page");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.getJobs()
		.should.have.numberOfItems(4);

	findWidget("The Gantt Chart")
		.findResource(["Jan"])
		.getJobs()
		.should.have.numberOfItems(4);

	findWidget("The Gantt Chart").dragJobToResource({
		jobKey: "Spare-Time",
		sourceResourceName: "Piet",
		targetResourceName: "Jan",
	});

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.getJobs()
		.should.have.numberOfItems(3);

	//Validate Start and End time of the job before resize
	findWidget("The Gantt Chart")
		.findResource(["Jan"])
		.getJobs()
		.should.have.numberOfItems(4);
});
