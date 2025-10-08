/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario(
	"Checking that selecting a widget in the widget manager highlights the widget on the page when using Page V2",
	() => {
		loadPage("Main Project/classicDialogPageWithWidgets");

		findWidget("classicdialogpagewithwidgets_1")
			.getHighlightedWidget()
			.should.eql([]);

		openWidgetManager().OpenWidgetDetails("sidepanelOPen");

		findWidget("classicdialogpagewithwidgets_1")
			.getHighlightedWidget()
			.should.eql(["sidepanelOPen"]);

		openWidgetManager().OpenWidgetDetails("sidepanelOPen");

		findWidget("classicdialogpagewithwidgets_1")
			.getHighlightedWidget()
			.should.eql(["sidepanelOPen"]);
	}
);
