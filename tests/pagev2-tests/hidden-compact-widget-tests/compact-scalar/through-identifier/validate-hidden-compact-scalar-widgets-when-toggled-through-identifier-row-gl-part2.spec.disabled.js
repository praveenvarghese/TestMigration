/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from identifier in GL layout page which has only rows part2",
	() => {
		loadPage("Main Project/rowthroughIdentifier0");

		findWidget("rowthroughidentifier0_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_10", "compactScalar1_1_1", "phoneTable_11", "flag_1"]);

		findWidget("phoneTable_10")
			.getDimensions()
			.should.eql([1888, 341.5]);

		findWidget("compactScalar1_1_1")
			.getDimensions()
			.should.eql([1888, 38]);

		findWidget("phoneTable_11")
			.getDimensions()
			.should.eql([1888, 189.75]);

		findWidget("flag_1")
			.getDimensions()
			.should.eql([1888, 189.75]);

		findWidget("flag_1").setValue(true);

		findWidget("phoneTable_10")
			.getDimensions()
			.should.eql([1888, 344.5]);

		findWidget("compactScalar1_1_1")
			.getDimensions()
			.should.eql([1888, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable_11")
			.getDimensions()
			.should.eql([1888, 189.75]);

		findWidget("flag_1")
			.getDimensions()
			.should.eql([1888, 189.75]);
	}
);
