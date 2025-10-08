/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify sidepanel tabs added based on the data.", () => {
	loadPage("Main Project/home/Load Dataset?_aimms_only_sidepanel=true");

	//Verify side panels are not displayed when page doesn't have side panels configured
	findWidget("load_dataset")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([]);

	//Validate Side Panel tabs when model has more then 6 side panels tabs configured
	openAppManager().navigateToPage("Main Project/home");

	//Verify display text of sidepanel tabs visible
	findWidget("home")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([
			"Sprint Reliability",
			"Impact Score",
			"Team Energy Score",
			"WoW Score",
			"Demo Score",
			"CSAT",
			"Improvements worked",
		]);

	//Verify sidepanel tabs toolTip
	findWidget("home")
		.getSidepanels()
		.getTabToolTip()
		.should.eql([
			"Team's reliability on the deliverables",
			"Business impact based on the increment released",
			"Energy score of the team",
			"Way of Working score of the team",
			"Demo score of the team",
			"Customer satisfaction score of the team",
			"Improvements worked on by the team",
		]);

	//Verify sidepanel tabs slug
	findWidget("home")
		.getSidepanels()
		.getTabSlug()
		.should.eql([
			"sprint_reliability",
			"impact_score",
			"energy_score",
			"way_of_working_score",
			"demo_rating",
			"csat_1",
			"improvements_1",
		]);

	//Validate Side Panel tabs when model has 6 side panels
	openAppManager().navigateToPage("Main Project/S&OP Review");

	findWidget("s_and_op_review")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([
			"Sprint Reliability",
			"Impact Score",
			"Team Energy Score",
			"WoW Score",
			"Demo Score",
			"CSAT",
		]);

	//Validate Side Panel tabs when model has less then 6 side panels
	openAppManager().navigateToPage("Main Project/Custom Reports");

	findWidget("custom_reports")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["WoW Score", "CSAT", "Improvements worked"]);

	//Validate Side Panel tabs when one of the slug provided is invalid
	openAppManager().navigateToPage("Main Project/Custom Reports/Custom A Report");

	findWidget("custom_a_report")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Impact Score", "Team Energy Score", "WoW Score", "Demo Score"]);

	//Validate Side Panel tabs when all the slugs provided are invalid
	openAppManager().navigateToPage("Main Project/Custom Reports/Custom B Report");

	findWidget("custom_b_report")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([]);
});
