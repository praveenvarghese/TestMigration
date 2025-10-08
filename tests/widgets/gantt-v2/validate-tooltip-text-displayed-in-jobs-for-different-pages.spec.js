/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */

scenario(
	"Validate custom and HTML tooltip in Gantt Chart V2 for tabbed widget,dialog and sidepanel page",
	() => {
		loadPage("Main Project/TabbedPage");

		findWidget("FIrstGanttV2")
			.findResource("MachineOne")
			.findJob("Task-5")
			.hover(15, 2);

		findWidget("FIrstGanttV2")
			.getTooltip()
			.should.equal(
				"(MachineOne, Task-5) Duration: 7 hours​Start: 06:00 Wed May 17, 2017, End: 13:00 Wed May 17, 2017"
			);

		getPageMenu().navigateToPage("Main Project/GanttV2Page");

		findWidget("ganttv_2_page")
			.getSidepanels()
			.openSidepanelTab("Gantt Chart");

		findWidget("InlineTextGanttChart_2")
			.findResource("01")
			.findJob("02")
			.hover();

		findWidget("InlineTextGanttChart_2")
			.getTooltip()
			.should.contain("V: 02, TR: 01");

		getPageMenu().navigateToPage("Main Project/HTMLTootipPage");

		findWidget("OpenDialogPage").click();

		findWidget("HtmlTooltipGanttV2_1")
			.findResource("10")
			.findJob("05")
			.hover(15, 2);

		findWidget("HtmlTooltipGanttV2_1")
			.getTooltip()
			.should.contain("V: 10, TR: 05​This part is valid HTML and will render​​");

		findWidget("HtmlTooltipGanttV2_1")
			.findResource("01")
			.findJob("03")
			.hover(15, 2);

		findWidget("HtmlTooltipGanttV2_1")
			.getTooltip()
			.should.contain("V: 01, TR: 03");
	}
);
