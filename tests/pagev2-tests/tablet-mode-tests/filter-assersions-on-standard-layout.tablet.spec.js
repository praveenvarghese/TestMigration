/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Filter functionality in standard layout page", () => {
	loadPage("Main Project/FiltersStandardPage?_aimms_only_data_filter=true");

	findWidget("table1_1")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("table1_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("table1_1")
		.getColHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("table1_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["173.01", "202.45", "248.49"],
			["165.35", "205.71", "215.45"],
			["142.93", "154.08", "235.84"],
			["149.19", "225.24", "204.90"],
			["123.71", "0.00", "190.83"],
			["165.79", "0.00", "140.03"],
			["162.19", "0.00", "251.50"],
			["191.56", "0.00", "168.21"],
			["190.68", "0.00", "150.79"],
		]);

	findWidget("table1_1").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{ type: "column", field: "1", rule: "is less than (<)", value: "200" },
			{ type: "column", field: "1", rule: "is equal to (=)", value: "" },
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("table2_1")
		.getTableFilterButton()
		.should.be.eql("None");
});
