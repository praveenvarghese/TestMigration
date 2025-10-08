/*!
 * @AIMMS_FILE=models/Bugs/ExistingWidgetNames/ExistingWidgetNames.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"Add a widget with a name that already exists - this should lead to a suffix in the new name.",
	() => {
		loadPage("Main Project/home?table-v2=false");

		createWidget("table", ["Colour"], "FlowerTable"); // Widget with name FlowerTable is already present

		// Check the first cell in the widget which should exist because of the previous action.
		findWidget("FlowerTable_1") // "_1" should have been added to the name
			.getCell(0, 0)
			.getValue()
			.should.be.equal("red");
	}
);
