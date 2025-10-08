/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario(
	"By changing pivoting settings, the per-identifier settings should not be affected.",
	() => {
		loadPage("Main Project/SecondPage");

		findWidget("Aircraft Properties_2")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.900 m", "70,900.0000"],
				["37.570 m", "77,000.0000"],
				["63.660 m", "242,000.0000"],
				["39.500 m", "101,000.0000"],
				["76.280 m", "440,000.0000"],
				["46.970 m", "124,000.0000"],
				["36.250 m", "51,800.0000"],
				["38.660 m", "52,290.0000"],
			]);

		findWidget("Aircraft Properties_2")
			.dragIndex("a")
			.dropIn("columns");

		findWidget("Aircraft Properties_2")
			.getGridValues()
			.should.shallowDeepEqual([
				[
					"34.900 m",
					"37.570 m",
					"63.660 m",
					"39.500 m",
					"76.280 m",
					"46.970 m",
					"36.250 m",
					"38.660 m",
					"70,900.0000",
					"77,000.0000",
					"242,000.0000",
					"101,000.0000",
					"440,000.0000",
					"124,000.0000",
					"51,800.0000",
					"52,290.0000",
				],
			]);

		findWidget("Aircraft Properties_2")
			.dragIndex("a")
			.dropIn("rows");

		findWidget("Aircraft Properties_2")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.900 m", "70,900.0000"],
				["37.570 m", "77,000.0000"],
				["63.660 m", "242,000.0000"],
				["39.500 m", "101,000.0000"],
				["76.280 m", "440,000.0000"],
				["46.970 m", "124,000.0000"],
				["36.250 m", "51,800.0000"],
				["38.660 m", "52,290.0000"],
			]);
	}
);
