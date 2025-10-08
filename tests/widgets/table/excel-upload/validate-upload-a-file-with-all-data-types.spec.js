/*!
 * @AIMMS_FILE=models/TableWithAllDataTypes/TableWithAllDataTypes.aimms
 */

scenario(
	"Upload a file with all data types (i.e. binary, dates, string, number, unit, eltpar of a subset of integers, special characters, thousand separators, numdecimals, read-only)",
	() => {
		loadPage("Main Project/home");

		findWidget("ResetData").click();

		findWidget("MixedTable")
			.getGridValues()
			.should.be.shallowDeepEqual([
				[
					"1965-01-01",
					"Australia",
					"2000-01-01 13:56:02",
					"1.00",
					"3.00",
					"",
					"0.00",
					"25.00 $/unit",
				],
				[
					"1948-06-21",
					"England",
					"2000-01-01 14:25:12",
					"2.00",
					"3.00",
					"Hello",
					"1.00",
					"31.00 $/unit",
				],
				["1990-08-15", "Ireland", "", "2.00", "5.00", "", "1.00", "55.00 $/unit"],
				["1854-10-16", "Ireland", "", "2.00", "4.00", "", "1.00", "15.00 $/unit"],
				["1840-06-02", "England", "", "2.00", "3.00", "Ireland", "1.00", "30.00 $/unit"],
			]);

		findWidget("MixedTable")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("MixedTable.xlsx");

		findWidget("MixedTable")
			.getGridValues()
			.should.be.shallowDeepEqual([
				[
					"1965-01-01",
					"Australia",
					"2000-01-01 13:56:02",
					"1.00",
					"3.00",
					"",
					"0.00",
					"25.00 $/unit",
				],
				[
					"1948-06-21",
					"England",
					"2000-01-01 14:25:12",
					"2.00",
					"3.00",
					"Hello",
					"1.00",
					"310,000.00 $/unit",
				],
				["1990-08-15", "Ireland", "", "2.00", "5.00", "", "1.00", "55.00 $/unit"],
				[
					"1989-10-15",
					"Ireland",
					"",
					"2.00",
					"4.00",
					"~!@#$%^&*()_+=-`[]{}\\|:\";'<>?,./",
					"1.00",
					"15.00 $/unit",
				],
				[
					"1990-11-15",
					"England",
					"",
					"9.00",
					"5.00",
					"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQURSTUVWXYZ",
					"1.00",
					"100,000,000,000.00 $/unit",
				],
			]);
	}
);
