/*!
 * @AIMMS_FILE=models/TypeSwitching/TypeSwitching.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Switch a Table widget to various types, changing options on the go, and come back to the Table in the end. ",
	() => {
		loadPage("Main Project/home?table-v2=false");

		// The widget starts as a Table widget. Change the upper threshold value, which should be retained until the very end.
		findWidget("Classics")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Upper threshold")
			.setValue({
				value: "8",
				valueType: "LITERAL",
				optionEditorType: "VALUE",
			});

		// Now do some type switching, including some tests to verify the switchings succeeded.
		// Linechart
		findWidget("Classics")
			.openChangeWidgetTypeOptionEditor()
			.changeWidgetTypeTo("linechart");

		findWidget("Classics").should.be.a.widgetOfType("linechart");

		findWidget("Classics")
			.getYAxisElements()
			.should.have.numberOfItems.equal(10);

		// Barchart
		findWidget("Classics")
			.openChangeWidgetTypeOptionEditor()
			.changeWidgetTypeTo("barchart");

		findWidget("Classics").should.be.a.widgetOfType("barchart");

		findWidget("Classics")
			.getNumberOfBars()
			.should.be.equal(19);

		// Piechart
		findWidget("Classics")
			.openChangeWidgetTypeOptionEditor()
			.changeWidgetTypeTo("piechart");

		findWidget("Classics").should.be.a.widgetOfType("piechart");

		findWidget("Classics")
			.getWedgesCount()
			.should.be.equal(22); // Including the internal 'circle' with 2 wedges

		// And back to the Table it is...
		findWidget("Classics")
			.openChangeWidgetTypeOptionEditor()
			.changeWidgetTypeTo("table");

		findWidget("Classics").should.be.a.widgetOfType("table");

		// Verify the specific Table setting done in the beginning of this test
		findWidget("Classics")
			.getCell(2, 0)
			.hasAnnotations(["threshold-high"])
			.should.be.equal(true);

		findWidget("Classics")
			.getCell(5, 0)
			.hasAnnotations(["threshold-high"])
			.should.be.equal(false);
	}
);
