/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validating filters can be applied and modified in pro mode", () => {
	loadPage("Main Project/home");

	let expected_values;

	findWidget("PepperData").getColFilter(0);

	getFilter().editFilter({ index: "0", rule: "is not equal to (!=)", value: "50000" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is not equal to (!=)",
				value: "50000",
				//status: "active",
			},
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is less than (<)", value: "5000" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is less than (<)",
				value: "5000",
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

	expected_values = [["2,500 Scoville"], ["2,500 Scoville"]];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	//
	findWidget("PepperData").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is less than (<)",
				value: "5000",
				//status: "active",
			},
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is greater than (>)", value: "25000" });

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

	expected_values = [["50,000 Scoville"], ["50,000 Scoville"], ["100,000 Scoville"]];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
