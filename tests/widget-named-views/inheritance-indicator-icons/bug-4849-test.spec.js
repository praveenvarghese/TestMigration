/*!
 * @AIMMS_FILE=models/WNVTestModel/WNVTestModel.aimms
 */

scenario("Verify that the problem from ticket 4849 is fixed", () => {
	loadPage("Main Project/Ticket4849");

	findWidget("City Data_2")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default column width")
		.OptionIsInheritedFrom("Default column width")
		.should.eql(`Derived from Default column width (Template: BaseTemplate)`);

	findWidget("City Data_2")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default row height")
		.OptionIsInheritedFrom("Default row height")
		.should.eql("");

	findWidget("City Data_2")
		.openNamedViewsOptionEditor()
		.setCurrentViewFromOptionEditor("BaseTemplate");

	findWidget("City Data_2")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default row height")
		.setValue({
			value: "5",
			valueType: "LITERAL",
			optionEditorType: "VALUE",
		});

	findWidget("City Data_2")
		.openNamedViewsOptionEditor()
		.setCurrentViewFromOptionEditor("V on Base");

	findWidget("City Data_2")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default column width")
		.OptionIsInheritedFrom("Default column width")
		.should.eql(`Derived from Default column width (Template: BaseTemplate)`);

	findWidget("City Data_2")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default row height")
		.OptionIsInheritedFrom("Default row height")
		.should.eql(`Derived from Default row height (Template: BaseTemplate)`);
});
