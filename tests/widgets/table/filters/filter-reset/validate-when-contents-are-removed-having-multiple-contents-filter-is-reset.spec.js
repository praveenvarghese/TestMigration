/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Validating filter gets reset when one of content is removed ", () => {
	loadPage("Main Project/table/filter-focus-support?table-v2=false");

	findWidget("multiContentTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("multiContentTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("multiContentTable")
		.getColHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [
		["1.00", "Beef Stroganoff", "4.80 $/meal"],
		["1.00", "Beef Stroganoff", "4.60 $/meal"],
		["1.00", "Beef Stroganoff", "4.40 $/meal"],
		["1.00", "Beef Stroganoff", "4.30 $/meal"],
		["1.00", "Beef Stroganoff", "4.00 $/meal"],
		["1.00", "Beef Stroganoff", "3.60 $/meal"],
		["1.00", "Beef Stroganoff", "4.00 $/meal"],
	];

	findWidget("multiContentTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("multiContentTable")
		.getContentsOptionEditor()
		.removeSpecificItemFromCurrentContents("SelectMeal");

	findWidget("multiContentTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("multiContentTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("multiContentTable")
		.getColHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	expected_values = [
		["Beef Stroganoff", "5.00 $/meal"],
		["Beef Stroganoff", "4.80 $/meal"],
		["Beef Stroganoff", "4.60 $/meal"],
		["Beef Stroganoff", "4.40 $/meal"],
		["Beef Stroganoff", "4.30 $/meal"],
		["Beef Stroganoff", "4.00 $/meal"],
		["Beef Stroganoff", "3.60 $/meal"],
		["Beef Stroganoff", "4.00 $/meal"],
		["Chicken Taco", "3.30 $/meal"],
		["Chicken Taco", "3.00 $/meal"],
		["Chicken Taco", "3.40 $/meal"],
		["Chicken Taco", "3.30 $/meal"],
		["Chicken Taco", "2.80 $/meal"],
		["Chicken Taco", "2.40 $/meal"],
		["Chicken Taco", "2.70 $/meal"],
		["Grilled Salmon", "4.60 $/meal"],
		["Grilled Salmon", "4.10 $/meal"],
		["Grilled Salmon", "4.40 $/meal"],
		["Grilled Salmon", "4.40 $/meal"],
		["Grilled Salmon", "4.00 $/meal"],
	];

	findWidget("multiContentTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/table/filter-focus-support");

	findWidget("multiContentTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("multiContentTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("multiContentTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("multiContentTable")
		.getColHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("multiContentTable")
		.getContentsOptionEditor()
		.addItemFromAvailableContents("SelectMeal");

	expected_values = [
		["Beef Stroganoff", "5.00 $/meal", "0.00"],
		["Beef Stroganoff", "4.80 $/meal", "1.00"],
		["Beef Stroganoff", "4.60 $/meal", "1.00"],
		["Beef Stroganoff", "4.40 $/meal", "1.00"],
		["Beef Stroganoff", "4.30 $/meal", "1.00"],
		["Beef Stroganoff", "4.00 $/meal", "1.00"],
		["Beef Stroganoff", "3.60 $/meal", "1.00"],
		["Beef Stroganoff", "4.00 $/meal", "1.00"],
		["Chicken Taco", "3.30 $/meal", "1.00"],
		["Chicken Taco", "3.00 $/meal", "1.00"],
		["Chicken Taco", "3.40 $/meal", "1.00"],
		["Chicken Taco", "3.30 $/meal", "1.00"],
		["Chicken Taco", "2.80 $/meal", "1.00"],
		["Chicken Taco", "2.40 $/meal", "1.00"],
		["Chicken Taco", "2.70 $/meal", "1.00"],
		["Grilled Salmon", "4.60 $/meal", "1.00"],
		["Grilled Salmon", "4.10 $/meal", "1.00"],
		["Grilled Salmon", "4.40 $/meal", "1.00"],
		["Grilled Salmon", "4.40 $/meal", "1.00"],
		["Grilled Salmon", "4.00 $/meal", "1.00"],
	];

	findWidget("multiContentTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("multiContentTable").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "MealToProductionLineMapping",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
