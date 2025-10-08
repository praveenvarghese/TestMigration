/*!
 * @AIMMS_FILE=models/TablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario(
	"Change some per identier settings through parameters which should influence multiple tables",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("Aircraft Properties")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "35.10", "70,900.00"],
				["37.57", "34.10", "77,000.00"],
				["63.66", "60.30", "242,000.00"],
				["39.50", "34.32", "101,000.00"],
				["76.28", "68.45", "440,000.00"],
				["46.97", "38.05", "124,000.00"],
				["36.25", "28.73", "51,800.00"],
				["38.66", "28.73", "52,290.00"],
			]);

		findWidget("Fleet Info")
			.isEmpty()
			.should.equal(true);

		// Change the display domain for some identifier combinations in the Fleet Info table
		findWidget("DDNumFleet")
			.getCell(1, 1)
			.setValue("1.00");

		findWidget("DDNumFleet")
			.getCell(3, 2)
			.setValue("1.00");

		findWidget("DDNumFleet")
			.getCell(2, 5)
			.setValue("1.00");

		findWidget("DDNumFleet")
			.getCell(0, 2)
			.setValue("1.00");

		findWidget("Fleet Info")
			.getGridValues()
			.should.shallowDeepEqual([
				["", "5.00", ""],
				["0.00", "", ""],
				["", "", "0.00"],
				["", "0.00", ""],
			]);

		// Change some settings that should influence the Aircraft Properties table
		findWidget("TableSettings").setValue("NumDecimalsFL", "3.00");
		findWidget("TableSettings").setValue("NumDecimalsWS", "4.00");
		findWidget("TableSettings").setValue("ShowUnitsWS", "1.00");
		findWidget("TableSettings").setValue("ShowUnitsMTOW", "1.00");

		// And check the effect
		findWidget("Aircraft Properties")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.900", "35.1000 m", "70,900.00 kg"],
				["37.570", "34.1000 m", "77,000.00 kg"],
				["63.660", "60.3000 m", "242,000.00 kg"],
				["39.500", "34.3200 m", "101,000.00 kg"],
				["76.280", "68.4500 m", "440,000.00 kg"],
				["46.970", "38.0500 m", "124,000.00 kg"],
				["36.250", "28.7300 m", "51,800.00 kg"],
				["38.660", "28.7300 m", "52,290.00 kg"],
			]);

		// Try a negative value for NumDecimals: this should get you the default value of 2.
		findWidget("TableSettings").setValue("NumDecimalsFL", "-4.00");

		findWidget("Aircraft Properties")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "35.1000 m", "70,900.00 kg"],
				["37.57", "34.1000 m", "77,000.00 kg"],
				["63.66", "60.3000 m", "242,000.00 kg"],
				["39.50", "34.3200 m", "101,000.00 kg"],
				["76.28", "68.4500 m", "440,000.00 kg"],
				["46.97", "38.0500 m", "124,000.00 kg"],
				["36.25", "28.7300 m", "51,800.00 kg"],
				["38.66", "28.7300 m", "52,290.00 kg"],
			]);

		findWidget("TableSettings").setValue("DisplayDomainFL", "0.00");
		findWidget("TableSettings").setValue("DisplayDomainMTOW", "0.00");

		findWidget("Aircraft Properties")
			.getGridValues()
			.should.shallowDeepEqual([
				["35.1000 m"],
				["34.1000 m"],
				["60.3000 m"],
				["34.3200 m"],
				["68.4500 m"],
				["38.0500 m"],
				["28.7300 m"],
				["28.7300 m"],
			]);
	}
);
