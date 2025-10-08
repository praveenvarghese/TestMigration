/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Hover and select behaviour on Gantt chart.", () => {
	loadPage("Main Project/Gantt Page");

	mouseHoverMenuButton();

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Working")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Working")
		.hover();

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.hover();

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.hasClass("is-hover")
		.should.be.equal(true);

	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Working")
		.hasClass("is-hover")
		.should.be.equal(false);

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Working")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.9");

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.click()
		.hasClass("is-active")
		.should.be.equal(true);

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Sleeping")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Working")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Sleeping")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.7");

	findWidget("The Gantt Chart")
		.findResource(["Jan Klaasen"])
		.findJob("Working")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.7");

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.click();
});
