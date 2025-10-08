/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario(
	"Remove and Add an element from the set and check that removed named view is not displayed in widget header",
	() => {
		loadPage("Main Project/ColumnChart/ColumnChart_1");

		findWidget("DemandColumnChart_1")
			.getWidgetNamedViewButton()
			.click();

		findWidget("DemandColumnChart_1")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Basic View", isSelected: "yes" },
				{ title: "View With Contents Change", isSelected: "no" },
				{ title: "View With Index Change", isSelected: "no" },
				{ title: "View With Chart Settings Change", isSelected: "no" },
				{ title: "View With Pivot Change", isSelected: "no" },
				{ title: "View With Widget Extension Change", isSelected: "no" },
				{ title: "View With Misc Change", isSelected: "no" },
			]);

		findWidget("RemoveSetElement_1").click();

		findWidget("DemandColumnChart_1")
			.getWidgetNamedViewButton()
			.click();

		findWidget("DemandColumnChart_1")
			.getNamedViewDetails()
			.should.eql([
				{ title: "View With Contents Change", isSelected: "no" },
				{ title: "View With Index Change", isSelected: "no" },
				{ title: "View With Chart Settings Change", isSelected: "no" },
				{ title: "View With Pivot Change", isSelected: "no" },
				{ title: "View With Widget Extension Change", isSelected: "no" },
				{ title: "View With Misc Change", isSelected: "no" },
			]);

		findWidget("AddSetElement").click();

		findWidget("DemandColumnChart_1")
			.getWidgetNamedViewButton()
			.click();

		findWidget("DemandColumnChart_1")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Basic View", isSelected: "yes" },
				{ title: "View With Contents Change", isSelected: "no" },
				{ title: "View With Index Change", isSelected: "no" },
				{ title: "View With Chart Settings Change", isSelected: "no" },
				{ title: "View With Pivot Change", isSelected: "no" },
				{ title: "View With Widget Extension Change", isSelected: "no" },
				{ title: "View With Misc Change", isSelected: "no" },
			]);
	}
);
