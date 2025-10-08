/*!
 * @AIMMS_FILE=models/SelectionBoxTooltips/SelectionBoxTooltips.aimms
 */

scenario(
	"Check whether the expected tooltips appear on hovering items in a MultiSelect or in a Legend.",
	() => {
		loadPage("Main Project/home");

		// Multiselect
		findWidget("AllPoetSelection").mouseHoverOverItem("Emily Dickinson");

		findWidget("AllPoetSelection")
			.getTooltip()
			.should.eql("The famous poet Emily Dickinson");

		findWidget("AllPoetSelection").mouseHoverOverItem("William Shakespeare");

		findWidget("AllPoetSelection")
			.getTooltip()
			.should.eql("The famous poet William Shakespeare");

		// Legend
		findWidget("AuthorsLegend").mouseHoverOverItem("Charles Dickens");
		findWidget("AuthorsLegend")
			.getTooltip()
			.should.eql("Tooltip for 'Charles Dickens'");

		findWidget("AuthorsLegend").mouseHoverOverItem("Franz Kafka");
		findWidget("AuthorsLegend")
			.getTooltip()
			.should.eql("Tooltip for 'Franz Kafka'");
	}
);
