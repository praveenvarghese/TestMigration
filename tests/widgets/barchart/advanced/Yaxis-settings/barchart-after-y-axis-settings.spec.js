/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("On applying Y-Axis range, Bar Chart shows only relevant data.", () => {
	loadPage("Main Project/Charts");

	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(7);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "90000",
				valueType: "LITERAL",
			},
			{
				name: "Y-Axis Maximum Bound",
				value: "100000",
				valueType: "LITERAL",
			},
			{
				name: "Step",
				value: "10000",
				valueType: "LITERAL",
			},
		]);

	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(3);

	findWidget("Barchart").goInFullScreenMode();

	findWidget("Barchart").isFullScreen().should.be.true;

	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(3);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "69500",
				valueType: "LITERAL",
			},
		]);

	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(5);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "30000",
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
	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(6);

	findWidget("Barchart").closeOptionDialog();

	findWidget("Barchart").exitFullScreenMode();

	findWidget("Barchart").isFullScreen().should.be.false;

	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(6);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Maximum Bound",
				value: "90000",
				valueType: "LITERAL",
			},
		]);
	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(6);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "55000",
				valueType: "LITERAL",
			},
		]);

	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(5);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Step",
				value: "30000",
				valueType: "LITERAL",
			},
		]);
	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(5);

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "70000",
				valueType: "LITERAL",
			},
			{
				name: "Step",
				value: "5000",
				valueType: "LITERAL",
			},
		]);
	findWidget("Barchart")
		.getNumberOfBars()
		.should.be.equal(4);
});
