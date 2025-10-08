/*!
 * @AIMMS_FILE=models/CustomWidgets/CollapsibleTitles/CollapsibleTitles.aimms
 */

scenario("Custom Collapsible Titles widget checks (ticket #3032)", () => {
	loadPage("Main Project/home");

	findWidget("CustomCollapsibleTitle")
		.CustomCollapsibleTitlesOptionEditor()
		.getEditorTitle()
		.should.eql("Category 1");

	// Check that the title of the list entry becomes a concatenation of both option values.
	findWidget("CustomCollapsibleTitle")
		.CustomCollapsibleTitlesOptionEditor()
		.editSet(
			0,
			{
				value: "OptionAValue",
				type: "identifier",
			},
			{
				value: "OptionBValue",
				type: "identifier",
			}
		)
		.getTitle(0)
		.should.eql("OptionAValue(l) OptionBValue(l)");

	// Do the same, now by changing one of the option values.
	findWidget("CustomCollapsibleTitle")
		.CustomCollapsibleTitlesOptionEditor()
		.editSet(
			0,
			{
				value: "BVal",
				type: "identifier",
			},
			{
				value: "OptionAValue",
				type: "identifier",
			}
		)
		.getTitle(0)
		.should.eql("BVal(l) OptionAValue(l)");

	// Add another set, with just one option specified
	findWidget("CustomCollapsibleTitle")
		.CustomCollapsibleTitlesOptionEditor()
		.addSet({
			value: "OptionAValue",
			type: "identifier",
		})
		.getTitle(1)
		.should.eql("OptionAValue(l)");

	// Add yet another set, but without specifying any options yet. This should result in an empty title by default.
	findWidget("CustomCollapsibleTitle")
		.CustomCollapsibleTitlesOptionEditor()
		.addSet()
		.getTitle(2)
		.should.eql("samples.2");

	// Remove set 1 and count (and verify) the result.
	findWidget("CustomCollapsibleTitle")
		.CustomCollapsibleTitlesOptionEditor()
		.deleteSet(1)
		.getNumberOfListEntries()
		.should.eql(2);
});
