/*!
 * @AIMMS_FILE=models/Bugs/3795-4986-JohnnyTransportPageV2/StoreDelivery.aimms
 */

scenario(
	"4986-3795-AIMMS Crashing - Applying a 'topn' filter in a WebUI table that contained identifiers for which one of the domain sets was empty could result in a crash. ",
	() => {
		loadPage("Main Project/Input Data/Resources");

		findWidget("Inventory_1")
			.getCell(0, 0)
			.setValue("8500");

		findWidget("resources_1")
			.getWorkflowItems()
			.getStepElement("Cost")
			.click();

		waitForBackgroundActionToComplete();

		findWidget("Transport Bar")
			.isEmpty()
			.should.be.equal(true);
	}
);
