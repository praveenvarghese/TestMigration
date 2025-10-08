/*!
 * @AIMMS_FILE=models/hiddenWidgetModel/Center of Gravity/Center of Gravity.aimms
 * @HARDWARE_SHARE=medium
 * @STARTUP_PROCEDURE=Data_File_SetInitialInformation
 */

scenario(
	"Test to verify Hidden widgets and compact scalar functinalities its changed from identifier",
	() => {
		loadPage("Main Project/Start");

		findWidget("setup_1")
			.getVisibleWidgets()
			.should.eql(["Settings", "EnableHiddenWidget", "DriveTimeScenarioSettings_Switch"]);

		findWidget("EnableHiddenWidget")
			.getDimensions()
			.should.eql([559, 1232]);

		findWidget("Settings").setValue("enableCompactMode", "1");

		findWidget("EnableHiddenWidget")
			.getDimensions()
			.should.eql([559, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("EnableHiddenWidget").setValue("1");

		findWidget("EnableHiddenWidget")
			.getDimensions()
			.should.eql([329, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("setup_1")
			.getVisibleWidgets()
			.should.eql([
				"SelectedProducts_1",
				"LocationIsFixed",
				"Settings",
				"EnableHiddenWidget",
				"DriveTimeScenarioSettings_Switch",
			]);

		findWidget("Settings").setValue("enableCompactMode", "0");

		findWidget("EnableHiddenWidget")
			.getDimensions()
			.should.eql([329, 1232]);

		findWidget("EnableHiddenWidget").setValue("0");

		findWidget("setup_1")
			.getVisibleWidgets()
			.should.eql(["Settings", "EnableHiddenWidget", "DriveTimeScenarioSettings_Switch"]);

		findWidget("EnableHiddenWidget")
			.getDimensions()
			.should.eql([559, 1232]);
	}
);
