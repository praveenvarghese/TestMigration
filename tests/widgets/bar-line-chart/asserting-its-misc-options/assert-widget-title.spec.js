/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Asserting Bar-Line chart widget title controlled through it's Misc option.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

	// Assert the title of Bar-Line Chart Widget on the Page.
	// Here widget title is fetched from an identifier.
	findWidget("Another_BLC1")
		.getTitle()
		.should.be.equal("Title from an Identifier and includes ~!@#$%^&*() characters.");

	// Assert the title of another Bar-Line Chart Widget on the Page.
	// Here widget title is left blank
	findWidget("Another_BLC2")
		.getTitle()
		.should.be.equal("");

	// Assert the title of another Bar-Line Chart Widget on the Page.
	// Here widget title is fetched from a literal.
	findWidget("Another_BLC3")
		.getTitle()
		.should.be.equal("Subset data");

	// Open SidePanel and update value of Title identifier, that is used as Title for Bar-Line chart on page.
	findWidget("other_bar-line_charts")
		.getSidepanels()
		.openSidepanelTab("Widget Settings");
	findWidget("Title").setValue("MKG testing Bar-Line chart. This title is from an Identifier.");
	findWidget("other_bar-line_charts")
		.getSidepanels()
		.closeSidepanelTab();

	// Assert the title of Bar-Line Chart Widget on the Page.
	findWidget("Another_BLC1")
		.getTitle()
		.should.be.equal("MKG testing Bar-Line chart. This title is from an Identifier.");

	// Assert the title of another Bar-Line Chart Widget on the Page.
	// Assert that this title is not changed.
	findWidget("Another_BLC2")
		.getTitle()
		.should.be.equal("");

	// Assert the title of another Bar-Line Chart Widget on the Page.
	// Assert that this title is not changed.
	findWidget("Another_BLC3")
		.getTitle()
		.should.be.equal("Subset data");

	// Assert the literal title text used for 2nd Bar-Line chart on the page.
	findWidget("Another_BLC2")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Title")
		.setValue({
			value: "MKG testing Bar-Line chart. This title is from a Literal.",
			valueType: "LITERAL",
			optionEditorType: "VALUE",
		});
	// Close the option Editor
	findWidget("Another_BLC2").closeOptionDialog();

	// Assert the title of Bar-Line Chart Widget on the Page.
	// Assert that this title is not updated.
	findWidget("Another_BLC1")
		.getTitle()
		.should.be.equal("MKG testing Bar-Line chart. This title is from an Identifier.");

	// Assert the title of this Bar-Line Chart Widget reflects the updated text
	findWidget("Another_BLC2")
		.getTitle()
		.should.be.equal("MKG testing Bar-Line chart. This title is from a Literal.");

	// Assert the title of another Bar-Line Chart Widget on the Page.
	// Assert that this title is not changed.
	findWidget("Another_BLC3")
		.getTitle()
		.should.be.equal("Subset data");
});
