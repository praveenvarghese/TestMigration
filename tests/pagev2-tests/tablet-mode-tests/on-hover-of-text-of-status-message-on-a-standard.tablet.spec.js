/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario(
	"Hover Display Text of active and inactive status bar messages, that has and has-no tooltip texts, custom HTMl tooltip. Assert tooltip shown and the text.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Hover the display text of1st Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.hoverOnDisplayText(5, 5);

		// Assert tooltip is shown and the text on hover of 1st Status Bar message
		let tooltip = findWidget("status_bar_messages").getTooltip();
		tooltip.should.exist;
		tooltip.should.contain("Select the case file to load from DataManager wizard.");

		// Hover the display text of2nd Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(1)
			.hoverOnDisplayText(2, 5);

		// Assert no tooltip is shown on hover of 2nd Status Bar message
		tooltip = findWidget("status_bar_messages").getTooltip();
		tooltip.should.not.exist;

		// Hover the display text of3rd Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(2)
			.hoverOnDisplayText(5, 5);

		// Assert no tooltip is shown on hover of 3rd Status Bar message
		tooltip = findWidget("status_bar_messages").getTooltip();
		tooltip.should.not.exist;

		// Hover the display text of4th Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(3)
			.hoverOnDisplayText(5, 5);

		// Assert tooltip is shown and the text on hover of 4th Status Bar message
		tooltip = findWidget("status_bar_messages").getTooltip();
		tooltip.should.exist;
		tooltip.should.contain("Amsterdam server is being used.");

		// Hover the display text of5th Status Bar message. This is an active Status message with Custom HTML tooltip.

		getStatusBar()
			.getStatusBarMessageDetails(4)
			.hoverOnDisplayText(5, 5);

		// Assert tooltip is shown and the text on hover of 5th Status Bar message
		tooltip = findWidget("status_bar_messages").getTooltip();
		tooltip.should.exist;
		tooltip.should.contain(
			"Custom HTML tooltip here    Your browser does not support the HTML5 canvas tag. .thanks-mkg { font-size: 18px; color: red } Thanks MKG"
		);
	}
);
