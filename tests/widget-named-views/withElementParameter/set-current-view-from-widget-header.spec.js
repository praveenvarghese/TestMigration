/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario(
	"change current view from widget header and validate its reflected in element parameter configured",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

		findWidget("CChart")
			.getNamedViewItem(1)
			.click();

		findWidget("Days Range")
			.getValue()
			.should.eql("Named View 2");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Named View 2");

		findWidget("CChart").closeOptionDialog();

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

		findWidget("CChart")
			.getNamedViewItem(2)
			.click();

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Named View 1");

		findWidget("CChart").closeOptionDialog();

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
	}
);
