/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating table filter when date time data is present", () => {
	loadPage("Main Project/newFilterPage");

	findWidget("filterDateTime")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterDateTime")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [
		["2020-02-16 00:00", "", "2020-02-11 00:00"],
		["", "2020-07-02 00:00", "2020-02-27 00:00"],
		["", "", "2020-12-29 00:00"],
	];

	findWidget("filterDateTime")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterDateTime").getColFilter(2);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "contains",
				value: "00",
				//status: "active"
			},
			{
				type: "column",
				field: "yellow",
				rule: "is equal to (=)",
				value: "",
				//status: "active",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "contains", value: "12" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	expected_values = [["", "", "2020-12-29 00:00"]];

	findWidget("filterDateTime")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterDateTime")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterDateTime")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);
});
