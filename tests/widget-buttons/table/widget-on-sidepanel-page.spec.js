/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of table widget on SidePanel page, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Item Actions/Table Data/Table_ItemAction_Sidepanel");

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is not hovered, asserting the buttons available.
		findWidget("sidepanelTable")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("sidepanelTable").movePointerToWidget(10, 20);
		findWidget("sidepanelTable")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
		// Move focus away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// While Table widget is not hovered, asserting the buttons available.
		findWidget("sidepanelTable")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover on a cell of the table widget. And asserting the buttons available.
		findWidget("sidepanelTable").movePointerToWidget(90, 150);
		findWidget("sidepanelTable")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a cell of the table widget. And asserting the buttons available.
		findWidget("sidepanelTable")
			.getCell(1, 0)
			.click();
		findWidget("sidepanelTable")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("sidepanelTable")
			.getwidegtMenuButton()
			.click();

		findWidget("sidepanelTable")
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
