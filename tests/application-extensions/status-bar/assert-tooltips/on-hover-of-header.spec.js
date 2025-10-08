/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Hover header of active and inactive status bar messages, that has and has-no tooltip texts, custom HTMl tooltip. Assert tooltip shown and the text.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Resetting data on the page.
		findWidget("Reset StatusBar Data").click();

		// Hover the header of1st Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.hoverOnHeader(5, 5);

		// Assert tooltip is shown and the text on hover of 1st Status Bar message
		findWidget("status_bar_messages").getTooltip().should.exist;
		findWidget("status_bar_messages")
			.getTooltip()
			.should.contain("Select the case file to load from DataManager wizard.");

		// Hover the header of2nd Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(1)
			.hoverOnHeader(5, 5);

		// Assert no tooltip is shown on hover of 2nd Status Bar message
		findWidget("status_bar_messages").getTooltip().should.not.exist;

		// Hover the header of3rd Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(2)
			.hoverOnHeader(5, 5);

		// Assert no tooltip is shown on hover of 3rd Status Bar message
		findWidget("status_bar_messages").getTooltip().should.not.exist;

		// Hover the header of4th Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(3)
			.hoverOnHeader(5, 5);

		// Assert tooltip is shown and the text on hover of 4th Status Bar message
		findWidget("status_bar_messages").getTooltip().should.exist;
		findWidget("status_bar_messages")
			.getTooltip()
			.should.contain("Amsterdam server is being used.");

		// Hover the header of5th Status Bar message. This is an active Status message with Custom HTML tooltip.

		getStatusBar()
			.getStatusBarMessageDetails(4)
			.hoverOnHeader(5, 5);

		// Assert tooltip is shown and the text on hover of 5th Status Bar message
		findWidget("status_bar_messages").getTooltip().should.exist;
		findWidget("status_bar_messages")
			.getTooltip()
			.should.contain(
				"Custom HTML tooltip here    Your browser does not support the HTML5 canvas tag. .thanks-mkg { font-size: 18px; color: red } Thanks MKG"
			);
	}
);
