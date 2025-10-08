/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Validate the named views when ep is added to current view", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.openNamedViewsOptionEditor()
		.setDefaultViewFromOptionEditor("Named View 2");

	// Verify Page Settings Option editor is available
	findWidget("new_page").getOptionDialog().should.exist;

	findWidget("CChart")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart")
		.getNamedViewItem(2)
		.click();

	// Verify Page Settings Option editor is available
	findWidget("new_page").getOptionDialog().should.exist;
});
