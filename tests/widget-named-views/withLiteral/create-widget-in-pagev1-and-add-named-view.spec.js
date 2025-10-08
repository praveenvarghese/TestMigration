/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Create a widget from scratch in page v1 and add named view to it and validate added named view is dispalyed for added widget",
	() => {
		loadPage("Main Project/Cost Overview/Data?ignore-grid-layout=true&table-v2=false");

		createWidget("table", ["p_costs"], "namedWidget");

		closeWidgetManager();

		findWidget("namedWidget").closeOptionDialog();

		findWidget("namedWidget")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.editView(0, {
				value: "First View",
				type: "literal",
			});

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("First View");

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([{ ViewsTitle: ["First View"], ViewsName: ["First View"] }]);

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.addNamedWidgetView({
				value: "Second View",
				type: "literal",
			});

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Second View");

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getDefaultViewDropdownList()
			.should.eql([["First View", "Second View"]]);

		findWidget("namedWidget")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{
					ViewsTitle: ["First View", "Second View"],
					ViewsName: ["First View", "Second View"],
				},
			]);

		findWidget("namedWidget").closeOptionDialog();

		findWidget("namedWidget")
			.getWidgetNamedViewButton()
			.click();

		findWidget("namedWidget")
			.getNamedViewDetails()
			.should.eql([
				{ title: "First View", isSelected: "no" },
				{ title: "Second View", isSelected: "yes" },
			]);
	}
);
