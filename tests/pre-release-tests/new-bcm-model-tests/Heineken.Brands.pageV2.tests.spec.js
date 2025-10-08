/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020_PageV2/HeinekenBCM08042020.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken brands page tests", () => {
	loadPage("Main Project/Masterdata/Brands");

	//Validate widgets in the page
	findWidget("brands_1")
		.getVisibleWidgets()
		.should.eql([
			"Text_MasterData_Brands",
			"Table_MasterData_Brand_Production_Info",
			"Table_Beer_Characteristics",
			"Table_Radler_Characteristics",
			"Table_Cider_Characteristics",
			"Table_Softdrink_Characteristics",
		]);

	//Validate data is displayed in the table
	let expected_values = [
		["33 Export", "Beer", "0.00", "1.00", "0.00", "1.00", "0.00", "0.00"],
		["Adelscott", "Radler (shandy)", "0.00", "1.00", "0.00", "1.00", "0.00", "0.00"],
		["Adelshoffen", "Beer", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "1.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "1.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "1.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer 0.0%", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Alsace", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Amstel", "Beer", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Ancre Pils", "Radler (shandy)", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Ancre", "Beer", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Autres", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Autres Crafts", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Birra Moretti", "Beer", "0.00", "0.00", "1.00", "0.00", "1.00", "0.00"],
		["Birra Moretti", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Birra Moretti", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Bourbon", "Beer", "0.00", "1.00", "0.00", "1.00", "0.00", "0.00"],
	];

	findWidget("Table_MasterData_Brand_Production_Info")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	expected_values = [["Lagunitas Hop Water_Import", "0.00", "0.00"]];

	findWidget("Table_Softdrink_Characteristics")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	//Validate widget action for brand source page
	findWidget("Table_MasterData_Brand_Production_Info")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Table_MasterData_Brand_Production_Info")
		.getAllWidgetActionListName()
		.should.eql(["Add Brand", "Edit Brand", "Delete Brand"]);

	//Add brand a brand by clicking on add from widget action
	findWidget("Table_MasterData_Brand_Production_Info")
		.getWidgetActionDetails(0)
		.click();

	findWidget("SC_Dialog_Add_Brand_Characteristic").setValue("Select Brand", "7Up");
	findWidget("SC_Dialog_Add_Brand_Characteristic").setValue("Select Sub Brand", "7Up");
	findWidget("SC_Dialog_Add_Brand_Characteristic").setValue("Select Category", "Soft Drink");
	findWidget("SC_Dialog_Add_Brand_Characteristic").setValue(
		"Select Liquid Base (only local prod.)",
		"Other"
	);
	findWidget("SC_Dialog_Add_Brand_Characteristic").setValue("Final Strength", "10");

	findWidget("SC_Dialog_Add_Brand_Source").setValue(true);

	findDialog()
		.findButton("Add")
		.click();

	findDialog()
		.findButton("OK")
		.click();

	//Validate added brand is displayed in the Brand source table
	expected_values = [
		["33 Export", "Beer", "0.00", "1.00", "0.00", "1.00", "0.00", "0.00"],
		["7Up", "Soft Drink", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Adelscott", "Radler (shandy)", "0.00", "1.00", "0.00", "1.00", "0.00", "0.00"],
		["Adelshoffen", "Beer", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "1.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "1.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "1.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Affligem", "Beer", "0.00", "0.00", "0.00", "1.00", "1.00", "0.00"],
		["Affligem", "Beer 0.0%", "0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
		["Alsace", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Amstel", "Beer", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Ancre Pils", "Radler (shandy)", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Ancre", "Beer", "0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
		["Autres", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Autres Crafts", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Beavertown", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Birra Moretti", "Beer", "0.00", "0.00", "1.00", "0.00", "1.00", "0.00"],
		["Birra Moretti", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
		["Birra Moretti", "Beer", "0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
	];

	findWidget("Table_MasterData_Brand_Production_Info")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Validate added brand is also displayed in softdrink table
	expected_values = [
		["Replace this text", "0.00", "10.00"],
		["Lagunitas Hop Water_Import", "0.00", "0.00"],
	];

	findWidget("Table_Softdrink_Characteristics")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
