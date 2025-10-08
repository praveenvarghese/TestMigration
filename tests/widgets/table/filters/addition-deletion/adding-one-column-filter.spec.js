/*!
 * @AIMMS_FILE=models/FastTableEditing/FastTableEditing.aimms
 */

scenario("Table with single column filter", () => {
	loadPage("Main Project/home?_aimms_only_data_filter=true");

	findWidget("ValDepTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("ValDepTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	let expected_values = [
		["2.00", "4.00"],
		["3.00", "5.00"],
		["4.00", "6.00"],
		["5.00", "7.00"],
		["6.00", "8.00"],
		["7.00", "9.00"],
	];

	findWidget("ValDepTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("ValDepTable").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([{ type: "column", field: "p_Val", rule: "is equal to (=)", value: "" }]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("ValDepTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("ValDepTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("ValDepTable").getColFilter(0);

	getFilter().addFilter({ rule: "is equal to (=)", value: "2" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "p_Val",
				rule: "is equal to (=)",
				value: "2",
				//status: "active",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("ValDepTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("ValDepTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["2.00", "4.00"]];

	findWidget("ValDepTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	openAppManager().navigateToPage("Main Project/table");

	openAppManager().navigateToPage("Main Project/home");

	findWidget("ValDepTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("ValDepTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("ValDepTable").getColFilter(0);

	findWidget("ValDepTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{ type: "column", field: "p_Val", rule: "is equal to (=)", value: "2" },
			{ type: "column", field: "p_Val", rule: "is equal to (=)", value: "" },
		]);
});
