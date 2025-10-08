/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from literal in GL layout page which has only column part1",
	() => {
		loadPage("Main Project/columnPageWIthLiteral1");

		const pixelTolerance = 15;

		findWidget("columnpagewithliteral_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_4", "compactScalar1_2", "phoneTable_5"]);

		findWidget("phoneTable_4")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_2")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_5")
			.getDimensions()
			.should.beRoughlyEqualTo([1879, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Enable Compact mode (1/0)")
			.setValue({
				value: "0",
			});

		findWidget("phoneTable_4")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_2")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("phoneTable_5")
			.getDimensions()
			.should.beRoughlyEqualTo([1879, 614], { tolerance: pixelTolerance });
	}
);
