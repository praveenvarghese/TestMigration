/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @HARDWARE_SHARE=large
 * @DURATION=medium
 */

// Test Coverage for https://gitlab.aimms.com/aimms/customer-tickets/-/issues/4125#note_131560

scenario("Asserting Slicing option-editor of EquipmentInfo table is not frozen.", () => {
	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser?table-v2=false");

	// Wait for "EquipmentInfo" table to be loaded with data.
	waitUntilDataLoadedOnWidget("EquipmentInfo", 240000);

	// Verify EquipmentInfo Table is NOT empty
	findWidget("EquipmentInfo").getEmptyWidgetMessage().should.not.exist;

	// Click on cell(0,0) of EquipmentInfo Table
	findWidget("EquipmentInfo")
		.getCell(0, 0)
		.click();

	// Verify AttributeTags Table is NOT empty
	findWidget("AttributeTags").getEmptyWidgetMessage().should.not.exist;

	// Apply some dummy slicing on the table
	findWidget("EquipmentInfo")
		.getSlicingOptionEditor(20000)
		.setSlices({
			identifier: "EBX::PS_Euipment_Info",
			slice: [
				{
					index: "EBX::i_EBX_MDF_EquipmentID",
					type: "fixed-element",
					value: "60449752738A45A5A5D4465223891E73",
				},
			],
		});

	// Verify EquipmentInfo Table is now empty
	findWidget("EquipmentInfo").getEmptyWidgetMessage().should.exist;

	// Assert data on AttributeTags Table.
	findWidget("AttributeTags")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["BOP.L4.CO.DY.AA121.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA122.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA123.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA124.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA125.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA126.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA221.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA222.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA223.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA224.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA225.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA226.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA321.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA322.RAW_PV", "", "0.00"],
			["BOP.L4.CO.DY.AA323.RAW_PV", "", "0.00"],
		]);
});
