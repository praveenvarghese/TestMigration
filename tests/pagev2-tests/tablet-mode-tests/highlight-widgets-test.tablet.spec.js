/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @DEVICE_TYPE=tablet
 */
scenario(
	"Checking that selecting a widget in the widget manager highlights the widget on the page when using Page V2",
	() => {
		loadPage("Main Project/Book Corner");
		findWidget("wh_subpage")
			.getHighlightedWidget()
			.should.eql([]);

		openWidgetManager().OpenWidgetDetails("Book Bars");
		findWidget("wh_subpage")
			.getHighlightedWidget()
			.should.eql(["Book Bars"]);

		openWidgetManager().OpenWidgetDetails("Book Table");

		findWidget("wh_subpage")
			.getHighlightedWidget()
			.should.eql(["Book Table"]);
	}
);
