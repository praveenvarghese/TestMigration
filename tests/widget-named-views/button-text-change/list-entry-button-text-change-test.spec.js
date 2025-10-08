/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario(
	"Validate list entry button text changes in the Template and Named View Option Editors",
	() => {
		loadPage("Main Project/SecondHome");

		findWidget("tableWidget")
			.openTemplatesOptionEditor()
			.getListEntryButtonText()
			.should.eql("Create Template from View");

		findWidget("tableWidget")
			.openTemplatesOptionEditor()
			.setTemplateCurrentViewFromOptionEditor("Temp-1");

		findWidget("tableWidget")
			.openTemplatesOptionEditor()
			.getListEntryButtonText()
			.should.eql("Create Template");

		findWidget("tableWidget")
			.openNamedViewsOptionEditor()
			.getListEntryButtonText()
			.should.eql("Create View from Template");

		getPageMenu().navigateToPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getListEntryButtonText()
			.should.eql("Create View");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("TempNV3");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.getListEntryButtonText()
			.should.eql("Create View from Template");

		findWidget("CChart")
			.openTemplatesOptionEditor()
			.getListEntryButtonText()
			.should.eql("Create Template");
	}
);
