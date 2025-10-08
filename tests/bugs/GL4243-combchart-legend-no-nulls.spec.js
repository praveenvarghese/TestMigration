/*!
 * @AIMMS_FILE=models/Bugs/GL4243-CCLegendNoNulls/CCLegendNoNulls.aimms
 */

scenario("Combination chart legend to show only entries which have some data in the chart", () => {
	loadPage("Main Project/home");

	findWidget("CityCombChart1")
		.getLegendValues()
		.should.eql(["A-p_Rain", "B-p_Rain", "B-p_Snow", "C-p_Snow", "--p_AveSpringTemp"]);
});
