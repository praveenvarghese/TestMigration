/*!
 * @AIMMS_FILE=models/Bugs/GL802-VesselSchedule/VesselSchedule.aimms
 */

scenario("Change value of Number of Decimals and validate table contents", () => {
	loadPage("Main Project/Location Data?_aimms_only_persistence.write=true");

	findWidget("LocationCostTableV2")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("677.00 $/day");

	findWidget("LocationCostTableV2")
		.openTableContentsOptionEditor()
		.modifyContents(
			0,
			null,
			null,
			{
				value: "0",
				type: "literal",
			},
			null,
			null
		);

	findWidget("LocationCostTableV2").closeOptionDialog();

	findWidget("LocationCostTableV2")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("677 $/day");

	loadPage("Main Project/Location Data?_aimms_only_persistence.write=true");

	waitForBackgroundActionToComplete();

	findWidget("LocationCostTableV2")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("677 $/day");

	findWidget("LocationCostTableV2")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("124.00 $");

	findWidget("LocationCostTableV2")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("1,178.00 $");

	findWidget("LocationCostTableV2")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("224.00 $");

	findWidget("LocationCostTableV2")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("1,527.00 $");
});
