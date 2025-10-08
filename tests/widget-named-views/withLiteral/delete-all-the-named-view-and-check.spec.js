/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Delete all the named views and check from both option editor and widget header the names views are removed",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.deleteView("Named View 1");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.deleteView("Named View 3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.deleteView("Named View 2");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([{ ViewsTitle: [], ViewsName: [] }]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("CChart")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Cost Overview",
				"OptionEditorTab Title": "Named Views",
			});

		findWidget("CChart").closeOptionDialog();

		findWidget("CChart")
			.getButtons()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_TOGGLE_LEGEND,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
	}
);
