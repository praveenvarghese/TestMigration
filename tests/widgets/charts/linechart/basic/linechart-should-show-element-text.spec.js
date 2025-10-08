/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Linechart should show element text", () => {
	loadPage("Main Project/Charts/Linechart");

	findWidget("Linechart")
		.getHeaderRow(2)
		.getLabels()
		.should.include.members(["Beef Stroganoff", "Fattoush Salad"]);

	findWidget("Linechart")
		.findPoints(["April 2013", "Ingredient Price", "Grilled Salmon"])
		.should.include.something.like({
			label: "(April 2013,Ingredient Price,Grilled Salmon,Salmon & Rice)",
			value: "1,422.00 $/kg",
		});
});
