/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Assert that you are taken back to the right option editor tab after a change in the Named Views setup",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.setDefaultViewFromOptionEditor("Named View 1");

		findWidget("CChart")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Cost Overview",
				"OptionEditorTab Title": "Named Views",
				"OptionDialog Sub Header": "Named View 1",
			});
	}
);
