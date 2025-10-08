/*!
 * @AIMMS_FILE=models/Bugs/GL00769-ScatterToggle/ScatterToggle.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Block-edit binary cells using a scatter selection", () => {
	loadPage("Main Project/home");

	findWidget("PassTable").setScatterSelection([
		[0, 1],
		[0, 2],
		[1, 0],
		[2, 1],
	]);

	findWidget("PassTable").pressCtrl([SPECIAL_KEYS.space]);

	findWidget("PassTable")
		.getSelectionValues(0, 0, 2, 2)
		.should.be.shallowDeepEqual([
			["1.00", "1.00", "1.00"],
			["1.00", "1.00", "0.00"],
			["0.00", "1.00", "1.00"],
		]);
});
