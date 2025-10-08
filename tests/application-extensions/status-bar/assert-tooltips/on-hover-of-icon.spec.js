/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Hover Icon of active and inactive status bar messages, that has and has-no tooltip texts, custom HTMl tootip.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Resetting data on the page.
		findWidget("Reset StatusBar Data").click();

		// Hover the icon of1st Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.hoverOnIcon(5, 5);

		// Assert tooltip is shown and the text on hover of 1st Status Bar message
		findWidget("status_bar_messages").getTooltip().should.exist;
		findWidget("status_bar_messages")
			.getTooltip()
			.should.contain("Select the case file to load from DataManager wizard.");

		// Hover the icon of2nd Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(1)
			.hoverOnIcon(5, 5);

		// Assert no tooltip is shown on hover of 2nd Status Bar message

		findWidget("status_bar_messages").getTooltip().should.not.exist;

		// Hover the icon of3rd Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(2)
			.hoverOnIcon(5, 5);

		// Assert no tooltip is shown on hover of 3rd Status Bar message
		findWidget("status_bar_messages").getTooltip().should.not.exist;

		// Hover the icon of4th Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(3)
			.hoverOnIcon(5, 5);

		// Assert tooltip is shown and the text on hover of 4th Status Bar message
		findWidget("status_bar_messages").getTooltip().should.exist;
		findWidget("status_bar_messages")
			.getTooltip()
			.should.contain("Amsterdam server is being used.");

		// Hover the icon of5th Status Bar message. This is an active Status message with Custom HTML findWidget("status_bar_messages").getTooltip().

		getStatusBar()
			.getStatusBarMessageDetails(4)
			.hoverOnIcon(5, 5);

		// Assert tooltip is shown and the text on hover of 5th Status Bar message

		findWidget("status_bar_messages").getTooltip().should.exist;
		findWidget("status_bar_messages")
			.getTooltip()
			.should.contain(
				"Custom HTML tooltip here    Your browser does not support the HTML5 canvas tag. .thanks-mkg { font-size: 18px; color: red } Thanks MKG"
			);
	}
);
