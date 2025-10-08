/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario(
	"Check whether the header sorting remains (which it should) after upload of Excel data that has a different row order.",
	() => {
		loadPage("Main Project/home/MischaTestPage");

		// Sort the first row header column on this filtered table.
		findWidget("SecondTable").sortRowHeader(2, 1, "decrease");
		findWidget("SecondTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo(["Romania", "Greece", "France", "Finland"]);

		// Upload the Excel file.
		findWidget("SecondTable")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("SecondTableRowsMixed.xlsx");

		// Check the first row header; the sorting should be as it was before the upload.
		findWidget("SecondTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo(["Romania", "Greece", "France", "Finland"]);

		// Also verify the only changed result.
		findWidget("SecondTable")
			.getCell(0, 0)
			.getValue()
			.should.equal("23.00");
	}
);
