/*!
 * @AIMMS_FILE=models/TableWithAllDataTypes/TableWithAllDataTypes.aimms
 */

scenario(
	"Upload a file which, for a specific column, has an ordering different than the current sorting in the WebUI. The WebUI sorting should remain intact.",
	() => {
		loadPage("Main Project/home");

		findWidget("ResetData").click();

		findWidget("MixedTable").sortColumn(1, "decrease");

		findWidget("MixedTable")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["1990-08-15", "Ireland", "", "2.00", "5.00", "", "1.00", "55.00 $/unit"],
				["1854-10-16", "Ireland", "", "2.00", "4.00", "", "1.00", "15.00 $/unit"],
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
				["1840-06-02", "England", "", "2.00", "3.00", "Ireland", "1.00", "30.00 $/unit"],
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
			]);

		findWidget("MixedTable")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("DifferentlyOrderedTable.xlsx");

		findWidget("MixedTable")
			.getGridValues()
			.should.be.shallowDeepEqual([
				[
					"1948-06-21",
					"England",
					"2000-01-01 14:25:12",
					"3.00",
					"3.00",
					"Hello",
					"1.00",
					"31.00 $/unit",
				],
				["1990-08-15", "England", "", "2.00", "5.00", "", "1.00", "55.00 $/unit"],
				["1840-06-02", "England", "", "2.00", "3.00", "Ireland", "1.00", "30.00 $/unit"],
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
				["1854-10-16", "Australia", "", "3.00", "4.00", "", "1.00", "15.00 $/unit"],
			]);
	}
);
