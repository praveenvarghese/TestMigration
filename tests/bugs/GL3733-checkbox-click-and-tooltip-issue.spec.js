/*!
 * @AIMMS_FILE=models/Bugs/GL3733-CheckboxIssue/BinaryCheckbox.aimms
 */
scenario("GL377-Bug fix on tooltip and click on check box", () => {
	loadPage("Main Project/home");

	findWidget("scalarcheckbox").getValue("p_Checkbox").should.be.false;

	findWidget("scalarWidget").getValue().should.be.false;

	findWidget("scalarcheckbox")
		.getScalarCell("p_Checkbox")
		.mouseHover();

	findWidget("scalarcheckbox")
		.getScalarCell("p_Checkbox")
		.getParentTooltip()
		.should.be.equal("0.00");

	findWidget("scalarcheckbox")
		.getScalarCell("p_Checkbox")
		.toggleCheckbox();

	findWidget("scalarcheckbox").getValue("p_Checkbox").should.be.true;

	findWidget("scalarcheckbox")
		.getScalarCell("p_Checkbox")
		.getParentTooltip()
		.should.be.equal("1.00");

	findWidget("scalarWidget").getValue().should.be.true;
});
