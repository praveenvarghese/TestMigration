/*!
 * @AIMMS_FILE=models/Bugs/GLc4228-DownCSV/DownCSV.aimms
 */

scenario("Generate CSV file from table after specific user actions", () => {
	loadPage("Main Project/home");

	findWidget("ValueTable")
		.mouseHover()
		.getWidgetDownloadButton()
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "ValueTable.csv",
			size: 75,
			contents:
				String.fromCharCode(0xfeff) +
				"Identifier,p_Val\n" +
				"s_J,\n" +
				"1,0.00000215378008261376\n" +
				"2,0.00000215378008261376\n",
		});
});
