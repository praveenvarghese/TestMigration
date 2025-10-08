/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating table filter when dropdown data is present", () => {
	loadPage("Main Project/newFilterPage");

	findWidget("DropdownFilter")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DropdownFilter")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [["red", "green", "", "yellow"]];

	findWidget("DropdownFilter")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("DropdownFilter").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Winter",
				rule: "contains",
				value: "red",
				//status: "active",
			},
			{
				type: "column",
				field: "Winter",
				rule: "is equal to (=)",
				value: "",
				//status: "active",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "contains", value: "green" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	expected_values = [["green", "", "red", "red"]];

	findWidget("DropdownFilter")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("DropdownFilter")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DropdownFilter")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("DropdownFilter").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Winter",
				rule: "contains",
				value: "green",
				//status: "active",
			},
			{
				type: "column",
				field: "Winter",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
