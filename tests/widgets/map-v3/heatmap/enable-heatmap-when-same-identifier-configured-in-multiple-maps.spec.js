/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying no console error is dispalyed when same identifier is configured for multiple maps out of which only one map has heatmap data",
	() => {
		loadPage("Main Project/heapMapPage");

		findWidget("twoNodeSetMap_1").isHeatMapDisplayed().should.be.false;

		findWidget("heapMapScalar").setValue(false);

		findWidget("twoNodeSetMap_1").isHeatMapDisplayed().should.be.true;

		findWidget("heapMapScalar").setValue(true);

		findWidget("twoNodeSetMap_1").isHeatMapDisplayed().should.be.false;
	}
);
