/*!
 * @AIMMS_FILE=models/WNVTestModel/WNVTestModel.aimms
 * @HARDWARE_SHARE=large
 */

scenario(
	"Verify that the problem from ticket 4856 is fixed: BaseFlow will be selected and should remain selected.",
	() => {
		loadPage("Main Project/Ticket4856");

		// Set the Base template as the current template
		findWidget("4856 Map")
			.openTemplatesOptionEditor()
			.setTemplateCurrentViewFromOptionEditor("Base");

		// Create a new View based on the Base template
		findWidget("4856 Map")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("The View");

		findWidget("4856 Map")
			.arcSetsOptionEditor()
			.expandArcSet(0)
			.OptionIsInheritedFrom("Value")
			.should.eql("Derived from arcs.0.value (Template: Base)");

		// Override one of the other options
		findWidget("4856 Map")
			.arcSetsOptionEditor()
			.editArcSet(
				0,
				null,
				null,
				{
					value: "true",
					type: "LITERAL",
				},
				null,
				null,
				null
			);

		// As a result, ALSO the 'Value' option should not be inherited anymore
		findWidget("4856 Map")
			.arcSetsOptionEditor()
			.expandArcSet(0)
			.OptionIsInheritedFrom("Value")
			.should.eql("");
	}
);
