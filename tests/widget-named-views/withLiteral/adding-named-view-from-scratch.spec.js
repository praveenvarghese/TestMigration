/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 * @HARDWARE_SHARE=large
 */

scenario(
	"Validate creating named views from scratch and validate its displayed in both widget header and also in option editor",
	() => {
		loadPage("Main Project/Weather History/History Data");

		findWidget("Weather Data")
			.getButtons()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_TOGGLE_LEGEND,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("");

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.editView(0, {
				value: "First View",
				type: "literal",
			});

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("First View");

		findWidget("Weather Data")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Weather Data",
				"OptionEditorTab Title": "Named Views",
				"OptionDialog Sub Header": "First View",
			});

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{
					ViewsTitle: ["First View"],
					ViewsName: ["First View"],
				},
			]);

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.addNamedWidgetView({
				value: "Second View",
				type: "literal",
			});

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Second View");

		findWidget("Weather Data")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{
					ViewsTitle: ["First View", "Second View"],
					ViewsName: ["First View", "Second View"],
				},
			]);

		findWidget("Weather Data").closeOptionDialog();

		findWidget("Weather Data")
			.getWidgetNamedViewButton()
			.click();

		findWidget("Weather Data")
			.getNamedViewDetails()
			.should.eql([
				{ title: "First View", isSelected: "no" },
				{ title: "Second View", isSelected: "yes" },
			]);
	}
);
