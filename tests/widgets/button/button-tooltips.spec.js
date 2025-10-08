/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Check the customized tooltips for buttons feature.", () => {
	loadPage("Main Project/home");

	// Hover over the button
	findWidget("BellyButton").mouseHover();

	// Check the tooltiptext
	findWidget("BellyButton")
		.getTooltipText()
		.should.eql(
			"A fine and subtle spirit dwells / In every little flower, / Each one its own sweet feeling breathes / With more or less of power. / There is a silent eloquence / In every wild bluebell / That fills my softened heart with bliss / That words could never tell."
		);

	// Move to another button, which has no tooltip provided.
	findWidget("OtherButton").mouseHover();

	// Check the tooltiptext
	findWidget("BellyButton")
		.getTooltipText(false)
		.should.eql(
			"A fine and subtle spirit dwells / In every little flower, / Each one its own sweet feeling breathes / With more or less of power. / There is a silent eloquence / In every wild bluebell / That fills my softened heart with bliss / That words could never tell."
		);
});
