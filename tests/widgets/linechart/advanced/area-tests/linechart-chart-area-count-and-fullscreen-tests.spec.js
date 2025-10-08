/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario(
	"Verifying line chart areas count when contents are added and also full screen functionality",
	() => {
		loadPage("Main Project/Charts/lineChartArea");

		//Verify line chart area before removing contents
		findWidget("firstLine").isAreaApplied().should.be.true;

		findWidget("firstLine")
			.getNumberOFLineChartAreaCount()
			.should.eql(3);

		//Verify line chart area after removing contents
		findWidget("firstLine")
			.getContentsOptionEditor()
			.removeSpecificItemFromCurrentContents("OtherInfo");

		findWidget("firstLine").isAreaApplied().should.be.true;

		findWidget("firstLine")
			.getNumberOFLineChartAreaCount()
			.should.eql(2);

		//Verify line chart area after removing contents
		findWidget("firstLine")
			.getContentsOptionEditor()
			.removeSpecificItemFromCurrentContents("SomeInfo");

		findWidget("firstLine").isAreaApplied().should.be.true;

		findWidget("firstLine")
			.getNumberOFLineChartAreaCount()
			.should.eql(1);

		//Validate In full screen mode the count of area in line chart
		findWidget("firstLine").goInFullScreenMode();

		findWidget("firstLine").isFullScreen().should.be.true;

		findWidget("firstLine").isAreaApplied().should.be.true;

		findWidget("firstLine")
			.getNumberOFLineChartAreaCount()
			.should.eql(1);

		findWidget("firstLine")
			.getContentsOptionEditor()
			.addItemFromAvailableContents("OtherInfo");

		findWidget("firstLine").isAreaApplied().should.be.true;

		findWidget("firstLine")
			.getNumberOFLineChartAreaCount()
			.should.eql(2);
	}
);
