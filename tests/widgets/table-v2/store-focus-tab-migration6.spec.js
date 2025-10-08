/*!
 * @AIMMS_FILE=models/StoreFocusMigration/StoreFocusMigration.aimms
 */

scenario("Explore some TableV2->V1 scenarios", () => {
	// Switch the Table V2 option on
	loadPage("Main Project/home?table-v2=true&_aimms_only_persistence.write=true");

	// Initialize the Store Focus settings, leaving out one of the three indices
	findWidget("IslandTable")
		.openIndexOptionEditor()
		.addIndices([
			{ index: "<IDENTIFIER-SET>", value: "DeIdentifier" },
			{
				index: "la",
				value: "HetLand",
			},
		]);

	// Switch back to V1
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");

	// Verify that the settings have been migrated as expected
	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.getStoreFocusOptionsInfo()
		.should.eql([
			{ Name: "<IDENTIFIER-SET>", Value: "DeIdentifier", Index: 0 },
			{ Name: "EI", Value: "", Index: 1 },
			{ Name: "LA", Value: "HetLand", Index: 2 },
		]);
});
