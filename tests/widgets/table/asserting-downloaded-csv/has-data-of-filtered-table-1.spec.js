/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"For a filtered Table, data is downloaded as CSV file. Asserting the downloaded file details.",
	() => {
		loadPage("Main Project/Filters/Filtered Table?table-v2=true");

		// Get the Filter dialog
		findWidget("BigBangSales")
			.bringIntoFocus()
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "BigBangSales.csv",
				size: 427,
				contents:
					String.fromCharCode(0xfeff) +
					",Identifier,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales\n" +
					",Discounts,02% Discount,04% Discount,06% Discount,08% Discount,10% Discount,20% Discount,30% Discount,40% Discount\n" +
					"Cities,Products,,,,,,,,\n" +
					"City 01,Product 01,408.46,249.1,48.39,384.07,415.71,34.39,126.16,196.8\n" +
					"City 01,Product 02,115.49,186.68,447.49,304.11,43.26,134.18,383.81,481.12\n",
			});
	}
);
