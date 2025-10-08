/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Ticket #837: Resizing columns on the fly with an unrelated hidden index does not work correctly.",
	() => {
		loadPage("Main Project/Page2?table-v2=true");

		findWidget("CityTable")
			.getCol(0)
			.getSize()
			.should.be.within(45, 55);

		findWidget("CityTable")
			.getCol(0)
			.resizeBy(50)
			.getSize()
			.should.be.within(95, 105);

		findWidget("CityTable")
			.getCol(3)
			.getSize()
			.should.be.within(45, 55);

		findWidget("CityTable")
			.getCol(3)
			.resizeBy(25)
			.getSize()
			.should.be.within(70, 80);
	}
);
