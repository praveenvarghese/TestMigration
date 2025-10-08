/*!
 * @AIMMS_FILE=models/Bugs/GLc3547-QuantityInRepairLoop/InventoryPlanning/InventoryPlanning.aimms
 */

scenario("Table slicing identifier to various choices should be applied correctly", () => {
	loadPage("Main Project/Start");
	getCurrentPage().should.be.equal("Main Project/Start");

	loadPage("Main Project/Phase 2/Create Scenario");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Create Scenario");

	loadPage("Main Project/Phase 2/Resource Product Data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Resource Product Data");

	findWidget("IN_ResourceProductData")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["2.00 day", "2.00", "0.00", "0.05", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "1.00", "0.00", "0.04", ""],
			["", "", "", "", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", ""],
			["", "", "", "", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", ""],
			["", "", "", "", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "2.00", "0.00", "0.04", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "1.00", "0.00", "0.04", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", ""],
			["", "", "", "", "0.00"],
			["1.00 day", "0.00", "0.01", "0.02", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "2.00", "0.00", "0.05", ""],
			["", "", "", "", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", ""],
			["", "", "", "", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", ""],
			["", "", "", "", "0.00"],
			["1.00 day", "0.00", "0.01", "0.02", ""],
			["", "", "", "", "0.00"],
		]);

	/* After this initial slicing, slice further to element parameter*/
	findWidget("IN_ResourceProductData")
		.getSlicingOptionEditor()
		.setSlices({
			identifier: "QuantityInRepairLoop",
			slice: [
				{
					index: "p",
					type: "element-parameter",
					value: "CurrentPeriod",
				},
			],
		});

	findWidget("IN_ResourceProductData")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["2.00 day", "2.00", "0.00", "0.05", "0.00"],
			["2.00 day", "1.00", "0.00", "0.04", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", "0.00"],
			["2.00 day", "2.00", "0.00", "0.04", "0.00"],
			["2.00 day", "1.00", "0.00", "0.04", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", "0.00"],
			["1.00 day", "0.00", "0.01", "0.02", "0.00"],
			["2.00 day", "2.00", "0.00", "0.05", "0.00"],
			["0.00 day", "0.00", "0.00", "0.00", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", "0.00"],
			["2.00 day", "0.00", "0.01", "0.01", "0.00"],
			["1.00 day", "0.00", "0.01", "0.02", "0.00"],
		]);
});
