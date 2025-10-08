/*!
 * @AIMMS_FILE=models/AllWidgetsModel/AllWidgetsModel.aimms
 */

scenario(
	"As an app developer, On Dialog pages cog wheel widget settings option should not be visible when accessed from menu pages.",
	() => {
		loadPage("Main Project/home");

		//Click on Button to load dialog page.
		findWidget("LoadAllWidgetsGrid").click();

		//Validating is widget settings option visible on dialog page - grid
		findDialog()
			.isWidgetSettingOptionVisibleOnDialog()
			.should.be.equal(0);

		findDialog()
			.findButton("Ok")
			.click();

		//Click on Button to load dialog page.
		findWidget("LoadAllWidgetsClassic").click();

		//Validating is widget settings option visible on dialog page - grid
		findDialog()
			.isWidgetSettingOptionVisibleOnDialog()
			.should.be.equal(0);

		findDialog()
			.findButton("Ok")
			.click();

		findDialog()
			.findButton("Dismiss")
			.click();

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("All Widgets GRID");

		findWidget("allwidgetssidepanel")
			.findIfAnyWidgetSettingOptionOnSidePanel()
			.should.be.equal(0);

		findWidget("home")
			.getSidepanels()
			.closeSidepanelTab();

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("All Widgtes Classic");

		findDialog()
			.findButton("Dismiss")
			.click();

		findWidget("allwidgtessidepanelclassic")
			.findIfAnyWidgetSettingOptionOnSidePanel()
			.should.be.equal(0);

		findWidget("home")
			.getSidepanels()
			.closeSidepanelTab();
	}
);
