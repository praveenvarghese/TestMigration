/*!
 * @AIMMS_FILE=models/FilterDialogPage/FastEditingTest.aimms
 */

scenario("Editing the filter in a dialog Page", () => {
	loadPage("Main Project/FilterForDialog");

	findWidget("OpenDialogWithoutFilters").click();

	findWidget("PepperData_1")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("PepperData_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("PepperData_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["50,000 Scoville"],
			["50,000 Scoville"],
			["100,000 Scoville"],
		]);

	findWidget("PepperData_1")
		.getTableFilterButton()
		.click();

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{ type: "column", field: "HeatIndex", rule: "is greater than (>)", value: ["25000"] },
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

	findWidget("PepperData_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["5,000 Scoville"],
			["8,000 Scoville"],
			["2,500 Scoville"],
			["15,500 Scoville"],
		]);
});
