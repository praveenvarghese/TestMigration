/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario("Validate After deleting the view the derived templates can be deleted", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.deleteView("Named View 3");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.deleteView("Named View 1");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.getNamedWidgetViewList()
		.should.eql([{ ViewsTitle: ["Named View 2"], ViewsName: [] }]);

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.deleteTemplate("TempNV3");

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.getTemplateViewList()
		.should.eql([{ TemplateTitle: ["TempNV2"], TemplateName: ["TempNV2"] }]);
});
