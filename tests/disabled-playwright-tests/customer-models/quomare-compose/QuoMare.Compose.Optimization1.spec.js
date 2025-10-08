/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Compose_2021-04-08/compose.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Compose model Optimization page test scenario 1", () => {
	loadPage("Main Project/Matching/Optimization");

	findWidget("Button_Optimize_1").click();

	// Restore sorting on 2nd column
	findWidget("table_SavingStars").sortColumn(1, "increase");
	findWidget("table_SavingStars").sortColumn(1, "decrease");

	findWidget("table_SavingStars")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("**");

	findWidget("table_SavingStars")
		.getCell(5, 0)
		.click();

	findWidget("pSavingPercPerLanePerClient")
		.getCell(2, 5)
		.getValue()
		.should.be.equal("5,317.59");

	findWidget("pSavingPercPerLanePerClient")
		.getCell(2, 5)
		.click();

	findWidget("test")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("Zoetermeer, Nederland");

	findWidget("test")
		.getCell(1, 1)
		.click();

	findWidget("Map information_2")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("Maarssen, Nederland");

	findWidget("additional info")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("212.42");

	findWidget("Additional Information_1")
		.getCell(1, 9)
		.getValue()
		.should.be.equal("0.92");
});
