/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Right click on table with Numeric data. Assert item actions shown dynamically. Click on the item action and assert the action. ",
	() => {
		loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

		// Data setup
		findWidget("Reset Data").click();

		// Close PageManager
		closeAppManager();

		// Right click on cell(0,0)
		const cell_0_0 = findWidget("IND Cities Coordinates")
			.getCell(0, 0)
			.rightClick();

		// Assert there are 2 item actions. Assert the details.
		cell_0_0.getItemActions().should.have.numberOfItems.equal(2);
		cell_0_0.getItemActions().should.beEqualTo([
			{
				title: "Show City coordinates on Map.",
				icon: "aimms-map",
				state: "active",
			},
			{
				title: "Get Latitude from Resources",
				icon: "aimms-location4",
				state: "active",
			},
		]);

		// Right click on cell(3,1)
		const cell_3_1 = findWidget("IND Cities Coordinates")
			.getCell(3, 1)
			.rightClick();

		// Assert there are 2 item actions. Assert the details
		cell_3_1.getItemActions().should.have.numberOfItems.equal(2);
		cell_3_1.getItemActions().should.beEqualTo([
			{
				title: "Show City coordinates on Map.",
				icon: "aimms-map",
				state: "active",
			},
			{
				title: "Get Longitude from Resources",
				icon: "aimms-location4",
				state: "active",
			},
		]);

		// Assert value of cell(2,0)
		findWidget("IND Cities Coordinates")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("0.00000000");

		// Right click on cell(2,0)
		let cell_2_0 = findWidget("IND Cities Coordinates")
			.getCell(2, 0)
			.rightClick();

		// Assert there is 1 item action. Assert the details
		cell_2_0.getItemActions().should.have.numberOfItems.equal(1);
		cell_2_0.getItemActions().should.beEqualTo([
			{
				title: "Get Latitude from Resources",
				icon: "aimms-location4",
				state: "active",
			},
		]);

		// Click on the item action
		cell_2_0.getItemActionDetails(0).click();

		// additional step to take focus on another cell.
		findWidget("IND Cities Coordinates")
			.getCell(1, 0)
			.click();

		// Assert cell(2,0) value is updated
		findWidget("IND Cities Coordinates")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("29.23847800");

		// Right click on cell(2,0)
		cell_2_0 = findWidget("IND Cities Coordinates")
			.getCell(2, 0)
			.rightClick();

		// Assert there are 2 item actions. Assert the details
		cell_2_0.getItemActions().should.have.numberOfItems.equal(2);
		cell_2_0.getItemActions().should.beEqualTo([
			{
				title: "Show City coordinates on Map.",
				icon: "aimms-map",
				state: "active",
			},
			{
				title: "Get Latitude from Resources",
				icon: "aimms-location4",
				state: "active",
			},
		]);

		// Assert cell(9,1) value is updated
		findWidget("IND Cities Coordinates")
			.getCell(9, 1)
			.getValue()
			.should.be.equal("0.00000000");

		// Right click on cell(2,0)
		let cell_9_1 = findWidget("IND Cities Coordinates")
			.getCell(9, 1)
			.rightClick();

		// Assert there is 1 item action. Assert the details
		cell_9_1.getItemActions().should.have.numberOfItems.equal(1);
		cell_9_1.getItemActions().should.beEqualTo([
			{
				title: "Get Longitude from Resources",
				icon: "aimms-location4",
				state: "active",
			},
		]);

		// Click on the item action
		cell_9_1.getItemActionDetails(0).click();

		// additional step to take focus on another cell.
		findWidget("IND Cities Coordinates")
			.getCell(8, 0)
			.click();

		// Assert cell(9,1) value is updated
		findWidget("IND Cities Coordinates")
			.getCell(9, 1)
			.getValue()
			.should.be.equal("78.10081500");

		// Right click on cell(2,0)
		cell_9_1 = findWidget("IND Cities Coordinates")
			.getCell(9, 1)
			.rightClick();

		// Assert there are 2 item actions. Assert the details
		cell_9_1.getItemActions().should.have.numberOfItems.equal(2);
		cell_9_1.getItemActions().should.beEqualTo([
			{
				title: "Show City coordinates on Map.",
				icon: "aimms-map",
				state: "active",
			},
			{
				title: "Get Longitude from Resources",
				icon: "aimms-location4",
				state: "active",
			},
		]);
	}
);
