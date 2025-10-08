/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */

scenario("By Adding display domain we can control the jobs displayed", () => {
	loadPage("Main Project/DisplayDomainTests");

	findWidget("displaydomainGanttwidget")
		.findResource("MachineOne")
		.getJobs()
		.should.have.numberOfItems(5);

	findWidget("displaydomainGanttwidget")
		.getNoOfJobs()
		.should.be.equal(5);

	findWidget("DisplayMachineTwo").click();

	findWidget("displaydomainGanttwidget")
		.findResource("MachineOne")
		.getJobs()
		.should.have.numberOfItems(5);

	findWidget("displaydomainGanttwidget")
		.findResource("MachineTwo")
		.getJobs()
		.should.have.numberOfItems(5);

	findWidget("displaydomainGanttwidget")
		.getNoOfJobs()
		.should.be.equal(10);
});
