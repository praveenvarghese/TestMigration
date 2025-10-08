/*!
 * @AIMMS_FILE=models/Bugs/GLc5604-GanttChartReadOnly/GanttChartReadOnly.aimms
 */

scenario("Gantt Chart with read-only identifiers must get -disabled annotations", () => {
	loadPage("Main Project/home");

	findWidget("Period Slider")
		.isChangeStartTimeDisabled()
		.should.be.equal(true);

	findWidget("Period Slider")
		.isChangeDurationDisabled()
		.should.be.equal(true);
});
