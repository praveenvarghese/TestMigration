/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario("Validate template and views associated are displayed correctly in Map widget", () => {
	loadPage("Main Project/HighCharts/HighCharts_1");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With HeatMap Change")
		.should.eql("-");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.collapseNamedView("View With HeatMap Change");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("Basic View")
		.should.eql("TemplateBasicMiscChanges");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.collapseNamedView("Basic View");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With Misc Change")
		.should.eql("TemplateBasicMiscChanges");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.collapseNamedView("View With Misc Change");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With Widget Extensions Change")
		.should.eql("TemplateNodeExtensionChanges");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.collapseNamedView("View With Widget Extensions Change");

	findWidget("NetworkMap2")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With Node Change")
		.should.eql("TemplateNodeExtensionChanges");

	findWidget("NetworkMap2")
		.openTemplatesOptionEditor()
		.getAsociatedViewsForTemplate("TemplateBasicMiscChanges")
		.should.eql(["Basic View", "View With Misc Change"]);

	findWidget("NetworkMap2")
		.openTemplatesOptionEditor()
		.collapseTemplate("TemplateBasicMiscChanges");

	findWidget("NetworkMap2")
		.openTemplatesOptionEditor()
		.getAsociatedViewsForTemplate("TemplateNodeExtensionChanges")
		.should.eql(["View With Widget Extensions Change", "View With Node Change"]);
});
