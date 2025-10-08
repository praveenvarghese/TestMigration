/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validating filters can be applied and modified in pro mode", () => {
	loadPage("Main Project/home");

	let expected_values;

	findWidget("PepperData").getColFilter(0);

	getFilter().editFilter({ index: "0", rule: "is less than or equal (<=)", value: "8000" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "is less than or equal (<=)",
				value: "8000",
				//status: "active",
			},
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "show top", value: "3" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "show top",
				value: "3",
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

	expected_values = [
		["50,000 Scoville"],
		["50,000 Scoville"],
		["8,000 Scoville"],
		["108,000 Scoville"],
	];

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
				rule: "show top",
				value: "3",
				//status: "active",
			},
			{
				type: "column",
				field: "HeatIndex",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "show bottom", value: "3" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "HeatIndex",
				rule: "show bottom",
				value: "3",
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

	expected_values = [
		["2,500 Scoville"],
		["5,000 Scoville"],
		["8,000 Scoville"],
		["15,500 Scoville"],
	];

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
