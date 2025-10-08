/*!
 * @AIMMS_FILE=models/StoreFocusMigration/StoreFocusMigration.aimms
 */

scenario("Explore some TableV2->V1 scenarios", () => {
	// Switch the Table V2 option off
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");

	// Initialize the Store Focus settings
	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.setStoreFocusSetting({
			name: "<IDENTIFIER-SET>",
			value: "DeIdentifier",
			type: "identifier",
		})
		.setStoreFocusSetting({
			name: "Ei",
			value: "HetEiland",
			type: "identifier",
		})
		.setStoreFocusSetting({
			name: "La",
			value: "HetLand",
			type: "identifier",
		});

	// Switch to V2
	loadPage("Main Project/home?table-v2=true&_aimms_only_persistence.write=true");

	// Move around some indices
	findWidget("IslandTable")
		.openIndexOptionEditor()
		.moveDownIndex(1);

	findWidget("IslandTable")
		.openIndexOptionEditor()
		.moveDownIndex(0);

	// Verify that the settings have been migrated as expected. In this case that means: no effect from
	// the moving, as the order of indices is fixed in the V1 world.
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");
	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.getStoreFocusOptionsInfo()
		.should.eql([
			{ Name: "<IDENTIFIER-SET>", Value: "DeIdentifier", Index: 0 },
			{ Name: "EI", Value: "HetEiland", Index: 1 },
			{ Name: "LA", Value: "HetLand", Index: 2 },
		]);
});
