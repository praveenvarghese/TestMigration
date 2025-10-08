/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On a table with binary data. Right click on the data cells and assert item actions are shown. Update the data on the cells. Assert again right-click item actions are shown",
	() => {
		loadPage("Main Project/Planes Info?_aimms_only_table_itemactions=true");

		// Close the Page Manager
		closeAppManager();

		// Right click on cell (0,0)

		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions().should.exist;

		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 10 item actions. Assert the details.
		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(10);

		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{ title: "Inactive Action 1", icon: "aimms-palette2", state: "inactive" },
				{ title: "Inactive Action 2", icon: "aimms-MKG", state: "active" },
				{ title: "Inactive Action 3", icon: "", state: "inactive" },
				{ title: "Inactive Action 4", icon: "aimms-spray", state: "inactive" },
				{ title: "Inactive Action 5", icon: "aimms-shutter", state: "inactive" },
				{ title: "", icon: "aimms-history", state: "inactive" },
				{ title: "  ", icon: "aimms-droplet", state: "inactive" },
				{ title: "", icon: "aimms-design", state: "inactive" },
				{ title: "Inactive Action 9", icon: "optimize-btn-icon", state: "inactive" },
				{ title: "Inactive Action 10", icon: "entypo-infinity", state: "inactive" },
			]);

		findWidget("AllowedRoutes").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);

		// Right click on cell (1,0)
		findWidget("AllowedRoutes")
			.getCell(1, 0)
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 10 item actions. Assert the details.
		findWidget("AllowedRoutes")
			.getCell(1, 0)
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(10);
		findWidget("AllowedRoutes")
			.getCell(1, 0)
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{ title: "Inactive Action 1", icon: "aimms-palette2", state: "inactive" },
				{ title: "Inactive Action 2", icon: "aimms-MKG", state: "inactive" },
				{ title: "Inactive Action 3", icon: "", state: "inactive" },
				{ title: "Inactive Action 4", icon: "aimms-spray", state: "inactive" },
				{ title: "Inactive Action 5", icon: "aimms-shutter", state: "inactive" },
				{ title: "", icon: "aimms-history", state: "inactive" },
				{ title: "  ", icon: "aimms-droplet", state: "inactive" },
				{ title: "", icon: "aimms-design", state: "inactive" },
				{ title: "Inactive Action 9", icon: "optimize-btn-icon", state: "inactive" },
				{ title: "Inactive Action 10", icon: "entypo-infinity", state: "inactive" },
			]);

		findWidget("AllowedRoutes").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);

		// Right click on cell (4,2)
		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 10 item actions. Assert the details.
		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(10);

		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{ title: "Inactive Action 1", icon: "aimms-palette2", state: "active" },
				{ title: "Inactive Action 2", icon: "aimms-MKG", state: "inactive" },
				{ title: "Inactive Action 3", icon: "", state: "inactive" },
				{ title: "Inactive Action 4", icon: "aimms-spray", state: "inactive" },
				{ title: "Inactive Action 5", icon: "aimms-shutter", state: "inactive" },
				{ title: "", icon: "aimms-history", state: "inactive" },
				{ title: "  ", icon: "aimms-droplet", state: "inactive" },
				{ title: "", icon: "aimms-design", state: "inactive" },
				{ title: "Inactive Action 9", icon: "optimize-btn-icon", state: "inactive" },
				{ title: "Inactive Action 10", icon: "entypo-infinity", state: "inactive" },
			]);

		findWidget("AllowedRoutes").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);

		// Update data on the table cells.
		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.setValue(true);
		// Clear the entries of (0,0) cell.
		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.setValue(false);

		// Now that the data is updated on the cells. Right-click and assert item-actions are indeed shown

		// Right click on cell (0,0)

		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 10 item actions. Assert the details.
		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(10);
		findWidget("AllowedRoutes")
			.getCell(0, 0)
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{ title: "Inactive Action 1", icon: "aimms-palette2", state: "inactive" },
				{ title: "Inactive Action 2", icon: "aimms-MKG", state: "active" },
				{ title: "Inactive Action 3", icon: "", state: "inactive" },
				{ title: "Inactive Action 4", icon: "aimms-spray", state: "inactive" },
				{ title: "Inactive Action 5", icon: "aimms-shutter", state: "inactive" },
				{ title: "", icon: "aimms-history", state: "inactive" },
				{ title: "  ", icon: "aimms-droplet", state: "inactive" },
				{ title: "", icon: "aimms-design", state: "inactive" },
				{ title: "Inactive Action 9", icon: "optimize-btn-icon", state: "inactive" },
				{ title: "Inactive Action 10", icon: "entypo-infinity", state: "inactive" },
			]);

		findWidget("AllowedRoutes").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);

		// Right click on cell (4,2)
		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 10 item actions. Assert the details.
		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(10);
		findWidget("AllowedRoutes")
			.getCell(4, 2)
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{ title: "Inactive Action 1", icon: "aimms-palette2", state: "active" },
				{ title: "Inactive Action 2", icon: "aimms-MKG", state: "inactive" },
				{ title: "Inactive Action 3", icon: "", state: "inactive" },
				{ title: "Inactive Action 4", icon: "aimms-spray", state: "inactive" },
				{ title: "Inactive Action 5", icon: "aimms-shutter", state: "inactive" },
				{ title: "", icon: "aimms-history", state: "inactive" },
				{ title: "  ", icon: "aimms-droplet", state: "inactive" },
				{ title: "", icon: "aimms-design", state: "inactive" },
				{ title: "Inactive Action 9", icon: "optimize-btn-icon", state: "inactive" },
				{ title: "Inactive Action 10", icon: "entypo-infinity", state: "inactive" },
			]);

		/*
		Since item actions are based on StoreFocus updated value.
		Not asserting again the storefocus on right-click on the cell.
		*/
	}
);
