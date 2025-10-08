/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check on right click store focus is set on Gantt chart.", () => {
	loadPage("Main Project/Gantt Page");

	//Validate Store focus are not set when widget is loaded
	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("");

	findWidget("The Selected Person")
		.getValue()
		.should.be.equal("");

	//Validate on right click store focus is set and item is opened
	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	findWidget("The Gantt Chart")
		.findResource(["Piet van Steenis"])
		.findJob("Spare Time")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("Spare Time");

	findWidget("The Selected Person")
		.getValue()
		.should.be.equal("Piet van Steenis");

	//Validate on right click on another jopstore focus is set and item is opened
	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.rightClick(10, 10)
		.isItemActionDisplayed().should.be.true;

	findWidget("The Gantt Chart")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.rightClick(10, 10)
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("Spare Time");

	findWidget("The Selected Person")
		.getValue()
		.should.be.equal("Klaas Vaak");
});
