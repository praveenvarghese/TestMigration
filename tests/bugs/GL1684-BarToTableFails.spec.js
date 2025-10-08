/*!
 * @AIMMS_FILE=models/Bugs/GL1684-BarToTableFails/BarToTableFails.aimms
 */

scenario(
	"GL1684 - In AIMMS 4.67.1, switching from bar to table in a specific (sliced) widget left you with an empty table.",
	() => {
		loadPage("Main Project/home");

		// Verify that there are 4 bars displayed in the initial Barchart.
		findWidget("SupplyTable")
			.getNumberOfBars()
			.should.be.equal(4);

		// Change the type of the widget to Table.
		findWidget("SupplyTable")
			.openChangeWidgetTypeOptionEditor()
			.changeWidgetTypeTo("table");

		// Make sure the type has changed.
		findWidget("SupplyTable").should.be.a.widgetOfType("table");

		// Make sure that the table contains data.
		findWidget("SupplyTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("15.00");
	}
);
