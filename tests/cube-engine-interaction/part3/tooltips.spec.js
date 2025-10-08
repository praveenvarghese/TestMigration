/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Check tooltips", () => {
	loadPage("Main Project/Tooltips");

	findWidget("tooltips")
		.getRowHeaderCell(0, 0)
		.getParentTooltip()
		.should.be.equal("layer1 maps to Layer 1");

	findWidget("tooltips")
		.getRowHeaderCell(0, 0)
		.mouseHover();

	findWidget("tooltips")
		.getRowHeaderCell(0, 0)
		.getChildTooltip()
		.should.be.equal("layer1 maps to Layer 1");

	findWidget("tooltips")
		.getCell(1, 1)
		.getParentTooltip()
		.should.be.equal("layer2 maps to Layer 2");

	findWidget("tooltips")
		.getCell(1, 1)
		.mouseHover();

	findWidget("tooltips")
		.getCell(1, 1)
		.getChildTooltip()
		.should.be.equal("layer2 maps to Layer 2");
});
