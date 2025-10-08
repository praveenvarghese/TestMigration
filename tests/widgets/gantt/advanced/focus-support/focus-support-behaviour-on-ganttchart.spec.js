/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for focus support behaviour on Gantt chart.", () => {
	loadPage("Main Project/Gantt Page");

	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("");

	findWidget("The Selected Person")
		.getValue()
		.should.be.equal("");

	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.click();

	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("Spare Time");

	findWidget("The Selected Person")
		.getValue()
		.should.be.equal("Piet van Steenis");

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.click()
		.click();

	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("Spare Time");

	findWidget("The Selected Person")
		.getValue()
		.should.be.equal("Klaas Vaak");
});
