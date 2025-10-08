/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario(
	"Add template and validate its displayed in current view dropdown when EP is configured",
	() => {
		loadPage("Main Project/Cost Overview");

		findWidget("Cost Matrix_1")
			.openTemplatesOptionEditor()
			.editTemplate(0, {
				value: "First Template",
				type: "literal",
			});

		findWidget("Cost Matrix_1")
			.openNamedViewsOptionEditor()
			.getCurrentViewDropdownList()
			.should.eql([["First Template", "Named View 1", "Named View 2", "Named View 3"]]);

		findWidget("Cost Matrix_1")
			.openNamedViewsOptionEditor()
			.getNamedWidgetViewList()
			.should.eql([
				{ ViewsTitle: ["Named View 1", "Named View 2", "Named View 3"], ViewsName: [] },
			]);
	}
);
