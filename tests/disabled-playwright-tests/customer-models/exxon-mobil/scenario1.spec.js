/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @HARDWARE_SHARE=large
 */

scenario(
	"Asserting AttributeTags table is populated with data on store-focus click on EquipmentInfo table.",
	() => {
		loadPage("Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser");

		// Wait for "EquipmentInfo" table to be loaded with data.
		waitUntilDataLoadedOnWidget("EquipmentInfo", 240000);

		// Assert the identifier-header, Column-headers and Row-headers along with data on EquipmentInfo Table.
		findWidget("EquipmentInfo")
			.getTitleHeaderValues()
			.should.be.shallowDeepEqual([
				["", "", "", "", "", "", "", "", "", "", "", "Info"],
				[
					"B.Line",
					"B.Team",
					"B.Unit",
					"Loc.",
					"Plant",
					"P.Unit",
					"Eq. Cat.",
					"Eq. Class",
					"EQ. CFIHOS",
					"Console",
					"Eq. Crit.",
					"Equipment",
				],
			]);
		findWidget("EquipmentInfo")
			.getColumnsHeaderValues()
			.should.be.shallowDeepEqual([["Tag", "Name", "Description"]]);
		findWidget("EquipmentInfo")
			.getRowsHeaderValues()
			.should.be.shallowDeepEqual([
				[
					"Blank1",
					"Blank3",
					"OLEFINS",
					"Blank2",
					"Blank2",
					"Blank1773",
					"6",
					"2",
					"Blank6",
					"Blank8",
					"Blank2",
					"F06F88FF9200464EAB7A13E0E8093328",
				],
				[
					"Blank1",
					"Blank21",
					"POLYETHYLENE",
					"Blank6",
					"Blank16",
					"Blank2096",
					"2",
					"5",
					"Analysing Instrument",
					"Blank53",
					"Blank2",
					"7B31E72F444949C0A961B7CA2E00B4C1",
				],
				[
					"Blank1",
					"Blank21",
					"POLYETHYLENE",
					"Blank6",
					"Blank16",
					"Blank2096",
					"2",
					"5",
					"Analysing Instrument",
					"Blank53",
					"Blank2",
					"8B865A673EFA485CAFA49E54E12DCC6F",
				],
				[
					"Blank1",
					"Blank21",
					"POLYETHYLENE",
					"Blank6",
					"Blank16",
					"Blank2096",
					"2",
					"5",
					"Analysing Instrument",
					"Blank53",
					"Blank2",
					"C5B7ED8C487A453494F1DBBE16DE0D7A",
				],
				[
					"Blank1",
					"Blank5",
					"OLEFINS",
					"Blank2",
					"Blank2",
					"Blank1810",
					"3",
					"5",
					"Analysing Instrument",
					"Blank9",
					"Blank2",
					"D65642B077FD431DAD8A45021D8ED7DE",
				],
			]);
		findWidget("EquipmentInfo")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["AA120", "AA120", "GAS CHROMATOGRAPH AF-01"],
				["SAA120AE1", "SAA120AE1", "AE1   B1101A A BOILER PREHTR INLET FLUE"],
				["SAA120T1", "SAA120T1", "AT    B1101A A BOILER PREHTR INLET FLUE"],
				["SAA120XY1", "SAA120XY1", "XY    B1101A A BOILER PREHTR INLET FLUE"],
				["XXAA120", "XXAA120", "XXAA120-GC Trnsfr Ln Anlyzr for 4 Furnc"],
			]);

		findWidget("EquipmentInfo")
			.getCell(1, 0)
			.click();

		// Assert AttributeTags table is empty
		findWidget("AttributeTags").getEmptyWidgetMessage().should.exist;

		findWidget("EquipmentInfo")
			.getCell(0, 0)
			.click();

		// Assert the data on EquipmentInfo Table.
		findWidget("EquipmentInfo")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["AA120", "AA120", "GAS CHROMATOGRAPH AF-01"],
				["SAA120AE1", "SAA120AE1", "AE1   B1101A A BOILER PREHTR INLET FLUE"],
				["SAA120T1", "SAA120T1", "AT    B1101A A BOILER PREHTR INLET FLUE"],
				["SAA120XY1", "SAA120XY1", "XY    B1101A A BOILER PREHTR INLET FLUE"],
				["XXAA120", "XXAA120", "XXAA120-GC Trnsfr Ln Anlyzr for 4 Furnc"],
			]);
		// Verify AttributeTags Table is not empty
		findWidget("AttributeTags").getEmptyWidgetMessage().should.not.exist;
		// Assert the identifier-header, Column-headers and Row-headers along with data on AttributeTags Table.
		findWidget("AttributeTags")
			.getTitleHeaderValues()
			.should.be.shallowDeepEqual([
				["", "", "", "", ""],
				["Attribute 1", "Attribute 2", "Attribute 3", "Attribute 4", "Key"],
			]);
		findWidget("AttributeTags")
			.getColumnsHeaderValues()
			.should.be.shallowDeepEqual([["UTAG", "String", "Default"]]);
		findWidget("AttributeTags")
			.getRowsHeaderValues()
			.should.be.shallowDeepEqual([
				["Chemical Composition", "Quad 1", "Methane RAW PV", "-", "761531"],
				["Chemical Composition", "Quad 1", "Ethane RAW PV", "-", "761532"],
				["Chemical Composition", "Quad 1", "Ethylene RAW PV", "-", "761533"],
				["Chemical Composition", "Quad 1", "Propane RAW PV", "-", "761534"],
				["Chemical Composition", "Quad 1", "Propylene RAW PV", "-", "761535"],
				["Chemical Composition", "Quad 1", "Hydrogen RAW PV", "-", "761536"],
				["Chemical Composition", "Quad 2", "Methane RAW PV", "-", "761537"],
				["Chemical Composition", "Quad 2", "Ethane RAW PV", "-", "761538"],
				["Chemical Composition", "Quad 2", "Ethylene RAW PV", "-", "761539"],
				["Chemical Composition", "Quad 2", "Propane RAW PV", "-", "761540"],
				["Chemical Composition", "Quad 2", "Propylene RAW PV", "-", "761541"],
				["Chemical Composition", "Quad 2", "Hydrogen RAW PV", "-", "761542"],
				["Chemical Composition", "Quad 3", "Methane RAW PV", "-", "761543"],
				["Chemical Composition", "Quad 3", "Ethane RAW PV", "-", "761544"],
				["Chemical Composition", "Quad 3", "Ethylene RAW PV", "-", "761545"],
			]);
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
	}
);
