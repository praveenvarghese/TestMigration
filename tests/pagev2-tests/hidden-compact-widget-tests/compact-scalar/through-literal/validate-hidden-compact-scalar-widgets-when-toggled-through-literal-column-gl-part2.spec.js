/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from literal in GL layout page which has only column part2",
	() => {
		loadPage("Main Project/columnPageWIthLiteral0");

		const pixelTolerance = 15;

		findWidget("columnpagewithliteral0_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_8", "compactScalar1_2_1", "phoneTable_9"]);

		findWidget("phoneTable_8")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_2_1")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("phoneTable_9")
			.getDimensions()
			.should.beRoughlyEqualTo([1879, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_2_1")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Enable Compact mode (1/0)")
			.setValue({
				value: "1",
			});

		findWidget("phoneTable_8")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_2_1")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});
		findWidget("phoneTable_9")
			.getDimensions()
			.should.beRoughlyEqualTo([1879, 614], { tolerance: pixelTolerance });
	}
);
