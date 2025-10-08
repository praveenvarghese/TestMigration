/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On SidePanel tab, for GanttChart Widgets with and without WidgetActions applied. Asserting buttons available on header section, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Gantt Chart Data");

		// Open Sidepanel tab with GanttChart widgets
		findWidget("gantt_chart_data")
			.getSidepanels()
			.openSidepanelTab("Gantt Charts");

		// #region For a GanttChart with Widget Actions

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("SP_GanttChart_1")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover on a cell of the GanttChart widget. And asserting the buttons available.
		findWidget("SP_GanttChart_1")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

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
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// #endregion

		// #region For a GanttChart without Widget Actions

		// Get GanttChart widget to focus
		findWidget("SP_GanttChart_2").scrollIntoView();

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("SP_GanttChart_2")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Move focus away from GanttChart widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Hover on a cell of the GanttChart widget. And asserting the buttons available.
		findWidget("SP_GanttChart_2")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

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
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

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
