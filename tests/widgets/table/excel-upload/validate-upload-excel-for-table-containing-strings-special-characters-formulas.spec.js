/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario(
	"Validate data is uploaded from Excel file for the table which has String Data,Special Character etc",
	() => {
		loadPage("Main Project/TablePage?_aimms_only_persistence.write=true");

		findWidget("ShadowYield")
			.getGridValues()
			.should.be.shallowDeepEqual([["Colour - red - Cayenne"]]);

		findWidget("ShadowYield")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("ShadowYield.xlsx");

		findWidget("ShadowYield")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["Colour - red - Cayennesdfhdsgjfdhkhkjdsjdg-!@124567487546gdfjhkjklszcghjsdfh"],
			]);
	}
);
