/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify hidden functinalities with fixed size widget when its changed from identifier in GL layout page which has only column part1",
	() => {
		loadPage("Main Project/columnHiddenPageWithIdentifier1");

		const pixelTolerance = 15;

		findWidget("columnhiddenpagewithidentifier1_1")
			.getVisibleWidgets()
			.should.eql([
				"phoneTable_28",
				"compactScalar1_1_3_1_1",
				"button1",
				"phoneTable_29",
				"flag_6",
			]);

		findWidget("phoneTable_28")
			.getDimensions()
			.should.beRoughlyEqualTo([615, 608], { tolerance: pixelTolerance });

		findWidget("compactScalar1_1_3_1_1")
			.getDimensions()
			.should.beRoughlyEqualTo([615, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("button1")
			.getDimensions()
			.should.beRoughlyEqualTo([615, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_29")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_6")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_6").setValue(false);

		findWidget("columnhiddenpagewithidentifier1_1")
			.getVisibleWidgets()
			.should.eql(["compactScalar1_1_3_1_1", "phoneTable_29", "flag_6"]);

		findWidget("compactScalar1_1_3_1_1")
			.getDimensions()
			.should.beRoughlyEqualTo([1879, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_29")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_6")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });
	}
);
