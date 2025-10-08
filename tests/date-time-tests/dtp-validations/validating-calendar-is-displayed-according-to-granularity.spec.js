/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test validating calendar is displayed according to the granularity", () => {
	loadPage("Main Project/Calendar Tests/DTP Error Handling Tests1");

	// Validate calendar is displayed according to minutes granularity
	findWidget("Granularity Table")
		.getCell(0, 0)
		.isGranularity("minutes").should.be.true;

	// Validate calendar is displayed according to Hour granularity
	findWidget("Granularity Table")
		.getCell(1, 0)
		.isGranularity("hours").should.be.true;

	// Validate calendar is displayed according to day granularity
	findWidget("Granularity Table")
		.getCell(2, 0)
		.isGranularity("day").should.be.true;

	// Validate calendar is displayed according to month granularity
	findWidget("Granularity Table")
		.getCell(3, 0)
		.isGranularity("month").should.be.true;

	// Validate calendar is displayed according to year granularity
	findWidget("Granularity Table")
		.getCell(4, 0)
		.isGranularity("year").should.be.true;
});
