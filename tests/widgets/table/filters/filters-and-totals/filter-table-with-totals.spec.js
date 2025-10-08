/*!
 * @AIMMS_FILE=models/FilterProblem/FilterProblem.aimms
 */

scenario("Filtering on Tables with aggregators and totals present", () => {
	loadPage("Main Project/home");

	findWidget("CountryData")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("CountryData")
		.getRowHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	/* Verify that the aggregators + totals are as expected */
	findWidget("CountryData")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("195.00");

	findWidget("CountryData")
		.getCell(6, 0)
		.getValue()
		.should.be.equal("195.00");

	findWidget("CountryData")
		.getCell(7, 0)
		.getValue()
		.should.be.equal("5.00");

	findWidget("CountryData")
		.getCell(7, 0)
		.getValue()
		.should.be.equal("5.00");

	/* Add a filter, such that the aggregators and the totals will differ */
	findWidget("CountryData").getColFilter(0);
	getFilter().editFilter({ index: "1", rule: "is less than (<)", value: "40" });
	findDialog()
		.findButton("Apply and Close")
		.click();

	/* Verify that the aggregators + totals are as expected */
	findWidget("CountryData")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("87.00");

	findWidget("CountryData")
		.getCell(4, 0)
		.getValue()
		.should.be.equal("195.00");

	findWidget("CountryData")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("3.00");

	findWidget("CountryData")
		.getCell(6, 0)
		.getValue()
		.should.be.equal("5.00");
});
