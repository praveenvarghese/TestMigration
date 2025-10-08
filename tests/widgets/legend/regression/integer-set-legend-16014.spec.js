/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Selectionbox with Element Text", () => {
	// Model: MealRus

	loadPage("Main Project/Selection Widgets/Legend Bug 16014");

	findWidget("epNonLocal")
		.getValue()
		.should.be.equal("2");

	findWidget("epNonLocal").select("3");

	findWidget("epNonLocal")
		.getValue()
		.should.be.equal("3");

	findWidget("Scalar")
		.getValue("epNonLocal")
		.should.be.equal("3");

	findWidget("epLocalEP").select("5");

	findWidget("epLocalEP")
		.getValue()
		.should.be.equal("5");

	findWidget("Scalar")
		.getValue("epLocalEP")
		.should.be.equal("5");
});
