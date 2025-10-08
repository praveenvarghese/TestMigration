/*!
 * @AIMMS_FILE=models/CustomWidgets/EnumOptionEditor/EnumOptionEditor.aimms
 */

scenario("Custom Enum Option Editor widget checks (ticket #3033)", () => {
	loadPage("Main Project/home");

	const expectedTitle = "Option Set";

	findWidget("EnumOptions")
		.CustomEnumOptionEditor()
		.getEditorTitle()
		.should.eql("Category 1");

	findWidget("EnumOptions")
		.CustomEnumOptionEditor()
		.getButtonTitle()
		.should.contain("Create view from Translation");

	// Check that the title a newly added set is as expected.
	findWidget("EnumOptions")
		.CustomEnumOptionEditor()
		.addSet()
		.getTitle(0)
		.should.eql(expectedTitle);

	// Edit the option values of this set. The check for the title is a bit of a dummy test, but the fact that it succeeds DOES mean that the
	// setting of the options went as expected. The 'w' and the 'MainExecution' settings are from dynamically generated enum lists, based on the
	// 'YearOfBirth' option.
	findWidget("EnumOptions")
		.CustomEnumOptionEditor()
		.editSet(
			0,
			{
				value: "YearOfBirth",
				type: "identifier",
			},
			{
				value: "w",
				type: "enum",
			},
			{
				value: "Area",
				type: "enum",
			},
			{
				value: "MainExecution",
				type: "enum",
			}
		)
		.getTitle(0)
		.should.eql(expectedTitle);

	// Change the identifier option. This should result in a different list of indices in the second option (so, different than the 'w' of the test above).
	findWidget("EnumOptions")
		.CustomEnumOptionEditor()
		.editSet(
			0,
			{
				value: "Difficulty",
				type: "identifier",
			},
			{
				value: "l1",
				type: "enum",
			}
		)
		.getTitle(0)
		.should.eql(expectedTitle);
});
