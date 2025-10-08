/*!
 * @AIMMS_FILE=models/Bugs/GL1011-SidepanelBreaksRightSideOfPage/SidepanelBreaksRightSideOfPage.aimms
 */

scenario(
	"GL1011 - With a side panel open on a page, you could not access the extreme right part of widgets on other pages.",
	() => {
		loadPage("Main Project/Page2");

		// Please note that "Page2" below is the name of the PAGE, not of a widget.
		findWidget("page2_1")
			.getSidepanels()
			.openSidepanelTab("My Side Panel");

		loadPage("Main Project/home");

		findWidget("Table2")
			.getCell(1, 3)
			.setValue("Koninkrijk Engeland");

		findWidget("Table2")
			.getCell(1, 3)
			.getValue()
			.should.be.equal("Koninkrijk Engeland");
	}
);
