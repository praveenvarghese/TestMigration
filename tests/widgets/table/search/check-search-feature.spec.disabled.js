/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Dummy table search test ", () => {
	loadPage("Main Project/home");

	findWidget("PepperData")
		.getTableSearchButton()
		.search("Test");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachUp();

	findWidget("PepperData")
		.getTableSearchButton()
		.serachDown();

	findWidget("PepperData")
		.getTableSearchButton()
		.clearSearch();

	findWidget("PepperData")
		.getTableSearchButton()
		.closeSearch();

	findWidget("PepperData")
		.getTableSearchButton()
		.search("Test");
});
