/*!
 * @AIMMS_FILE=models/TablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario(
	"Change some per identier settings through parameters to influence a table showing both a 1- and a 2-dimensional parameter",
	() => {
		loadPage("Main Project/DistancePage?table-v2=true");

		findWidget("Aircraft Properties_1")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "35.10"],
				["37.57", "34.10"],
				["63.66", "60.30"],
				["39.50", "34.32"],
				["76.28", "68.45"],
				["46.97", "38.05"],
				["36.25", "28.73"],
				["38.66", "28.73"],
			]);

		// Change some settings that should influence the Aircraft Properties table
		findWidget("TableSettings_1").setValue("NumDecimalsFL", "3.00");
		findWidget("TableSettings_1").setValue("NumDecimalsWS", "3.00");
		findWidget("TableSettings_1").setValue("DisplayDomainWS", "0.00");
		findWidget("TableSettings_1").setValue("ShowUnitsFL", "1.00");

		findWidget("Display Domain")
			.getCell(0, 3)
			.setValue("1.00");
		findWidget("Display Domain")
			.getCell(2, 6)
			.setValue("1.00");
		findWidget("Display Domain")
			.getCell(3, 4)
			.setValue("1.00");

		findWidget("Aircraft Properties_1")
			.getGridValues()
			.should.shallowDeepEqual([
				["", "2,000.000 km", "", ""],
				["", "", "", "1,870.000 km"],
				["", "", "800.000 km", ""],
				["34.900 m", "", "", ""],
				["37.570 m", "", "", ""],
				["63.660 m", "", "", ""],
				["39.500 m", "", "", ""],
				["76.280 m", "", "", ""],
				["46.970 m", "", "", ""],
				["36.250 m", "", "", ""],
				["38.660 m", "", "", ""],
			]);
	}
);
