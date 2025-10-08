/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_ClassicLayout/ModelFromScratch1.aimms
 */

scenario("Build a new WebUI with various widgets completely from scratch using PageV2", () => {
	loadPage("Main Project/home?table-v2=false");

	// Create a bubble chart and check whether it exists and has the expected number of bubbles
	createWidget("bubblechart", ["MinimumFL", "MaximumFL", "Megapixels"], "Camera Bubbles", 4, 3);

	findWidget("Camera Bubbles")
		.findBubbles()
		.should.have.numberOfItems(6);

	// ====================================

	// Create a table, check a value to be sure the table was correctly created, change the pivotting and re-check a value.
	createWidget("Table", ["Megapixels", "IsSmartPhone", "IsFixedLensCamera"], "CameraTable", 6, 3);

	findWidget("CameraTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("4.70");

	findWidget("CameraTable")
		.dragIndex("<IDENTIFIER-SET>")
		.dropIn("columns");

	findWidget("CameraTable")
		.dragIndex("c")
		.dropIn("rows");

	findWidget("CameraTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("4.70");

	// ====================================

	// Create a scalar widget
	createWidget("Scalar", ["SelectedCamera"], "Selected Camera");

	// ====================================
});
