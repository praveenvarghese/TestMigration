/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Data_Navigator_2021-01-18/Data_Navigator_2021-01-18.aimms
 */

scenario(
	"Map nodes, arcs, and zoom level change based on external store focus for element parameter",
	() => {
		loadPage("Main Project/Import Dataset/External Location Data");

		findWidget("GH_LocationDetails")
			.getCell(0, 0)
			.click()
			.isFocused()
			.should.be.equal(true);

		// Verify nodes, arcs, zoom level
		findWidget("GH_DetailsMap")
			.getArcsCount()
			.should.equal(4);

		findWidget("GH_DetailsMap")
			.getNodesCount()
			.should.equal(5);

		findWidget("GH_ZoomLevel_Scalar")
			.getValue()
			.should.eql("14.00");

		findWidget("GH_LocationDetails")
			.getCell(1, 0)
			.click()
			.isFocused()
			.should.be.equal(true);

		// Verify nodes, arcs, zoom level
		findWidget("GH_DetailsMap")
			.getArcsCount()
			.should.equal(4);

		findWidget("GH_DetailsMap")
			.getNodesCount()
			.should.equal(3);

		findWidget("GH_ZoomLevel_Scalar")
			.getValue()
			.should.eql("17.00");

		findWidget("GH_LocationDetails")
			.getCell(0, 0)
			.click()
			.isFocused()
			.should.be.equal(true);

		// Verify nodes, arcs, zoom level
		findWidget("GH_DetailsMap")
			.getArcsCount()
			.should.equal(4);

		findWidget("GH_DetailsMap")
			.getNodesCount()
			.should.equal(5);

		findWidget("GH_ZoomLevel_Scalar")
			.getValue()
			.should.eql("14.00");
	}
);
