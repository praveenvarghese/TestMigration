/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table with single row filter and single column filter in the same table", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Filter From Scratch");

	findWidget("filterFromScratch")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("filterFromScratch")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	let expected_values = [
		["50,000.00 Scoville"],
		["5,000.00 Scoville"],
		["50,000.00 Scoville"],
		["8,000.00 Scoville"],
		["2,500.00 Scoville"],
	];

	findWidget("filterFromScratch")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterFromScratch").getColFilter(0);

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

	getFilter().addFilter({ rule: "is equal to (=)", value: "50000" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filterFromScratch")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterFromScratch")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["50,000.00 Scoville"], ["50,000.00 Scoville"]];

	findWidget("filterFromScratch")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterFromScratch").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "50000",
			},
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

	findWidget("filterFromScratch")
		.getTableFilterButton()
		.click();

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "50000",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is not equal to (!=)", value: "50000" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is not equal to (!=)",
				value: "50000",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	expected_values = [["5,000.00 Scoville"], ["8,000.00 Scoville"], ["2,500.00 Scoville"]];

	findWidget("filterFromScratch")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterFromScratch")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterFromScratch")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterFromScratch")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("filterFromScratch")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("filterFromScratch")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	expected_values = [
		["50,000.00 Scoville"],
		["5,000.00 Scoville"],
		["50,000.00 Scoville"],
		["8,000.00 Scoville"],
		["2,500.00 Scoville"],
	];

	findWidget("filterFromScratch")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
