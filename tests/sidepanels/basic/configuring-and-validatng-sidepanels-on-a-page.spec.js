/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify sidepanel tabs added based on the data.", () => {
	loadPage("Main Project/Custom Reports/Custom C Report?_aimms_only_sidepanel=true");

	//Verify there are no side panels on the page load
	findWidget("custom_c_report")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([]);

	//Add an identifier in sidepanel settings
	findWidget("custom_c_report")
		.openPageExtensionsOptionEditor()
		.setOptions([
			{
				name: "Side Panels",
				value: "SidePanels",
				sliceInfo: [{ index: "pg", type: "FIXED-ELEMENT", value: "Home" }],
			},
		]);

	//Verify the sidepanel tabs visible
	findWidget("custom_c_report")
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

	//Verify the sidepanel tab's tooltip text
	findWidget("custom_c_report")
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

	//Verify the sidepanel tab's slug information
	findWidget("custom_c_report")
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
});
