/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario("Validate templates can be deleted when associated views are not available", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.isDeleteTemplateButtonDisabled("TempNV3").should.be.true;

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.isDeleteTemplateButtonDisabled("TempNV2").should.be.false;

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.deleteTemplate("TempNV3");

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.getTemplateViewList()
		.should.eql([
			{ TemplateTitle: ["TempNV3", "TempNV2"], TemplateName: ["TempNV3", "TempNV2"] },
		]);

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.deleteTemplate("TempNV2");

	findWidget("CChart")
		.openTemplatesOptionEditor()
		.getTemplateViewList()
		.should.eql([{ TemplateTitle: ["TempNV3"], TemplateName: ["TempNV3"] }]);
});
