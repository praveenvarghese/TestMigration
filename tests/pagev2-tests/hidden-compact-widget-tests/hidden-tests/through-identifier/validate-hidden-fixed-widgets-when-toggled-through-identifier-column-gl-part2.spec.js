/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify hidden functinalities with fixed size widget when its changed from identifier in GL layout page which has only column part2",
	() => {
		loadPage("Main Project/columnHiddenPageWithIdentifier0");

		const pixelTolerance = 15;

		findWidget("columnhiddenpagewithidentifier0_1")
			.getVisibleWidgets()
			.should.eql(["compactScalar1_1_3_1_2", "phoneTable_31", "flag_7"]);

		findWidget("compactScalar1_1_3_1_2")
			.getDimensions()
			.should.beRoughlyEqualTo([1879, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_31")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_7")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_7").setValue(true);

		findWidget("columnhiddenpagewithidentifier0_1")
			.getVisibleWidgets()
			.should.eql([
				"button2",
				"phoneTable_30",
				"compactScalar1_1_3_1_2",
				"phoneTable_31",
				"flag_7",
			]);

		findWidget("button2")
			.assertDimensions(615, constants.HEADERLESS_WIDGET_HEIGHT, pixelTolerance)
			.should.eql(true);

		findWidget("phoneTable_30")
			.getDimensions()
			.should.beRoughlyEqualTo([615, 608], { tolerance: pixelTolerance });

		findWidget("compactScalar1_1_3_1_2")
			.getDimensions()
			.should.beRoughlyEqualTo([615, constants.HEADERLESS_WIDGET_HEIGHT], {
				tolerance: pixelTolerance,
			});

		findWidget("phoneTable_31")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });

		findWidget("flag_7")
			.getDimensions()
			.should.beRoughlyEqualTo([931.5, 614], { tolerance: pixelTolerance });
	}
);
