/*!
 * @AIMMS_FILE=models/Bugs/GL2428-SmallExample2428/SmallExample2428.aimms
 */

scenario(
	"GL2428 - WebUI crashed immediately on startup when having a procedure in the model with more than 32 arguments.",
	() => {
		loadPage("Main Project/home");

		// Check if a scalar value can be read. If so, the WebUI has not crashed :).
		findWidget("TheScalar")
			.getKpiModeValue("Country")
			.should.be.equal("England");
	}
);
