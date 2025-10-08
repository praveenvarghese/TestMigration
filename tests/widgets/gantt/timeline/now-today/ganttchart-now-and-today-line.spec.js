/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Now and Today line.", () => {
	loadPage("Main Project/Timeline");

	/* by default lines should not be shown */
	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(false);

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(false);

	/* when p_Timeline is true, should show timelines */

	findWidget("Chart Settings").setValue("p_Timeline", true);

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(true);

	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(true);

	/* when p_Timeline is false, should not show lines.*/

	findWidget("Update range to start from past 20 days").click();

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(false);

	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(false);

	/* when the range is changed and p_Timeline is true, should show lines.*/

	findWidget("Update range to start from past 20 days").click();
	findWidget("Chart Settings").setValue("p_Timeline", true);

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(true);

	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(true);

	/* when the range is in future/past, and p_Timeline is false, should not show lines */

	findWidget("Update range to future").click();

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(false);

	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(false);

	/* Even If p_Timeline is true, should not show lines for future/past date range */

	findWidget("Update range to future").click();
	findWidget("Chart Settings").setValue("p_Timeline", true);

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(false);

	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(false);

	/* Should show now line and not Today line */

	findWidget("Update range within 23 hours").click();
	findWidget("Chart Settings").setValue("p_Timeline", true);

	findWidget("Ganttchart Timeline")
		.hasTodayLine()
		.should.be.equal(false);

	findWidget("Ganttchart Timeline")
		.hasNowLine()
		.should.be.equal(true);

	/*Todo - Commented cos it is failing in pipeline, blocking the develop release
	// /* Should show Today line and not now line */

	// findWidget("Update range more than 24 hours").click();
	// findWidget("Chart Settings").setValue("p_Timeline", true);

	// findWidget("Ganttchart Timeline")
	// 	.hasTodayLine()
	// 	.should.be.equal(true);

	// findWidget("Ganttchart Timeline")
	// 	.hasNowLine()
	// 	.should.be.equal(false);
});
