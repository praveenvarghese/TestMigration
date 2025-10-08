/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario("Test asserting job gets highlighted on gantt chart.", () => {
	loadPage("Main Project/Gantt Page");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorMod16Ord4.rgb); //"rgb(105, 56, 35)");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.click();

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getCSSStyleProperty("fill") // fill changes upon click
		.should.be.equal(colors.colorPureRed.rgb); //"rgb(255, 0, 0)"), custom annotation 'exceeds-time-limit';
});
