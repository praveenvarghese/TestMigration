/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating each numerical filter rules", () => {
	loadPage("Main Project/home");

	findWidget("PepperData").getColFilter(0);

	getFilter().dragAndDropRule("1", "0");

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
