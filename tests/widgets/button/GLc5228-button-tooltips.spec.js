/*!
 * @AIMMS_FILE=models/Bugs/GLc5228-Button-Tooltip/button tooltip.aimms
 */

scenario("E2E test for the fix of issue GLc5228 regarding button tooltips", () => {
	loadPage("Main Project/home");

	findWidget("button play pause").mouseHover();

	findWidget("button play pause")
		.getTooltipText()
		.should.eql("Play");

	findWidget("button play pause").click();

	findWidget("button play next").mouseHover();

	findWidget("button play next")
		.getTooltipText()
		.should.eql("Next Step");

	findWidget("button play pause").mouseHover();

	findWidget("button play pause")
		.getTooltipText()
		.should.eql("Pause");

	findWidget("button play pause").click();

	findWidget("button play next").mouseHover();

	findWidget("button play next")
		.getTooltipText()
		.should.eql("Next Step");

	findWidget("button play pause").mouseHover();

	findWidget("button play pause")
		.getTooltipText()
		.should.eql("Play");

	findWidget("button play pause").click();

	findWidget("button play next").mouseHover();

	findWidget("button play next")
		.getTooltipText()
		.should.eql("Next Step");

	findWidget("button play pause").mouseHover();

	findWidget("button play pause")
		.getTooltipText()
		.should.eql("Pause");

	findWidget("button play pause").click();

	findWidget("button play next").mouseHover();

	findWidget("button play next")
		.getTooltipText()
		.should.eql("Next Step");
});
