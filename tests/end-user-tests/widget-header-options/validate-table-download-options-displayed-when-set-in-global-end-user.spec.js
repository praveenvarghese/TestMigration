/*!
 * @AIMMS_FILE=models/TableWithAllDataTypes/TableWithAllDataTypes.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"Validate when identifier is set as global option and toggle to see the options displayed",
	() => {
		loadPage("Main Project/home");

		findWidget("MixedTable")
			.getwidegtMenuButton()
			.click();

		findWidget("MixedTable")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_SETTING,
			]);

		findWidget("TestFlag").setValue(false);

		findWidget("MixedTable")
			.getwidegtMenuButton()
			.click();

		findWidget("MixedTable")
			.getWidgetMenuDetails()
			.should.beEqualTo([WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE]);
	}
);
