/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Page visibility tests", () => {
	loadPage("Main Project/home");

	openAppManager()
		.unfoldPageNodes(["Main Project/Step1/Step2"])
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Step1",
				NodeType: "Page",
			},
			{
				Name: "Step2",
				NodeType: "Page",
			},
			{
				Name: "Step3",
				NodeType: "Page",
			},
		]);

	getPageMenu().hasPages([
		"Main Project/home",
		"Main Project/Step1",
		"Main Project/Step1/Step2",
		"Main Project/Step1/Step2/Step3",
	]).should.be.true;

	//Close the Page Menu
	getPageMenu().closeMenu();

	openAppManager()
		.unfoldPageNodes(["Main Project/Hidden With Literals"])
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Hidden With Literals",
				Slug: "hidden_with_literals",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "Hidden Child 1",
				Slug: "hidden_child_1",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Hidden Child 2",
				Slug: "hidden_child_2",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Linked With Scalar1",
				Slug: "linked_with_scalar1",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: true,
			},
		]);

	getPageMenu().hasNotPages([
		"Main Project/Hidden With Literals",
		"Main Project/Linked With Scalar1",
		"Main Project/Hidden With Literals/Hidden Child 1",
		"Main Project/Hidden With Literals/Hidden Child 2",
	]).should.be.true;

	//Close the Page Menu.
	getPageMenu().closeMenu();

	findWidget("Table1")
		.getCell(0, 0)
		.setValue("1.00");

	openAppManager()
		.unfoldPageNodes(["Main Project/Step1/Step2", "Main Project/Hidden With Literals"])
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Hidden With Literals",
				Slug: "hidden_with_literals",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: true,
			},
			{
				Name: "Hidden Child 1",
				Slug: "hidden_child_1",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Hidden Child 2",
				Slug: "hidden_child_2",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Linked With Scalar1",
				Slug: "linked_with_scalar1",
				NodeType: "Pagev2-grid",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Step1",
				Slug: "page1",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Step2",
				Slug: "page11",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Step3",
				Slug: "step3",
				NodeType: "Page",
				NodeHasHiddenIndication: false,
			},
		]);

	getPageMenu().hasPages([
		"Main Project/home",
		"Main Project/Linked With Scalar1",
		"Main Project/Step1",
		"Main Project/Step1/Step2",
		"Main Project/Step1/Step2/Step3",
	]).should.be.true;
});
