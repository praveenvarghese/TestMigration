/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting job gets highlighted on gantt chart.", () => {
	loadPage("Main Project/Gantt Page");

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorMod16Ord4.rgb);

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.click();

	findWidget("The Gantt Chart")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorMod16Ord4.rgb);
});
