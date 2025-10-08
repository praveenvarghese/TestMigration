/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying heatmap legend functionality", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	//Validate min and max value displayed
	findWidget("twoNodeSetMap")
		.getHeapMapLegend()
		.getMaxDataValue()
		.should.be.equal("10.90");

	findWidget("twoNodeSetMap")
		.getHeapMapLegend()
		.getMinDataValue()
		.should.be.equal("1.26");

	// Change the min and max value and validate its desplayed in the legend
	findWidget("heatmapdata")
		.getCell(0, 3)
		.setValue("1.00");

	findWidget("twoNodeSetMap")
		.getHeapMapLegend()
		.getMaxDataValue()
		.should.be.equal("10.90");

	findWidget("twoNodeSetMap")
		.getHeapMapLegend()
		.getMinDataValue()
		.should.be.equal("1");

	findWidget("heatmapdata")
		.getCell(0, 0)
		.setValue("10.00");

	findWidget("twoNodeSetMap")
		.getHeapMapLegend()
		.getMaxDataValue()
		.should.be.equal("10");

	findWidget("twoNodeSetMap")
		.getHeapMapLegend()
		.getMinDataValue()
		.should.be.equal("1");
});
