/*!
 * @AIMMS_FILE=models/WNVTestModel/WNVTestModel.aimms
 * @HARDWARE_SHARE=large
 */

scenario(
	"Validate the displaying of inheritance icons at the expected places when using templates and views",
	() => {
		loadPage("Main Project/Various Widgets");

		// The default view is empty, so no inheritance icons should be displayed upon starting the WebUI.
		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Title")
			.should.eql("");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Lower threshold")
			.should.eql("");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Upper threshold")
			.should.eql("");

		// Make the view 'V on Base' the current view and check the inheritance icons
		findWidget("City Data")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("V on Base");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Title")
			.should.eql("Derived from Title (Template: Base)");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Lower threshold")
			.should.eql("Derived from Lower threshold (Template: Base)");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Upper threshold")
			.should.eql("");

		// Override one of the options and make sure that the inheritance icon is gone (but remains for the unaffected options)
		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Title")
			.setValue({
				value: "Another Title",
				valueType: "LITERAL",
				optionEditorType: "STRING",
				sliceInfo: null,
			});

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Title")
			.should.eql("");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Lower threshold")
			.should.eql("Derived from Lower threshold (Template: Base)");

		findWidget("City Data")
			.openMiscellaneousOptionEditor()
			.OptionIsInheritedFrom("Upper threshold")
			.should.eql("");
	}
);
