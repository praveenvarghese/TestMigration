/*!
 * @AIMMS_FILE=models/Bugs/GLc4339-EmptyGridWhenDialogOpen/AutoTestPlan.aimms
 * @TEST_TYPE=functional
 */

scenario("Check grid is not empty after opening dialog", () => {
	loadPage("Main Project/Locatie keuzes");

	/*
	getStatusBar()
		.getStatusBarMessageDetails(4)
		.click(); */

	findWidget("SettingsButton").click();

	// Assert Dialog page is shown on the page.
	getDialog().should.exist;

	// Click on button "Sluiten" of Dialog page
	findWidget("model_settigns").clickDialogPageButton("sluiten");

	findWidget("locatie_keuzes")
		.getVisibleWidgets()
		.should.eql([
			"SettingsButton",
			"PercentagePerMinute_Chart",
			"Locatie_keuzes_traveltime_Graph",
			"Locatie_keuzes_volume_graph",
		]);
});
