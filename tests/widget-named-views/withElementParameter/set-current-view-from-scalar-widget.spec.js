/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario("Set current view from scalar widget and validate its reflected in widget header", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 3", isSelected: "yes" },
			{ title: "Named View 2", isSelected: "no" },
			{ title: "Named View 1", isSelected: "no" },
		]);

	findWidget("Days Range").setValue("Named View 2");

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 3", isSelected: "no" },
			{ title: "Named View 2", isSelected: "yes" },
			{ title: "Named View 1", isSelected: "no" },
		]);

	findWidget("Days Range")
		.getValue()
		.should.eql("Named View 2");

	findWidget("Days Range").setValue("Named View 1");

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 3", isSelected: "no" },
			{ title: "Named View 2", isSelected: "no" },
			{ title: "Named View 1", isSelected: "yes" },
		]);

	findWidget("Days Range")
		.getValue()
		.should.eql("Named View 1");
});
