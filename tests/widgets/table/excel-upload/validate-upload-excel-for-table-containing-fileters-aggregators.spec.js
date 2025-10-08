/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario(
	"Validate data is uploaded from Excel file for the table which has filters, aggregator applied",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("PepperData")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["50,000 Scoville"],
				["50,000 Scoville"],
				["100,000 Scoville"],
			]);

		findWidget("PepperData")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("PepperData.xlsx");

		findWidget("PepperData")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["30,000 Scoville"],
				["50,000 Scoville"],
				["80,000 Scoville"],
			]);
	}
);
