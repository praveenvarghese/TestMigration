/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar Chart widget, click on 'Export To Image' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is hovered, asserting the buttons available.
		findWidget("BarChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Maximize the Bar chart
		findWidget("BarChart_1_1").goInFullScreenMode();

		// #region While widget is maximized

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is hovered, asserting the buttons available.
		findWidget("BarChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
		// #endregion

		// Exit full screen mode
		findWidget("BarChart_1_1").exitFullScreenMode();

		// Hover on a Bar of the Bar Chart widget. And asserting the buttons available.
		//findWidget("BarChart_1_1").movePointerToWidget(190, 200);
		findWidget("BarChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Click on the "Export to Image" button and assert a file being downloaded
		findWidget("BarChart_1_1")
			.findBar("List,IA_JobStart")
			.click();
		findWidget("BarChart_1_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("BarChart_1_1")
			.getwidegtMenuButton()
			.click();

		findWidget("BarChart_1_1")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);
	}
);
