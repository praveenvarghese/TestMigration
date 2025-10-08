/*!
 * @AIMMS_FILE=models/TemplateModel/TransNet.aimms
 */

scenario(
	"Clear view and validate the currnt view and default view updated accordingly, Validate the same in option editor",
	() => {
		loadPage("Main Project/SplineChart/SplineChart_1");

		findWidget("DemandColumnChart_7")
			.openNamedViewsOptionEditor()
			.clearView(0);

		findWidget("DemandColumnChart_7")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("");

		findWidget("DemandColumnChart_7")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("");
	}
);
