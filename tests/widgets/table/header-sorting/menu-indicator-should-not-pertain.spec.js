/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario(
	"Verify that the header menu indicators are not 'sticky' anymore (WebUI ticket 648)",
	() => {
		loadPage("Main Project/SecondHome?table-v2=true");

		findWidget("TabbedPageTable")
			.getColHeaderCell(0, 0)
			.click();

		findWidget("TabbedPageTable")
			.getColHeaderCell(0, 1)
			.click();

		findWidget("TabbedPageTable")
			.getColHeaderCell(0, 2)
			.click();

		findWidget("TabbedPageTable")
			.getColHeaderCell(0, 0)
			.hasMenuIndicator()
			.should.eql(false);

		findWidget("TabbedPageTable")
			.getColHeaderCell(0, 1)
			.hasMenuIndicator()
			.should.eql(false);

		findWidget("TabbedPageTable")
			.getColHeaderCell(0, 2)
			.hasMenuIndicator()
			.should.eql(true);
	}
);
