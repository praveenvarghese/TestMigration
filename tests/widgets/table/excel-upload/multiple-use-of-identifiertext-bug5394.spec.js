/*!
 * @AIMMS_FILE=models/TableWithAllDataTypes/TableWithAllDataTypes.aimms
 */

scenario(
	"Upload a file with to a table which uses an identifier with webui::IdentifierElementText that is used multiple times. See ticket #5394 for the detailed scenario.",
	() => {
		loadPage("Main Project/ElementTextPage");

		findWidget("EltTextTable")
			.getGridValues()
			.should.be.shallowDeepEqual([["4.00", "5.00", "6.00"]]);

		findWidget("EltTextTable")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("EltTextTable.xlsx");

		findWidget("EltTextTable")
			.getGridValues()
			.should.be.shallowDeepEqual([["10.00", "5.00", "6.00"]]);
	}
);
