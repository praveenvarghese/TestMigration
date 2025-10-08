/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario(
	"Validate template and views associated are displayed correctly in combination chart",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDerivedTemplateForView("Named View 3")
			.should.eql("TempNV3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.collapseNamedView("Named View 3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDerivedTemplateForView("Named View 1")
			.should.eql("TempNV3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.collapseNamedView("Named View 1");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getDerivedTemplateForView("Named View 2")
			.should.eql("-");

		findWidget("CChart")
			.openTemplatesOptionEditor()
			.getAsociatedViewsForTemplate("TempNV3")
			.should.eql(["Named View 3", "Named View 1"]);

		findWidget("CChart")
			.openTemplatesOptionEditor()
			.collapseTemplate("TempNV3");

		findWidget("CChart")
			.openTemplatesOptionEditor()
			.getAsociatedViewsForTemplate("TempNV2")
			.should.eql("-");
	}
);
