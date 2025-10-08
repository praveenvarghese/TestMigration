/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Gantt Chart widget with WidgetActions applied, asserting buttons on the widgets header section, when on&off focus, on task click.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Gantt Chart Data");

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover the title of Gantt Chart widget. And asserting the buttons available.
		findWidget("GanttChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from Gantt Chart widget.
		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover on a task of GanttChart_1_1 widget. And asserting the buttons available.
		findWidget("GanttChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from Gantt Chart widget.
		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a task of GanttChart_1_1 widget. And asserting the buttons available.
		findWidget("GanttChart_1_1")
			.findResource(["Sleeping"])
			.findJob("Klaas")
			.click();

		findWidget("GanttChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("GanttChart_1_1")
			.getwidegtMenuButton()
			.click();

		findWidget("GanttChart_1_1")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);
	}
);
