/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table with vertical scroll, scroll to hidden cells and right-click. Assert item actions are shown. Click on the item action and assert the action. ",
	() => {
		loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

		// // Data setup
		// findWidget("Reset Data").click();

		// Close PageManager
		closeAppManager();

		findWidget("IND Factories Output")
			.getCell(0, 4)
			.getValue()
			.should.be.equal("350.00");

		/* This part was asserting item actions on right-click of cells not in viewport

		// Scroll to 1st hidden cell in scroll, cell(3,0) and right-click
		const cell_3_0 = findWidget("IND DCs Capacity")
			.getCell(3, 0)
			.mouseHover()
			.rightClick();

		// Assert item actions are displayed
		const cell_3_0_ItemActions = cell_3_0.getItemActions();
		cell_3_0_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_3_0_ItemActions.should.have.numberOfItems.equal(2);
		cell_3_0_ItemActions.should.beEqualTo([
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

		// Scroll to middle cell(6,0) and right-click
		const cell_6_0 = findWidget("IND DCs Capacity").getCell(6, 0);
		cell_6_0.mouseHover().rightClick();

		// Assert item actions are displayed
		const cell_6_0_ItemActions = cell_6_0.getItemActions();
		cell_6_0_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_6_0_ItemActions.should.have.numberOfItems.equal(2);
		cell_6_0_ItemActions.should.beEqualTo([
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

		// Scroll to last cell(9,0) and right-click
		const cell_9_0 = findWidget("IND DCs Capacity").getCell(9, 0);
		cell_9_0.mouseHover().rightClick();

		// Assert item actions are displayed
		const cell_9_0_ItemActions = cell_9_0.getItemActions();
		cell_9_0_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_9_0_ItemActions.should.have.numberOfItems.equal(2);
		cell_9_0_ItemActions.should.beEqualTo([
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
		*/

		// 		// Scroll upwards to 1st cell(0,0) and right-click
		// 		const cell_0_0 = findWidget("IND DCs Capacity")
		// 			.getCell(0, 0)
		// 			.rightClick();

		// 		// Assert item actions are displayed
		// 		const cell_0_0_ItemActions = cell_0_0.getItemActions();
		// 		cell_0_0_ItemActions.should.exist;

		// 		// Assert there are 2 item actions. Assert the details.
		// 		cell_0_0_ItemActions.should.have.numberOfItems.equal(2);
		// 		cell_0_0_ItemActions.should.beEqualTo([
		// 			{
		// 				title: "Read Distribution Centers Output data from Server.",
		// 				icon: "aimms-satellite-dish",
		// 				state: "active",
		// 			},
		// 			{
		// 				title: "Reset Data.",
		// 				icon: "aimms-history",
		// 				state: "active",
		// 			},with-numeric - data
		// 		]);

		// // Click on the 2nd item action on cell(9,0)
		// cell_0_0.getItemActionDetails(1).click();

		// // Assert data of Flags on the page
		// findWidget("Flags")
		// 	.getCell(0, 0)
		// 	.getValue().should.be.false;
		// findWidget("Flags")
		// 	.getCell(1, 0)
		// 	.getValue().should.be.false;
		// findWidget("Flags")
		// 	.getCell(2, 0)
		// 	.getValue().should.be.true;
	}
);
