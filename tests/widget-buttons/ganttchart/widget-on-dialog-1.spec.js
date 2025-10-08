/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a Dialog, for a GanttChart Widget with WidgetActions applied. Asserting buttons available on header section, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Gantt Chart Data");

		// Click on this button gets a dialog with GanttChart widgets
		findWidget("Opens Dialog with Gantt Charts").click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("DP_GanttChart_1")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover on a cell of the GanttChart widget. And asserting the buttons available.
		findWidget("DP_GanttChart_1")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a task of the Gantt Chart widget. And asserting the buttons available.
		findWidget("DP_GanttChart_1")
			.findResource(["Klaas"])
			.findJob("Spare Time")
			.click();

		findWidget("DP_GanttChart_1")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		findWidget("DP_GanttChart_1")
			.getwidegtMenuButton()
			.click();

		findWidget("DP_GanttChart_1")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);
	}
);
