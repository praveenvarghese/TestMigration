/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario("Validate custom and HTML tooltip in Gantt Chart V2", () => {
	loadPage("Main Project/HTMLTootipPage");

	findWidget("HtmlTooltipGanttV2")
		.findResource("10")
		.findJob("05")
		.hover(15, 2);

	findWidget("HtmlTooltipGanttV2")
		.getTooltip()
		.should.contain("V: 10, TR: 05​This part is valid HTML and will render​​");

	findWidget("HtmlTooltipGanttV2")
		.findResource("07")
		.findJob("03")
		.hover(15, 2);

	findWidget("HtmlTooltipGanttV2")
		.getTooltip()
		.should.contain("V: 7, TR: 03​This part is valid HTML and will render​​");

	findWidget("HtmlTooltipGanttV2")
		.findResource("01")
		.findJob("03")
		.hover(15, 2);

	findWidget("HtmlTooltipGanttV2")
		.getTooltip()
		.should.contain("V: 01, TR: 03");

	findWidget("HtmlTooltipGanttV2").goInFullScreenMode();

	findWidget("HtmlTooltipGanttV2")
		.findResource("10")
		.findJob("05")
		.hover(15, 2);

	findWidget("HtmlTooltipGanttV2")
		.getTooltip()
		.should.contain("V: 10, TR: 05​This part is valid HTML and will render​​");

	findWidget("HtmlTooltipGanttV2")
		.findResource("07")
		.findJob("03")
		.hover(15, 2);

	findWidget("HtmlTooltipGanttV2")
		.getTooltip()
		.should.contain("V: 7, TR: 03​This part is valid HTML and will render​");

	findWidget("HtmlTooltipGanttV2").exitFullScreenMode();

	findWidget("HtmlTooltipGanttV2")
		.findResource("07")
		.findJob("03")
		.hover(15, 2);

	findWidget("HtmlTooltipGanttV2")
		.getTooltip()
		.should.contain("V: 7, TR: 03​This part is valid HTML and will render​​");
});
