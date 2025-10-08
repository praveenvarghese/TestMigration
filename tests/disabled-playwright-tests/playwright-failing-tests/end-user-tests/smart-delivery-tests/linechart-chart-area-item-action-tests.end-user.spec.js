/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Verifying Item action action is displayed on line chart Area", () => {
	loadPage("Main Project/Charts/lineChartArea");

	findWidget("firstLine")
		.getSpecificArea("AllInfo")
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	findWidget("firstLine")
		.getSpecificArea("AllInfo")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("firstLine")
		.getSpecificArea("SomeInfo")
		.rightClick(30, 0)
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	findWidget("firstLine")
		.getSpecificArea("OtherInfo")
		.rightClick()
		.isItemActionDisplayed().should.be.false;
});
