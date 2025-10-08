/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating table content updation when filter is applied", () => {
	loadPage("Main Project/home?_aimms_only_data_filter=true");

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

	findWidget("PepperData").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is greater than (>)",
				value: "25000",
				//status: "active",
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

	findWidget("test")
		.getCell(0, 0)
		.setValue("26000");

	findWidget("PepperData")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("PepperData")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["26,000 Scoville"], ["50,000 Scoville"], ["76,000 Scoville"]];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("PepperData").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is greater than (>)",
				value: "25000",
				//status: "active",
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

	findWidget("test")
		.getCell(0, 0)
		.setValue("24000");

	expected_values = [["50,000 Scoville"], ["50,000 Scoville"]];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	openAppManager().navigateToPage("Main Project/TablePage");

	openAppManager().navigateToPage("Main Project/home");

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("PepperData").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is greater than (>)",
				value: "25000",
				//status: "active",
			},
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
