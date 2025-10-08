/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"Check for focus support behaviour on Gantt chart, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/Gantt Page");

		findWidget("The Gantt Chart").goInFullScreenMode();

		findWidget("The Gantt Chart").isFullScreen().should.be.true;

		findWidget("The Gantt Chart")
			.findResource(["Klaas Vaak"])
			.findJob("Spare Time")
			.click();

		findWidget("The Gantt Chart").exitFullScreenMode();

		findWidget("The Gantt Chart").isFullScreen().should.be.false;

		findWidget("The Selected Job")
			.getValue()
			.should.be.equal("Spare Time");

		findWidget("The Selected Person")
			.getValue()
			.should.be.equal("Klaas Vaak");

		findWidget("The Gantt Chart")
			.findResource(["Piet van Steenis"])
			.findJob("Spare Time")
			.click();

		findWidget("The Gantt Chart").goInFullScreenMode();

		findWidget("The Gantt Chart").isFullScreen().should.be.true;

		findWidget("The Gantt Chart")
			.findResource(["Jan Klaasen"])
			.findJob("Sleeping")
			.click()
			.click();

		findWidget("The Gantt Chart").exitFullScreenMode();

		findWidget("The Gantt Chart").isFullScreen().should.be.false;

		findWidget("The Selected Job")
			.getValue()
			.should.be.equal("Sleeping");

		findWidget("The Selected Person")
			.getValue()
			.should.be.equal("Jan Klaasen");
	}
);
