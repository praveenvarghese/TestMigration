/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Check table with user annotations and user flags", () => {
	loadPage("Main Project/Annotations");

	findWidget("P2TableAnnotations")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("P2TableAnnotations")
		.getNumColsInGridViewport()
		.should.be.equal(3);

	const assertHasAnnotation = function(row, col, annotation) {
		findWidget("P2TableAnnotations")
			.getCell(row, col)
			.hasAnnotations([annotation])
			.should.be.equal(true);
	};

	assertHasAnnotation(0, 0, "even");
	assertHasAnnotation(0, 1, "odd");
	assertHasAnnotation(0, 2, "even");
	assertHasAnnotation(1, 0, "odd");
	assertHasAnnotation(1, 1, "even");
	assertHasAnnotation(1, 2, "odd");
	assertHasAnnotation(2, 0, "even");
	assertHasAnnotation(2, 1, "odd");
	assertHasAnnotation(2, 2, "even");

	const assertHasFlag = function(row, col, flag) {
		findWidget("P2TableAnnotations")
			.getCell(row, col)
			.hasFlags([flag])
			.should.be.equal(true);
	};

	assertHasFlag(1, 0, "readOnly");
	assertHasFlag(1, 1, "readOnly");
	assertHasFlag(1, 2, "readOnly");
});
