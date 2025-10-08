/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario(
	"Checking that selecting a widget in the widget manager highlights the widget on the page when using Page V2",
	() => {
		loadPage("Main Project/KPIs/Sprint Reliability");

		findWidget("sprint_reliability")
			.getHighlightedWidget()
			.should.eql([]);

		openWidgetManager().OpenWidgetDetails("selectedTable");

		findWidget("sprint_reliability")
			.getHighlightedWidget()
			.should.eql(["selectedTable"]);

		openWidgetManager().OpenWidgetDetails("selectedPage");

		findWidget("sprint_reliability")
			.getHighlightedWidget()
			.should.eql(["selectedPage"]);
	}
);
