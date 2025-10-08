/*!
 * @AIMMS_FILE=models/Bugs/c3568-TableCellDataUpdateOrder/c3568.aimms
 */

scenario(
	"Validate data is uploaded from Excel file for the table which has Binary Data and Excel contains Formulas",
	() => {
		loadPage("Main Project/home");

		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["0.00", "1.00", "1.00", "1.00", "0.00"]]);

		findWidget("tableWith_BinaryData")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("tableWith_BinaryData.xlsx");

		findWidget("tableWith_BinaryData")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00", "0.00", "0.00", "0.00", "0.00"]]);
	}
);
