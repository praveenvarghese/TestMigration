/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Set current view from widget header and validate its reflected in current view in option editor",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

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

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultViewDropdownList()
			.should.eql([["Named View 1", "Named View 2", "Named View 3"]]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("Named View 3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Named View 1");

		findWidget("CChart").closeOptionDialog();

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

		findWidget("CChart")
			.getNamedViewItem(2)
			.click();

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
			.openNamedViewsOptionEditor()
			.getDefaultViewDropdownList()
			.should.eql([["Named View 1", "Named View 2", "Named View 3"]]);

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("Named View 3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("Named View 3");
	}
);
