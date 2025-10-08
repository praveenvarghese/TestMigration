/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Create a scalar and set it to compact scalar", () => {
	loadPage("Main Project/Scalar/Element Text");

	findWidget("element-text-scalar")
		.getValue()
		.should.be.equal("Chicken Taco");

	findWidget("element-text-scalar").setValue("Fattoush Salad");

	findWidget("element-text-scalar")
		.getValue()
		.should.be.equal("Fattoush Salad");
});
