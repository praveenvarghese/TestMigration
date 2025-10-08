/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from identifier in GL layout page which has only column part2",
	() => {
		loadPage(
			"Main Project/columnthroughIdentifier0?e2e-onscreen-console=true&e2e-onscreen-monitor=true"
		);

		//Page V2 has fractions of pixels as widget dimensions. To ignore these, a pixel tolerance is used in doing the assertions on the dimensions.
		const pixelTolerance = 15;

		findWidget("columnthroughidentifier0_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_14", "compactScalar1_1_1_1", "phoneTable_15", "flag_3"]);

		findWidget("phoneTable_14")
			.getDimensions()
			.should.beRoughlyEqualTo([928, 608], { tolerance: pixelTolerance });

		findWidget("compactScalar1_1_1_1")
			.getDimensions()
			.should.beRoughlyEqualTo([929, 608], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_15")
			.getDimensions()
			.should.beRoughlyEqualTo([929, 608], { tolerance: pixelTolerance });

		findWidget("flag_3")
			.getDimensions()
			.should.beRoughlyEqualTo([929, 608], { tolerance: pixelTolerance });

		findWidget("flag_3").setValue(true);

		findWidget("phoneTable_14")
			.getDimensions()
			.should.beRoughlyEqualTo([929, 608], { tolerance: pixelTolerance });

		findWidget("compactScalar1_1_1_1")
			.getDimensions()
			.should.beRoughlyEqualTo([929, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_15")
			.getDimensions()
			.should.beRoughlyEqualTo([929, 608], { tolerance: pixelTolerance });

		findWidget("flag_3")
			.getDimensions()
			.should.beRoughlyEqualTo([929, 608], { tolerance: pixelTolerance });
	}
);
