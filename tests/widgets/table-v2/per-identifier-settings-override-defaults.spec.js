/*!
 * @AIMMS_FILE=models/TablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario(
	"Verify that for the per identifier options, the default value is overridden by the identifier specific values",
	() => {
		loadPage("Main Project/OverrideTestPage?table-v2=true");

		// Two of the identifiers in the table override the default settings for NumDecimals and ShowUnits and one does not.
		// Check the table contents to see whether these rules are indeed respected.
		findWidget("Aircraft Properties_2")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "35 m", "70,900.00"],
				["37.57", "34 m", "77,000.00"],
				["63.66", "60 m", "242,000.00"],
				["39.50", "34 m", "101,000.00"],
				["76.28", "68 m", "440,000.00"],
				["46.97", "38 m", "124,000.00"],
				["36.25", "29 m", "51,800.00"],
				["38.66", "29 m", "52,290.00"],
			]);

		// Now deliberately set an overriding value to an incorrect value and make sure that the table falls back to the
		// specified default value.
		findWidget("TableSettings_2").setValue("NumDecimalsFL", "-3.00");

		findWidget("Aircraft Properties_2")
			.getGridValues()
			.should.shallowDeepEqual([
				["35", "35 m", "70,900.00"],
				["38", "34 m", "77,000.00"],
				["64", "60 m", "242,000.00"],
				["40", "34 m", "101,000.00"],
				["76", "68 m", "440,000.00"],
				["47", "38 m", "124,000.00"],
				["36", "29 m", "51,800.00"],
				["39", "29 m", "52,290.00"],
			]);
	}
);
