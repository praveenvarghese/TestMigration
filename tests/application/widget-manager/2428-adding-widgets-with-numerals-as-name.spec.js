/*!
 * @AIMMS_FILE=models/Bugs/GL846-WidgetsDisplayedAsEmpty/WidgetsDisplayedAsEmpty.aimms
 */

scenario(
	"Ticket 2458: Asserting we can add widgets with all numeric and special characters name.",
	() => {
		loadPage("Main Project/Bugs/2458");

		// Create a new widget with all numerals as its name. Assert widget is created.
		createWidget("table", [], "123456");
		findWidget("123456").isVisibleOnWebUI().should.be.true;

		// Create another new widget with all numerals as its name. Assert widget is created.
		createWidget("table", [], "010203");
		findWidget("010203").isVisibleOnWebUI().should.be.true;

		// Create another new widget with Kannada text as its name. Assert widget is created.
		createWidget("table", [], "ಮಧು ಗೌಡ");
		findWidget("ಮಧು ಗೌಡ").isVisibleOnWebUI().should.be.true;
	}
);
