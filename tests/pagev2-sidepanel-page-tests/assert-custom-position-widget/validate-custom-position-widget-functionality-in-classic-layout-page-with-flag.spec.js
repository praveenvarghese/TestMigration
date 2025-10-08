/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario(
	"Validate custom position of widget doesn't change when classic page is loaded with the flag ",
	() => {
		loadPage("Main Project/home");

		findWidget("sprint_reliability")
			.getVisibleWidgetsInViewPort()
			.should.eql(["selectedPage", "selectedTable"]);

		findWidget("sprint_reliability")
			.getWidgets()
			.should.eql(["selectedPage", "selectedTable"]);
	}
);
