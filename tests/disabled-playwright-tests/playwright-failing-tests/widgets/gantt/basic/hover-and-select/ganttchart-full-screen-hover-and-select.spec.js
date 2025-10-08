/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Hover and select behaviour on Gantt chart in full screen mode.", () => {
	loadPage("Main Project/Gantt Page");

	// Get onto full screen mode
	findWidget("The Gantt Chart").goInFullScreenMode();

	// Wait for Gantt chart to load
	findWidget("The Gantt Chart").isFullScreen().should.be.true;

	// Verify the default style on "Klaas Vaak - a7" task
	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("a7")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	// Verify the default style on "Jan Klaasen - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	// Hover "Jan Klaasen - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.hover();

	// Hover "Klaas Vaak - a7" task
	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("a7")
		.hover();

	// Verify "Klaas Vaak - a7" task has "is-hover" class
	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("a7")
		.hasClass("is-hover")
		.should.be.equal(true);

	// Verify CSS style applied to "Klaas Vaak - a7" task
	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("a7")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	// Verify "Jan Klaasen - Spare Time" task does not have "is-hover" class
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.hasClass("is-hover")
		.should.be.equal(false);

	// Verify CSS style applied to "Jan Klaasen - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.9");

	// Verify has "is-active" class
	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.click()
		.hasClass("is-active")
		.should.be.equal(true);

	// Verify CSS style applied to "Piet van Steenis - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	// Verify "Jan Klaasen - Spare Time" task does not have "is-active" class
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.hasClass("is-active")
		.should.be.equal(false);

	// Verify CSS style applied to "Jan Klaasen - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.7");

	// Click on "Piet van Steenis - Spare Time" task.
	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.click();

	//Move the mouse cursor to menu bar button
	mouseHoverMenuButton();

	// Verify "Piet van Steenis - Spare Time" task does not have "is-active" class
	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.hasClass("is-active")
		.should.be.equal(false);

	// Verify "Jan Klaasen - Spare Time" task does not have "is-active" class
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.hasClass("is-active")
		.should.be.equal(false);

	// Verify CSS style applied to "Piet van Steenis - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	// Verify CSS style applied to "Jan Klaasen - Spare Time" task
	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");
});
