/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Validate creating named views from scratch", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 1", isSelected: "no" },
			{ title: "Named View 2", isSelected: "no" },
			{ title: "Named View 3", isSelected: "yes" },
		]);

	findWidget("CChart")
		.getNamedViewItem(0)
		.click();

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 1", isSelected: "yes" },
			{ title: "Named View 2", isSelected: "no" },
			{ title: "Named View 3", isSelected: "no" },
		]);
});
