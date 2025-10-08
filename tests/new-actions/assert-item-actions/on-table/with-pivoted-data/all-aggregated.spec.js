/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table with horizontal scroll and all 0 values. Data being shown because of Display-domain being true. Right click on the data cells, assert item actions are shown. Click on the item action and assert the action. ",
	() => {
		loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

		// Data setup
		findWidget("Reset Data").click();

		// Close Page Manager
		closeAppManager();

		// Right click on cell(0,0)
		const cell_0_0 = findWidget("IND Cities Details")
			.getCell(0, 0)
			.rightClick();

		// Assert item actions are displayed
		const cell_0_0_ItemActions = cell_0_0.getItemActions();
		cell_0_0_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_0_0_ItemActions.should.have.numberOfItems.equal(2);
		cell_0_0_ItemActions.should.beEqualTo([
			{
				title: "Read Distribution Centers Output data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		// Right click on cell(1,0)
		const cell_1_0 = findWidget("IND Cities Details")
			.getCell(1, 0)
			.rightClick();

		// Assert item actions are displayed
		cell_1_0.getItemActions().should.not.exist;

		// Right click on cell(0,0)
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		const cell_2_0 = findWidget("IND Cities Details")
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

		// Get the item actions context-menu off
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();
		//Assert click on the respective item actions.

		// Click on the 2 actions of cell(0,0)
		findWidget("IND Cities Details")
			.getCell(0, 0)
			.rightClick()
			.getItemActionDetails(0)
			.click();

		findWidget("IND Cities Details")
			.getCell(0, 0)
			.rightClick()
			.getItemActionDetails(1)
			.click();

		// Assert data of Flags on the page
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.false;
		findWidget("Flags")
			.getCell(1, 0)
			.getValue().should.be.true;
		findWidget("Flags")
			.getCell(2, 0)
			.getValue().should.be.true;

		// Click on the 2 actions of cell(2,0)
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		findWidget("IND Cities Details")
			.getCell(2, 0)
			.rightClick()
			.getItemActionDetails(0)
			.click();

		findWidget("IND Cities Details")
			.getCell(2, 0)
			.rightClick()
			.getItemActionDetails(1)
			.click();

		// Assert data of Flags on the page
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.true;

		findWidget("Flags")
			.getCell(1, 0)
			.getValue().should.be.false;

		findWidget("Flags")
			.getCell(2, 0)
			.getValue().should.be.true;
	}
);
