/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020/HeinekenBCM08042020.aimms
 * @WEBUI_MODE=end_user
 * @HARDWARE_SHARE=medium
 */

scenario("Pack Type and Size page tests", () => {
	loadPage("Main Project/Masterdata/Pack Type & Size");

	//Validate widgets displayed in the home page
	findWidget("packs_1")
		.getVisibleWidgets()
		.should.eql([
			"GR_Pack_Type_Information",
			"Table_MasterData_Pack_Type_Information",
			"Table_Pack_Sizes",
			"Table_Active_Secondary_Pack_Types",
			"Table_PrimaryPack_Pack_Size_Relation",
			"Group_Secondary_Pack_type_relation_Excel_Template",
			"Dwnld_Secondary_Pack_Type_relation_Excel_Template",
			"Upld_Secondary_Pack_Type_relation_Excel_Template",
			"Download Secondary Pack Type relation Template (2 sheets)",
			"Table_PrimaryPack_SecondaryPack_Relation",
		]);

	findWidget("Table_PrimaryPack_Pack_Size_Relation")
		.getColHeaderCell(0, 14)
		.getText()
		.should.be.equal("2L");

	//Validate data is displayed in the table
	let expected_values = [
		["L", "1L"],
		["L", "1.2L"],
		["cl", "15cl"],
		["L", "2L"],
		["L", "20L"],
		["cl", "25cl"],
		["cl", "30cl"],
		["L", "30L"],
		["cl", "33cl"],
		["cl", "33.5cl"],
		["cl", "35.5cl"],
		["cl", "37.5cl"],
		["L", "4L"],
		["cl", "40cl"],
		["L", "5L"],
		["cl", "50cl"],
		["L", "50L"],
		["cl", "56cl"],
		["cl", "65cl"],
		["cl", "75cl"],
		["L", "8L"],
	];

	findWidget("Table_Pack_Sizes")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Validate widget action for the active packSizes widget
	findWidget("Table_Pack_Sizes")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Table_Pack_Sizes")
		.getAllWidgetActionListName()
		.should.eql(["Add Packsize", "Delete Packsize"]);

	//Add a packsize by clicking on addpack size from widget action option
	findWidget("Table_Pack_Sizes")
		.getWidgetActionDetails(0)
		.click();

	findWidget("SB_Masterdata_Pack_Size_To_Add").select("1.500");
	findWidget("SB_Masterdata_Pack_Size_Quantity").select("ml");

	findDialog()
		.findButton("Add")
		.click();

	expected_values = [
		["L", "1L"],
		["L", "1.2L"],
		["ml", "1500ml"],
		["cl", "15cl"],
		["L", "2L"],
		["L", "20L"],
		["cl", "25cl"],
		["cl", "30cl"],
		["L", "30L"],
		["cl", "33cl"],
		["cl", "33.5cl"],
		["cl", "35.5cl"],
		["cl", "37.5cl"],
		["L", "4L"],
		["cl", "40cl"],
		["L", "5L"],
		["cl", "50cl"],
		["L", "50L"],
		["cl", "56cl"],
		["cl", "65cl"],
		["cl", "75cl"],
		["L", "8L"],
	];

	//Select the added packsize for one of the primary packtype
	findWidget("Table_Pack_Sizes")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("Table_PrimaryPack_Pack_Size_Relation")
		.getColHeaderCell(0, 14)
		.getText()
		.should.be.equal("1500ml");
});
