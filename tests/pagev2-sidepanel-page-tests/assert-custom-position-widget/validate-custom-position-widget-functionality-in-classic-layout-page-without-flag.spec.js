/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario(
	"Validate custom position of widget doesn't change when classic page is loaded without the flag ",
	() => {
		loadPage("Main Project/home?ignore-grid-layout=true");

		findWidget("sprint_reliability")
			.getVisibleWidgetsInViewPort()
			.should.eql(["selectedPage", "selectedTable"]);

		findWidget("sprint_reliability")
			.getWidgets()
			.should.eql(["selectedPage", "selectedTable"]);
	}
);
