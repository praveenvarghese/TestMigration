/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Set default view from option editor and validate its reflected in widget header", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.getDefaultViewDropdownList()
		.should.eql([["Named View 1", "Named View 2", "Named View 3"]]);

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.setDefaultViewFromOptionEditor("Named View 2");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.getDefaultNamedView()
		.should.eql("Named View 2");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("Named View 2");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.getDefaultViewDropdownList()
		.should.eql([["Named View 1", "Named View 2", "Named View 3"]]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 1", isSelected: "no" },
			{ title: "Named View 2", isSelected: "yes" },
			{ title: "Named View 3", isSelected: "no" },
		]);
});
