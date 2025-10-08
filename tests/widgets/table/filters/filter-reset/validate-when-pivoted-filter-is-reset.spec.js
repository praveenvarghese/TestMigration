/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating filter gets reset when pivoted", () => {
	loadPage("Main Project/home");

	findWidget("PepperData")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("PepperData")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [["50,000 Scoville"], ["50,000 Scoville"], ["100,000 Scoville"]];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("PepperData")
		.dragIndex("p")
		.dropIn("totals");

	expected_values = [["115,500 Scoville"]];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("PepperData")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("PepperData")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("PepperData").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("PepperData")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("PepperData")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	openAppManager().navigateToPage("Main Project/TablePage");

	openAppManager().navigateToPage("Main Project/home");

	findWidget("PepperData")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("PepperData")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("PepperData")
		.dragIndex("p")
		.dropIn("Rows");

	expected_values = [
		["50,000 Scoville"],
		["5,000 Scoville"],
		["50,000 Scoville"],
		["8,000 Scoville"],
		["2,500 Scoville"],
		["115,500 Scoville"],
	];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("PepperData")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("PepperData")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("PepperData").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
