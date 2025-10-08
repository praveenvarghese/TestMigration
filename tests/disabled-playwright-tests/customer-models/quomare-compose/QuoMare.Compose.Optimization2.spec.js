/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Compose_2021-04-08/compose.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Compose model Optimization page test scenario 2", () => {
	loadPage("Main Project/Matching/Optimization");

	findWidget("Button_Optimize_1").click();

	// Restore sorting on 2nd column
	findWidget("table_SavingStars").sortColumn(1, "increase");
	findWidget("table_SavingStars").sortColumn(1, "decrease");

	findWidget("table_SavingStars")
		.getCell(6, 1)
		.getValue()
		.should.be.equal("*");

	findWidget("table_SavingStars")
		.getCell(6, 1)
		.click();

	findWidget("pSavingPercPerLanePerClient")
		.getCell(1, 5)
		.getValue()
		.should.be.equal("79,887.39");

	findWidget("pSavingPercPerLanePerClient")
		.getCell(1, 5)
		.click();

	findWidget("test")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Gouda, Nederland");

	findWidget("test")
		.getCell(0, 0)
		.click();

	findWidget("Map information_2")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Moordrecht, Nederland");

	findWidget("additional info")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("245.74");

	findWidget("Additional Information_1")
		.getCell(1, 5)
		.getValue()
		.should.be.equal("12.00");

	findWidget("Additional Information_1")
		.getCell(1, 10)
		.getValue()
		.should.be.equal("0.35");
});
