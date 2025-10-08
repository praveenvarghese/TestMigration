/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario(
	"As a WebUI user, I can perform submit of the default buttons on alerts/dialogs by pressing the Enter or Spacebar",
	() => {
		loadPage("Main Project/home?_aimms_only_no_deprecation_dialog=false");

		//Deprecation alert window
		findDialog()
			.getTitle()
			.should.equal("Phasing out Widget Filtering");

		findWidget("home_1").pressKeys([SPECIAL_KEYS.enter]);

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Combination Chart Page",
			})
			.clickOnDelete();

		//Delete Page
		findDialog()
			.getTitle()
			.should.equal("Deleting page");

		findWidget("home_1").pressKeys([SPECIAL_KEYS.enter]);

		//Delete Widget
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Tenerife Side Panel",
				widgetName: "Flag",
			})
			.clickOnDelete();

		findDialog()
			.getTitle()
			.should.equal("Deleting widget");

		findWidget("home_1").pressKeys([SPECIAL_KEYS.enter]);
	}
);
