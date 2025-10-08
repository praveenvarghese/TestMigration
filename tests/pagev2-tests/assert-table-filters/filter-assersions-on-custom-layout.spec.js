/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Filter functionality in custom layout page", () => {
	loadPage("Main Project/ItemACtionCustomPage");

	findWidget("Table1")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("Table1")
		.getColHeaderCell(1, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("Table1")
		.getColHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Table1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["30.79", "7.78", "13.74"],
			["32.57", "9.98", "2.21"],
			["31.69", "-7.44", "-8.10"],
			["30.38", "13.64", "-11.32"],
			["32.26", "-6.18", "-12.79"],
			["31.32", "12.52", "2.05"],
			["33.26", "0.00", "12.21"],
			["30.57", "0.00", "13.80"],
			["31.50", "0.00", "26.41"],
			["34.81", "0.00", "-6.72"],
			["34.66", "0.00", "-12.62"],
			["30.13", "0.00", "3.23"],
		]);

	findWidget("Table1").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "1 - IA_JobDuration",
				rule: "is greater than (>)",
				value: "30",
			},
			{ type: "column", field: "1 - IA_JobDuration", rule: "is equal to (=)", value: "" },
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("table2")
		.getTableFilterButton()
		.should.be.eql("None");
});
