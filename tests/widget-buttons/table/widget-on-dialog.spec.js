/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of table widget on Dialog page, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Item Actions/Table Data");

		// Click on the button to get the Dialog with table widget
		findWidget("DialogPage").click();

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is not hovered, asserting the buttons available.
		findWidget("dialogPageTable")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("dialogPageTable").movePointerToWidget(10, 20);
		findWidget("dialogPageTable")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);
		// Move focus away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// While Table widget is not hovered, asserting the buttons available.
		findWidget("dialogPageTable")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Hover on a cell of the table widget. And asserting the buttons available.
		findWidget("dialogPageTable").movePointerToWidget(150, 150);
		findWidget("dialogPageTable")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		// Move focus away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a cell of the table widget. And asserting the buttons available.
		findWidget("dialogPageTable")
			.getCell(1, 0)
			.click();
		findWidget("dialogPageTable")
			.getButtons()
			.should.eql([WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU]);

		findWidget("dialogPageTable")
			.getwidegtMenuButton()
			.click();

		findWidget("dialogPageTable")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);
	}
);
