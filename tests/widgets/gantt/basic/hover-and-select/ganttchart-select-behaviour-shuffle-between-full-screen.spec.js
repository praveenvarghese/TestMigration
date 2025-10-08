/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select behaviour on Gantt chart is retained shuffling between full screen and normal view.",
	() => {
		loadPage("Main Project/Gantt Page");

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("Spare Time")
			.click();

		findWidget("The Gantt Chart").goInFullScreenMode();

		// Wait for Gantt chart to load
		findWidget("The Gantt Chart").isFullScreen().should.be.true;

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("Spare Time")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("The Gantt Chart")
			.findResource(["Jan Klaasen"])
			.findJob("Spare Time")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("Spare Time")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("The Gantt Chart")
			.findResource(["Jan Klaasen"])
			.findJob("Spare Time")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("The Gantt Chart")
			.findResource(["Piet van Steenis"])
			.findJob("Spare Time")
			.click();

		findWidget("The Gantt Chart").exitFullScreenMode();

		// Wait for Gantt chart to load
		findWidget("The Gantt Chart").isFullScreen().should.be.false;

		findWidget("The Gantt Chart")
			.findResource(["Piet van Steenis"])
			.findJob("Spare Time")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("a7")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("The Gantt Chart")
			.findResource(["Piet van Steenis"])
			.findJob("Spare Time")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("a7")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("The Gantt Chart")
			.findResource(["Piet van Steenis"])
			.findJob("Spare Time")
			.click();

		findWidget("The Gantt Chart").goInFullScreenMode();

		// Wait for Gantt chart to load
		findWidget("The Gantt Chart").isFullScreen().should.be.true;

		findWidget("The Gantt Chart")
			.findResource(["Piet van Steenis"])
			.findJob("Spare Time")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("a7")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");
	}
);
