/*!
 * @AIMMS_FILE=models/Bugs/GL00635-CombiChartLimit/TransNet.aimms
 */

scenario("Check combination chart threshold for number of data points", () => {
	loadPage("Main Project/Home");

	// Validate message in combination chart when data threshold is exceeded
	findWidget("CC_T1")
		.getResolutionMessage()
		.should.eql(
			"Unsupported: Unable to display the large dataset on your chart.To address this issue, consider the following options:1. Exploring alternative pivoting methods to better organize and present the data.2. Reducing the number of chart elements by slicing or removing less critical content.3. Adjusting the threshold for the number of data points displayed by the Combination Chart widget. For detailed instructions, please refer to the documentation."
		);
});
