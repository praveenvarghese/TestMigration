/*!
 * @AIMMS_FILE=models/Bugs/GL6084/45905.aimms
 */

scenario(
	"Table with display domain coupled to selectionbox did not update according to the selection in the selectionbox",
	() => {
		loadPage("Main Project/home?table-v2=false");

		findWidget("slb_filter").select("1");

		findWidget("tbl_test")
			.getNumRowsInGridViewport()
			.should.eql(15);

		findWidget("tbl_test")
			.getNumColsInGridViewport()
			.should.eql(2);

		findWidget("tbl_test")
			.getCell(2, 1)
			.setValue(true);

		findWidget("slb_filter").select("4");

		findWidget("tbl_test")
			.getNumRowsInGridViewport()
			.should.eql(15);

		findWidget("tbl_test")
			.getNumColsInGridViewport()
			.should.eql(4);
	}
);
