/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Filter functionality in classic layout page", () => {
	loadPage("Main Project/FilterClassicPage?_aimms_only_data_filter=true");

	findWidget("table1_2")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("table1_2")
		.getColHeaderCell(1, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("table1_2")
		.getColHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("table1_2")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["173.01", "202.45", "248.49"],
			["165.35", "205.71", "215.45"],
			["142.93", "154.08", "235.84"],
			["149.19", "225.24", "204.90"],
			["162.19", "0.00", "251.50"],
			["214.17", "0.00", "210.30"],
			["243.81", "0.00", "259.24"],
		]);

	findWidget("table1_2").getColFilter(2);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{ type: "column", field: "4 - IA_JobStart", rule: "is greater than (>)", value: "200" },
			{ type: "column", field: "4 - IA_JobStart", rule: "is equal to (=)", value: "" },
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("table2_2")
		.getTableFilterButton()
		.should.be.eql("None");
});
