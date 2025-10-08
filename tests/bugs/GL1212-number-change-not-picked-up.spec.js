/*!
 * @AIMMS_FILE=models/Bugs/GL1212-ChangeNotPickedUp/change number.aimms
 */

scenario(
	"GL1212 - A change in a number was not picked up because of the low number of decimals displayed",
	() => {
		loadPage("Main Project/home");

		// Select the 2nd cell from the left and click it, in order to open the editor.
		findWidget("table")
			.getCell(0, 1)
			.click();

		// Press 1 followed by enter.
		findWidget("table").pressKeys(["1", SPECIAL_KEYS.enter]);

		// This should lead to a value of 1.000 in the other widget.
		findWidget("ValueCheck")
			.getValue("changenumber")
			.should.be.equal("1.000");
	}
);
