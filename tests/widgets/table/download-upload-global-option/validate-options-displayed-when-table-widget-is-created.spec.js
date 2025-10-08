/*!
 * @AIMMS_FILE=models/TableWithAllDataTypes/TableWithAllDataTypes.aimms
 */

scenario(
	"Validate when identifier is set as global option and toggle to see the options displayed",
	() => {
		loadPage("Main Project/home");

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("Table")
			.enterName("MyTable1")
			.clickAddWidgetButton();

		findWidget("MyTable1")
			.getwidegtMenuButton()
			.click();

		findWidget("MyTable1")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);

		findWidget("TestFlag").setValue(false);

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("Table")
			.enterName("MyTable2")
			.clickAddWidgetButton();

		findWidget("MyTable2")
			.getwidegtMenuButton()
			.click();

		findWidget("MyTable2")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);
	}
);
