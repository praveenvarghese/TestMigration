/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Bar Chart after slicing to fixed element should have correct data in cells. ", () => {
	loadPage("Main Project/Charts");

	findWidget("Linechart")
		.getCountOfPoints()
		.should.be.equal(7);

	findWidget("Linechart")
		.openLinechartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "90000",
				valueType: "LITERAL",
			},
			{
				name: "Y-Axis Maximum Bound",
				value: "120000",
				valueType: "LITERAL",
			},
			{
				name: "Step",
				value: "5000",
				valueType: "LITERAL",
			},
		]);

	findWidget("Linechart")
		.getCountOfPoints()
		.should.be.equal(3);

	findWidget("Linechart").goInFullScreenMode();

	findWidget("Linechart").isFullScreen().should.be.true;

	findWidget("Linechart")
		.getCountOfPoints()
		.should.be.equal(3);

	findWidget("Linechart")
		.openLinechartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "60000",
				valueType: "LITERAL",
			},
		])
		.clearOptions([
			{
				name: "Y-Axis Maximum Bound",
			},
			{
				name: "Step",
			},
		]);

	findWidget("Linechart")
		.getCountOfPoints()
		.should.be.equal(5);
});
