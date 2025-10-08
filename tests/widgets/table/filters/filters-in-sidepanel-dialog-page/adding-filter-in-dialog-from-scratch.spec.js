/*!
 * @AIMMS_FILE=models/FilterDialogPage/FastEditingTest.aimms
 */

scenario("Apply filter from in dialog page table", () => {
	loadPage("Main Project/FilterForDialog");

	findWidget("OpenDialogWithoutFilters_1").click();

	findWidget("test_1")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("test_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("test_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["50,000.00 Scoville"],
			["5,000.00 Scoville"],
			["50,000.00 Scoville"],
			["8,000.00 Scoville"],
			["2,500.00 Scoville"],
		]);

	findWidget("test_1").getColFilter(0);

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

	findWidget("test_1")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("test_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("test_1")
		.getGridValues()
		.should.be.shallowDeepEqual([["50,000.00 Scoville"], ["50,000.00 Scoville"]]);

	findWidget("test_1").getColFilter(0);

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

	findWidget("test_1")
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

	findWidget("test_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["5,000.00 Scoville"],
			["8,000.00 Scoville"],
			["2,500.00 Scoville"],
		]);
});
