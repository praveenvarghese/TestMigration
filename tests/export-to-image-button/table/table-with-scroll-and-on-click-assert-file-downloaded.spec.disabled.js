/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"On a Table widget having vertically and horizontally scrolled, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Filters");

		// Hover the title of the widget.
		findWidget("ProfitWithDiscountsGiven")
			.getCell(26, 20)
			.click();

		findWidget("ProfitWithDiscountsGiven").pressKeys([
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
		]);

		findWidget("ProfitWithDiscountsGiven").pressKeys([
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
			SPECIAL_KEYS.arrow_right,
		]);

		findWidget("Opens Dialog").scrollIntoView();

		// Hover the title of the widget.
		findWidget("ProfitWithDiscountsGiven").movePointerToWidget(70, 20);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("ProfitWithDiscountsGiven")
			.mouseHover()
			.getExportToImageButton()
			.click();

		findWidget("ProfitWithDiscountsGiven")
			.mouseHover()
			.getExportToImageButton()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "table.png",
			});
	}
);
