/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Remove and add current and non current named view, Validate the same in option editor",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		//Rename the non current viewed named widget
		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.editView(0, {
				value: "Named View 4",
				type: "literal",
			});

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{
					ViewsTitle: ["Named View 4", "Named View 2", "Named View 3"],
					ViewsName: ["Named View 4", "Named View 2", "Named View 3"],
				},
			]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("Named View 3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Named View 4");

		findWidget("CChart")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Cost Overview",
				"OptionEditorTab Title": "Named Views",
				"OptionDialog Sub Header": "Named View 4",
			});

		findWidget("CChart").closeOptionDialog();

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

		findWidget("CChart")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Named View 4", isSelected: "yes" },
				{ title: "Named View 2", isSelected: "no" },
				{ title: "Named View 3", isSelected: "no" },
			]);

		//Rename the current viewed named widget
		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.editView(2, {
				value: "Named View 5",
				type: "literal",
			});

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{
					ViewsTitle: ["Named View 4", "Named View 2", "Named View 5"],
					ViewsName: ["Named View 4", "Named View 2", "Named View 5"],
				},
			]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Named View 5");

		findWidget("CChart").closeOptionDialog();

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

		findWidget("CChart")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Named View 4", isSelected: "no" },
				{ title: "Named View 2", isSelected: "no" },
				{ title: "Named View 5", isSelected: "yes" },
			]);
	}
);
