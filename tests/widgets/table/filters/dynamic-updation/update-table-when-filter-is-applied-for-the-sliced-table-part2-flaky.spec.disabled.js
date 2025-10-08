/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Validating sliced table content updation when filter is applied", () => {
	loadPage("Main Project/filterTable");

	findWidget("SlicedScalar")
		.getValue()
		.should.contain("01");

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [
		["8.00", "1.00", "3.00", "4.00", "7.00", "8.00", "5.00", "1.00", "8.00", "1.00"],
		["8.00", "3.00", "2.00", "0.00", "8.00", "4.00", "8.00", "1.00", "5.00", "6.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterTable").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "01",
				rule: "is greater than (>)",
				value: "5",
				//status: "active",
			},
			{
				type: "column",
				field: "01",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("SlicedScalar").setValue("02");

	expected_values = [
		["7.00", "7.00", "10.00", "5.00", "7.00", "5.00", "2.00", "4.00", "3.00", "7.00"],
		["9.00", "8.00", "4.00", "4.00", "2.00", "3.00", "6.00", "1.00", "8.00", "6.00"],
		["10.00", "9.00", "8.00", "2.00", "2.00", "3.00", "5.00", "2.00", "3.00", "0.00"],
		["8.00", "3.00", "6.00", "5.00", "9.00", "1.00", "7.00", "9.00", "9.00", "10.00"],
		["10.00", "4.00", "4.00", "8.00", "9.00", "9.00", "4.00", "2.00", "3.00", "1.00"],
		["9.00", "4.00", "0.00", "4.00", "8.00", "3.00", "6.00", "6.00", "10.00", "6.00"],
		["9.00", "7.00", "6.00", "3.00", "7.00", "3.00", "3.00", "7.00", "4.00", "1.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
