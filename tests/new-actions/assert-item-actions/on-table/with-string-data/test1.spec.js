/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table with string data. Right click on the data cells and assert item actions are shown. Update the data on the cells. Assert again right-click item actions are shown",
	() => {
		loadPage("Main Project/Aircraft Maintenance Calendar/Planes Maintenance Renewal DateTime");

		// Close the Page Manager
		closeAppManager();

		// Right click on cell(0,0)
		let cell_0_0 = findWidget("Planes Maintenance Renewal Date")
			.getCell(0, 0)
			.rightClick();

		// Assert item actions are displayed
		let cell_0_0_ItemActions = cell_0_0.getItemActions();
		cell_0_0_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_0_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_0_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		findWidget("Planes Maintenance Renewal Date")
			.getCell(0, 0)
			.click();

		// Right click on cell(2,0)
		const cell_2_0 = findWidget("Planes Maintenance Renewal Date")
			.getCell(2, 0)
			.rightClick();

		// Assert item actions are displayed
		const cell_2_0_ItemActions = cell_2_0.getItemActions();
		cell_2_0_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_2_0_ItemActions.should.have.numberOfItems.equal(3);
		cell_2_0_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "inactive",
			},
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "inactive",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		findWidget("Planes Maintenance Renewal Date")
			.getCell(2, 0)
			.click();

		// Right click on cell(4,0)
		const cell_4_0 = findWidget("Planes Maintenance Renewal Date")
			.getCell(4, 0)
			.rightClick();

		// Assert item actions are displayed
		const cell_4_0_ItemActions = cell_4_0.getItemActions();
		cell_4_0_ItemActions.should.exist;

		// Assert there ia 1 item action. Assert the details.
		cell_4_0_ItemActions.should.have.numberOfItems.equal(1);
		cell_4_0_ItemActions.should.beEqualTo([
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		findWidget("Planes Maintenance Renewal Date")
			.getCell(4, 0)
			.click();

		// Right click on cell(6,0)
		let cell_6_0 = findWidget("Planes Maintenance Renewal Date")
			.getCell(6, 0)
			.rightClick();

		// Assert item actions are displayed
		let cell_6_0_ItemActions = cell_6_0.getItemActions();
		cell_6_0_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_6_0_ItemActions.should.have.numberOfItems.equal(3);
		cell_6_0_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "inactive",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		findWidget("Planes Maintenance Renewal Date")
			.getCell(6, 0)
			.click();

		// Update data on the table cells.
		// Set Date&Time to (6,0) cell
		findWidget("Planes Maintenance Renewal Date")
			.getCell(6, 0)
			.setValue("2021-03-06 10:30");

		// Clear the entries of (0,0) cell.
		findWidget("Planes Maintenance Renewal Date")
			.getCell(0, 0)
			.clearValue();

		// Now that the data is updated on the cells. Right-click and assert item-actions are indeed shown

		// Right click on cell(6,0)
		cell_6_0 = findWidget("Planes Maintenance Renewal Date")
			.getCell(6, 0)
			.rightClick();

		// Assert item actions are displayed
		cell_6_0_ItemActions = cell_6_0.getItemActions();
		cell_6_0_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_6_0_ItemActions.should.have.numberOfItems.equal(3);
		cell_6_0_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "inactive",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		findWidget("Planes Maintenance Renewal Date")
			.getCell(6, 0)
			.click();

		// Right click on cell(0,0)
		cell_0_0 = findWidget("Planes Maintenance Renewal Date")
			.getCell(0, 0)
			.rightClick();

		// Assert item actions are displayed
		cell_0_0_ItemActions = cell_0_0.getItemActions();
		cell_0_0_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_0_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_0_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		/*Since item actions are based on StoreFocus updated value. Not asserting again the storefocus on right-click on the cell.*/
	}
);
