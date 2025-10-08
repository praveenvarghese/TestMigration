/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario("Validate template and views associated are displayed correctly in Map widget", () => {
	loadPage("Main Project/SecondHome");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With Contents Change")
		.should.eql("-");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.collapseNamedView("View With Contents Change");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("Basic View")
		.should.eql("Temp-1");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.collapseNamedView("Basic View");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With Miscellaneous")
		.should.eql("Temp-1");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.collapseNamedView("View With Miscellaneous");

	findWidget("tableWidget")
		.openNamedViewsOptionEditor()
		.getDerivedTemplateForView("View With Pivot Change")
		.should.eql("-");

	findWidget("tableWidget")
		.openTemplatesOptionEditor()
		.getAsociatedViewsForTemplate("Temp-1")
		.should.eql(["View With Miscellaneous", "Basic View"]);
});
