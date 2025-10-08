/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM22112018/HeinekenBCM.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken app compliance script: The Hidden/Visible pages", () => {
	loadPage("Main Project/home");

	// // Before pressing the LoadCase button, check that 2 pages are visible and (a selection of) others are not.
	openAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Brewhouse",
				Slug: "brewhouse",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "Cellar",
				Slug: "cellar_input",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "DAW",
				Slug: "daw_1",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
		]);

	// Load the AIMMS case.
	findWidget("Button_AIMMS_Load_Case").click();

	// Now again do a check on the pages on whether they are visible or not. This should have been changed because of the case loading.
	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Brewhouse",
				Slug: "brewhouse",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Cellar",
				Slug: "cellar_input",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "DAW",
				Slug: "daw_1",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
		]);

	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "BCM Settings",
				Slug: "bcm_settings",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "Scenario >>>",
				Slug: "scenario_1",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "Output >>>",
				Slug: "output_landing_page_1",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "OpCo View",
				Slug: "output_opco_view_1",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
		]);

	// The calculation part
	loadPage("Main Project/Calculate");

	findWidget("Button_Optimization_GoTo_Automatic_Allocation").click();

	getCurrentPage().should.be.equal("Main Project/Calculate/Automatic Allocation");

	//Before calculation, check that the output page(s) are not visible yet
	openAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Output >>>",
				Slug: "output_landing_page_1",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
		]);

	//openAppManager().hasHiddenPages(["Main Project/Output >>>"]).should.be.true;

	findWidget("Button_Optimization_Execute").click();

	// In the official script, a Status dialog now pops up. I did not get this to work properly somehow (possibly due to the longer time needed to run the optimization
	// above). So I removed it from the model.
	// 5000 for stabilization period, maxTimeout to 15000
	findDialog("Status", 5000, 15000)
		.findButton("OK")
		.click();

	// After the calculation, the output page(s) should be visible
	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Output >>>",
				Slug: "output_landing_page_1",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
		]);
});
