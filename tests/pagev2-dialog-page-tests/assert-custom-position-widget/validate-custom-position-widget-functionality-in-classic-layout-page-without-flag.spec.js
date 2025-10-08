/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario(
	"Validate custom position of widget doesn't change when classic page is loaded without the flag ",
	() => {
		loadPage("Main Project/checkdialogpagev2withwidgets?ignore-grid-layout=true");

		findWidget("openCLassicPageWithWidgets").click();

		findWidget("classicdialogpagewithwidgets_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(["sidepanelOPen"]);

		findWidget("classicdialogpagewithwidgets_1")
			.getWidgets()
			.should.eql(["sidepanelOPen"]);
	}
);
