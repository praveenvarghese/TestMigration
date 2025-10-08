/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Delete both current and non current named view, Validate the same in option editor and end user mode",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		//Delete the non current viewed named widget
		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.deleteView("Named View 1");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{
					ViewsTitle: ["Named View 2", "Named View 3"],
					ViewsName: ["Named View 2", "Named View 3"],
				},
			]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("Named View 3");

		findWidget("CChart").closeOptionDialog();

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

		findWidget("CChart")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Named View 2", isSelected: "no" },
				{ title: "Named View 3", isSelected: "yes" },
			]);

		//Delete the current viewed named widget
		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.deleteView("Named View 3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([{ ViewsTitle: ["Named View 2"], ViewsName: ["Named View 2"] }]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");
	}
);
