/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Barchart should show element text", () => {
	loadPage("Main Project/Charts/Barchart");

	findWidget("Barchart")
		.getHeaderRow(2)
		.getLabels()
		.should.include.members(["Beef Stroganoff", "Fattoush Salad"]);

	findWidget("Barchart")
		.findBars(["Ingredient Price", "Salmon & Rice", "Grilled Salmon", "April 2013"])
		.should.include.something.like({
			label: "(Ingredient Price,Salmon & Rice,Grilled Salmon,April 2013,13)",
			annotations: ["DayNumbers"],
			value: "30.00 $/kg",
		});
});
