/*!
 * @AIMMS_FILE=models/Bugs/GL4444-NamedViewsBug/NamedViewsBug.aimms
 * @WEBUI_MODE=end_user
 */
scenario("GL4444 - Switching between named views when UIEditable is set to 0 on the cloud", () => {
	loadPage("Main Project/home");

	// The default namedview should show 9 rows in the table
	findWidget("Ages")
		.getNumRowsInGridViewport()
		.should.be.equal(9);

	// Switch to an alternative named view
	findWidget("Ages")
		.getWidgetNamedViewButton()
		.click();

	findWidget("Ages")
		.getNamedViewItem(1)
		.click();

	findWidget("Ages")
		.getNumRowsInGridViewport()
		.should.be.equal(3);
});
