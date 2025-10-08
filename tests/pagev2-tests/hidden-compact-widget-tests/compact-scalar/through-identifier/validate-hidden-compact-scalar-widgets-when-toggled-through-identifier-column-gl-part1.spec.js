/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from identifier in GL layout page which has only column part1",
	() => {
		loadPage(
			"Main Project/columnthroughIdentifier1?e2e-onscreen-console=true&e2e-onscreen-monitor=true"
		);

		const pixelTolerance = 15;

		findWidget("columnthroughidentifier1_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_12", "compactScalar1_1_2", "phoneTable_13", "flag_2"]);

		findWidget("phoneTable_12")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_1_2")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_13")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_2")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_2").setValue(false);

		findWidget("phoneTable_12")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("compactScalar1_1_2")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("phoneTable_13")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_2")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });
	}
);
