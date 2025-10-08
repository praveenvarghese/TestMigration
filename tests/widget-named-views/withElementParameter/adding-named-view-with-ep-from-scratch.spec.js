/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 * @HARDWARE_SHARE=large
 */

scenario(
	"Validate creating named views from scratch by adding EP and validate its displayed in both widget header and also in option editor",
	() => {
		loadPage("Main Project/Home");

		findWidget("TransportNetworkMap")
			.getButtons()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("TransportNetworkMap")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Network",
				"OptionEditorTab Title": "Node Sets",
			});

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("");

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.setOptions([
				{
					name: "Default View",
					value: "ep_NamedViews2",
				},
			]);

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.editView(0, {
				value: "Named View 1",
				type: "ENUM",
			});

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([{ ViewsTitle: ["Named View 1"], ViewsName: [] }]);

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.addNamedWidgetView({
				value: "Named View 2",
				type: "ENUM",
			});

		findWidget("TransportNetworkMap")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([{ ViewsTitle: ["Named View 1", "Named View 2"], ViewsName: [] }]);

		findWidget("TransportNetworkMap")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Network",
				"OptionEditorTab Title": "Named Views",
				"OptionDialog Sub Header": "Named View 2",
			});

		findWidget("TransportNetworkMap").closeOptionDialog();

		findWidget("TransportNetworkMap")
			.getWidgetNamedViewButton()
			.click();

		findWidget("TransportNetworkMap")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Named View 2", isSelected: "yes" },
				{ title: "Named View 1", isSelected: "no" },
			]);
	}
);
