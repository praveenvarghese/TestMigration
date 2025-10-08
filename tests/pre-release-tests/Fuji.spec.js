/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/fuji-model/Production Scheduling.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check the Fuji Production Scheduling app for compliance - used to be done manually before each release",
	() => {
		loadPage("Main Project/Master data/Pallet planning"); // Spelling error is in the model:)

		findWidget("Tbl_Settings")
			.getApproximateRowHeaderViewportWidth()
			.should.be.at.least(190);

		loadPage("Main Project/Master data/Aluminum prices"); // Spelling error is in the model:)

		findWidget("Tbl_AluminumPrice")
			.getCell(0, 0)
			.hasFlags(["readOnly"])
			.should.be.equal(true);

		findWidget("Tbl_AluminumPrice")
			.getNumColsInGridViewport()
			.should.be.equal(5);

		findWidget("Tbl_AluminumPrice")
			.getNumRowsInGridViewport()
			.should.be.equal(15); // This looks like 14 in the table itself, but row 15 is just 'half' visible

		// For a number of cells, no value is displayed at all (because of defaults) instead of '0' values. Assert one of these cells.
		findWidget("Tbl_AluminumPrice")
			.getCell(5, 2)
			.hasFlags(["default"])
			.should.be.equal(true);

		// The table 'Finished Products' on the 'Finished Products' page has a sorted column. Check the flag on the column header and pick one value to assert that.
		loadPage("Main Project/Master data/Finished products");

		findWidget("tbl_FinishedProducts")
			.getColHeaderCell(0, 5)
			.hasFlags(["sortedIncreasing"])
			.should.be.equal(true);

		findWidget("tbl_FinishedProducts")
			.getCell(14, 5)
			.getValue()
			.should.be.equal("264.0");

		// Check the zoom functionality of the Gantt chart on the Rhythm Wheel page.
		loadPage("Main Project/Plan data/Rhythm Wheel");

		findWidget("gantt_RhythmWheel")
			.getResources()
			.should.have.numberOfItems(2);

		findWidget("gantt_RhythmWheel")
			.findResource(["PS10"])
			.getJobs()
			.should.have.numberOfItems(10);

		findWidget("btn_RhythmWheelZoomIn").click();

		findWidget("gantt_RhythmWheel")
			.findResource(["PS10"])
			.getJobs()
			.should.have.numberOfItems(9); // After zooming in, there is only space for 8 jobs left. HOWEVER: 8 are displayed on the screen, but the 9th *is* there when looking at the elements.

		findWidget("Btn_RhythmWheelScrollLeft").click();

		findWidget("gantt_RhythmWheel")
			.findResource(["PS10"])
			.getJobs()
			.should.have.numberOfItems(7); // Same here: 6 visible, 7 in DOM Tree.

		// Load a 'fully widgetized' page, on which an empty Gantt should appear. By selecting the right 'Process device', the Gantt chart should be populated.
		loadPage("Main Project/Solution/Schedule");

		findWidget("gantt_SolutionSchedule")
			.getEmptyMessage()
			.should.be.equal("Empty ganttchartPlease specify correct contents.");

		findWidget("Tbl_SelectedLot_KPIs")
			.getCell(0, 0)
			.setValue("PS6");

		findWidget("gantt_SolutionSchedule")
			.findResource(["-"])
			.getJobs()
			.should.have.numberOfItems(11);

		// Explicitly click on the leftmost bar in the Gantt Chart, in order to make this test repeatable.
		findWidget("gantt_SolutionSchedule")
			.findResource(["-"])
			.findJob("9650--PRO-VN")
			.click();

		// Also check a random value in the table below the Gantt Chart
		findWidget("Tbl_CoilInLot")
			.getCell(3, 4)
			.getValue()
			.should.be.equal("2,737.00");

		// When clicking on any other job than the first, the CoilInLot table should be emptied
		findWidget("gantt_SolutionSchedule")
			.findResource(["-"])
			.findJob("9670--LP-NNV")
			.click();

		findWidget("Tbl_CoilInLot").getEmptyWidgetMessage().should.exist;

		/*
	// Check the Solution/Lot Overview page
	loadPage("Main Project/Solution/Lot Overview");

	findWidget("Scalar_SelectLotOverview")
		.getCell(0,0)
		.setValue("9650-PRO--VN");	// Should result in the other tables on the page to be filled with data.

	findWidget("Tbl_FinishedProductOrderboardNotPlanned")
		.getCell(1,4)
		.getValue()
		.should.be.equal("240");

	findWidget("Tbl_FinishedProductOrderboardAllocation")
		.getCell(7,3)
		.getValue()
		.should.be.equal("1,500");



	loadPage("Main Project/Order releasing/Process order");

	findWidget("Scalar_SelectLot_1")
		.setValue("9660 PRO-V");

	findWidget("Scalar_SelectLot_1")
		.setValue("9650 PRO-VN");

	findWidget("Tbl_ReleaseLot_SelectedCoils")
		.getCell(3,5)
		.setValue(1);

	findWidget("Tbl_ReleaseLot_SelectedCoils")
		.getCell(0,5)
		.getValue()
		.should.be.equal("1");
*/
	}
);
