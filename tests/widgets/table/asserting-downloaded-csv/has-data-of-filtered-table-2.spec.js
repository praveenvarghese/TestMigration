/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"For a filtered Table, data is downloaded as CSV file. Asserting the downloaded file details.",
	() => {
		loadPage("Main Project/Filters/Filtered Table");

		// Get the Filter dialog
		findWidget("BigBangSales")
			.bringIntoFocus()
			.getTableFilterButton()
			.click();

		// Edit the 2nd indexed rule
		getFilter().editFilter({
			index: 2,
			itemsToBeRemoved: ["Product 02"],
			isHeaderRule: true,
		});

		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the Filter dialog
		findWidget("BigBangSales")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "BigBangSales.csv",
				size: 353,
				contents:
					String.fromCharCode(0xfeff) +
					",Identifier,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales,BigBangDaySales\n" +
					",Discounts,02% Discount,04% Discount,06% Discount,08% Discount,10% Discount,20% Discount,30% Discount,40% Discount\n" +
					"Cities,Products,,,,,,,,\n" +
					"City 01,Product 01,408.46,249.1,48.39,384.07,415.71,34.39,126.16,196.8\n",
			});
	}
);
