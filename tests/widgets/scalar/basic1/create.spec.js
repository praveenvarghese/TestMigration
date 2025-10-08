/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Create a scalar", () => {
	loadPage("Main Project/Scalar/Normal");

	createWidget("scalar", ["IngredientPrice"], "normal-scalar");

	findWidget("normal-scalar").should.be.a.widgetOfType("scalar");

	findWidget("normal-scalar")
		.getValue()
		.should.be.equal("1,646.50 $/kg");
});
