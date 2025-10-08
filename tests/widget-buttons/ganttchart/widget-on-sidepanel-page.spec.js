/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On SidePanel Page, for GanttChart Widgets with and without WidgetActions applied. Asserting buttons available on header section, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Gantt Chart Data/SP_GanttChart");

		// #region For a GanttChart with Widget Actions

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is not hovered, asserting the buttons available.
		findWidget("SP_GanttChart_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover on a cell of the GanttChart widget. And asserting the buttons available.
		findWidget("SP_GanttChart_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a task of the Gantt Chart widget. And asserting the buttons available.
		findWidget("SP_GanttChart_1")
			.findResource(["Klaas"])
			.findJob("Spare Time")
			.click();

		findWidget("SP_GanttChart_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// #endregion

		// #region For a GanttChart without Widget Actions

		// Get GanttChart widget to focus
		findWidget("SP_GanttChart_2").scrollIntoView();

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is not hovered, asserting the buttons available.
		findWidget("SP_GanttChart_2")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover on a cell of the GanttChart widget. And asserting the buttons available.
		findWidget("SP_GanttChart_2").movePointerToWidget(160, 190);
		findWidget("SP_GanttChart_2")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a task of the Gantt Chart widget. And asserting the buttons available.
		findWidget("SP_GanttChart_2")
			.findResource(["Bar Chart"])
			.findJob("OL")
			.click();

		findWidget("SP_GanttChart_2")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("SP_GanttChart_2")
			.getwidegtMenuButton()
			.click();

		findWidget("SP_GanttChart_2")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);

		// #endregion
	}
);
