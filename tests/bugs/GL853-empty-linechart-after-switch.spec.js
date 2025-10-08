/*!
 * @AIMMS_FILE=models/Bugs/GL853-EmptyLinechartAfterSwitch/TransNet.aimms
 */

scenario(
	"GL853 After switching from a (valid) table using 'superslicing' to a linechart, the linechart was empty at some point.",
	() => {
		loadPage("Main Project/CubeDomain1");

		// Check whether the linechart is not empty
		//	findWidget("Table1")	// Yes, TABLE1 ;)
		//		.isEmpty()
		//		.should.be.equal(false);

		// Check the data of the line chart
		findWidget("Table1")
			.findPoints()
			.should.have.numberOfItems(30);
	}
);
