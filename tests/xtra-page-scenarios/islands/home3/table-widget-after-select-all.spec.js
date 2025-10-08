/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"When clicking on 'Select All' in the 'Plane Selection' widget the 'Plane Characteristics' table should have 3 rows",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("PlaneSelectionBox").selectAll();

		findWidget("Plane Data")
			.getNumRowsInGridViewport()
			.should.be.equal(3);
	}
);
