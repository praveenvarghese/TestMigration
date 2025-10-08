/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Assert excel Download for sidepanel and dialog page", () => {
	loadPage("Main Project/home");

	//Click on Table Download-excel Button, and assert the downloaded file

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Filter From Scratch");

	findWidget("filterFromScratch")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["50,000.00 Scoville"],
			["5,000.00 Scoville"],
			["50,000.00 Scoville"],
			["8,000.00 Scoville"],
			["2,500.00 Scoville"],
		]);

	findWidget("filterFromScratch")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("filterFromScratch.xlsx");

	findWidget("filterFromScratch")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["50,000.00 Scoville"],
			["50,000.00 Scoville"],
			["50,000.00 Scoville"],
			["50,000.00 Scoville"],
			["50,000.00 Scoville"],
		]);

	findWidget("home")
		.getSidepanels()
		.closeSidepanelTab();

	findWidget("OpenDialog").click();

	findWidget("TableFilterDialog")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["Colour - red - Cayenne", "Colour - green - Cayenne", "Colour - yellow - Cayenne"],
			["Colour - red - Padron", "Colour - green - Padron", "Colour - yellow - Padron"],
			["Colour - red - Lemon", "Colour - green - Lemon", "Colour - yellow - Lemon"],
			[
				"Colour - red green - Jalapeno",
				"Colour - green - Jalapeno",
				"Colour - yellow - Jalapeno",
			],
			["Colour - red - Pimenton", "Colour - green - Pimenton", "Colour - yellow - Pimenton"],
		]);

	findWidget("TableFilterDialog")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("TableFilterDialog.xlsx");

	findWidget("TableFilterDialog")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["Colour - green - Cayenne", "Colour - yellow - Cayenne"],
			["Colour - green - Padron", "Colour - yellow - Padron"],
			["Colour - green - Lemon", "Colour - yellow - Lemon"],
			["Colour - green - Jalapeno", "Colour - yellow - Jalapeno"],
			["Colour - green - Pimenton", "Colour - yellow - Pimenton"],
		]);
});
