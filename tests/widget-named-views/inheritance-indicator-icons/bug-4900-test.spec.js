/*!
 * @AIMMS_FILE=models/WNVTestModel/WNVTestModel.aimms
 * @HARDWARE_SHARE=large
 */

scenario(
	"Verify that the problem from ticket 4900 is fixed: BaseFlow will be selected and should remain selected.",
	() => {
		loadPage("Main Project/Ticket4856");

		// Note that I first accidentily though this was issue 4856, hence the name of the widget here :)

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
			.editArcSet(0, { value: "BaseFlow", type: "identifier" });

		findWidget("4856 Map")
			.getArcsCount()
			.should.be.equal(20);
	}
);
