/*!
 * @AIMMS_FILE=models/WNVTestModel/WNVTestModel.aimms
 * @HARDWARE_SHARE=large
 * @DURATION=medium
 */

scenario(
	"Verify that the Contents/Pivot/Aggregator option tabs will show the inheritance icon in the top right corner when expected.",
	() => {
		loadPage("Main Project/Ticket4862?_aimms_only_wnv_templates=1&&table-v2=false");

		// All inherited
		findWidget("City Data_1")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("AllInherited");

		findWidget("City Data_1")
			.getContentsOptionEditor()
			.TabInheritsFrom()
			.should.eql("Derived from contents (Template: Base)");

		findWidget("City Data_1")
			.openTotalsOptionEditor()
			.TabInheritsFrom()
			.should.eql("Derived from contents.totals (Template: Base)");

		// Only the Totals are inherited
		findWidget("City Data_1")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("OnlyTotalsInherited");

		findWidget("City Data_1")
			.getContentsOptionEditor()
			.TabInheritsFrom()
			.should.eql("");

		findWidget("City Data_1")
			.openTotalsOptionEditor()
			.TabInheritsFrom()
			.should.eql("Derived from contents.totals (Template: Base)");

		// Only the Contents are inherited
		findWidget("City Data_1")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("OnlyContentsInherited");

		findWidget("City Data_1")
			.getContentsOptionEditor()
			.TabInheritsFrom()
			.should.eql("Derived from contents (Template: Base)");

		findWidget("City Data_1")
			.openTotalsOptionEditor()
			.TabInheritsFrom()
			.should.eql("");

		// All inherited from a different Template, this should reflect in the tooltip texts.
		findWidget("City Data_1")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("AllFromSecond");

		findWidget("City Data_1")
			.getContentsOptionEditor()
			.TabInheritsFrom()
			.should.eql("Derived from contents (Template: SecondBase)");

		findWidget("City Data_1")
			.openTotalsOptionEditor()
			.TabInheritsFrom()
			.should.eql("Derived from contents.totals (Template: SecondBase)");
	}
);
