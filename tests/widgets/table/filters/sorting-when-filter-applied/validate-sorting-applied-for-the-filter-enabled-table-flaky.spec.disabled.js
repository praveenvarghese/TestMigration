/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Validating sorting can be applied when filter is applied", () => {
	loadPage("Main Project/filterTable");

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(false);

	let expected_values = [
		["8.00", "1.00", "3.00", "4.00", "7.00", "8.00", "5.00", "1.00", "8.00", "1.00"],
		["8.00", "3.00", "2.00", "0.00", "8.00", "4.00", "8.00", "1.00", "5.00", "6.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterTable").sortColumn(0, "increase");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

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

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	expected_values = [
		["7.00", "7.00", "10.00", "5.00", "7.00", "5.00", "2.00", "4.00", "3.00", "7.00"],
		["8.00", "3.00", "6.00", "5.00", "9.00", "1.00", "7.00", "9.00", "9.00", "10.00"],
		["9.00", "8.00", "4.00", "4.00", "2.00", "3.00", "6.00", "1.00", "8.00", "6.00"],
		["9.00", "4.00", "0.00", "4.00", "8.00", "3.00", "6.00", "6.00", "10.00", "6.00"],
		["9.00", "7.00", "6.00", "3.00", "7.00", "3.00", "3.00", "7.00", "4.00", "1.00"],
		["10.00", "9.00", "8.00", "2.00", "2.00", "3.00", "5.00", "2.00", "3.00", "0.00"],
		["10.00", "4.00", "4.00", "8.00", "9.00", "9.00", "4.00", "2.00", "3.00", "1.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterTable").sortColumn(0, "decrease");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedDecreasing"])
		.should.be.equal(true);

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

	// findWidget("SlicedScalar").setValue("03");

	// findWidget("filterTable").getTableFilterButton().should.not.be.eql("None");

	// findWidget("filterTable")
	// 	.getColHeaderCell(0, 0)
	// 	.hasFlags(["filtered"])
	// 	.should.be.equal(true);

	// findWidget("filterTable")
	// 	.getColHeaderCell(0, 0)
	// 	.hasFlags(["sortedDecreasing"])
	// 	.should.be.equal(true);

	// expected_values = [
	// 	["10.00", "4.00", "4.00", "8.00", "9.00", "9.00", "4.00", "2.00", "3.00", "1.00"],
	// 	["10.00", "9.00", "8.00", "2.00", "2.00", "3.00", "5.00", "2.00", "3.00", "0.00"],
	// 	["9.00", "7.00", "6.00", "3.00", "7.00", "3.00", "3.00", "7.00", "4.00", "1.00"],
	// 	["9.00", "4.00", "0.00", "4.00", "8.00", "3.00", "6.00", "6.00", "10.00", "6.00"],
	// 	["9.00", "8.00", "4.00", "4.00", "2.00", "3.00", "6.00", "1.00", "8.00", "6.00"],
	// 	["8.00", "3.00", "6.00", "5.00", "9.00", "1.00", "7.00", "9.00", "9.00", "10.00"],
	// 	["7.00", "7.00", "10.00", "5.00", "7.00", "5.00", "2.00", "4.00", "3.00", "7.00"],
	// ];

	// findWidget("filterTable")
	// 	.getGridValues()
	// 	.should.be.shallowDeepEqual(expected_values);
});
