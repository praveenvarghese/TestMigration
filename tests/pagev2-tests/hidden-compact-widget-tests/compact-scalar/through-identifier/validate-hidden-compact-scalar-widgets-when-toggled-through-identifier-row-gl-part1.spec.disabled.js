/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from identifier in GL layout page which has only rows part1",
	() => {
		loadPage("Main Project/rowthroughIdentifier1");

		findWidget("throughidentifier_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_2", "compactScalar1_1", "phoneTable_3", "flag"]);

		findWidget("phoneTable_2")
			.getDimensions()
			.should.eql([1888, 344.5]);

		findWidget("compactScalar1_1")
			.getDimensions()
			.should.eql([1888, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable_3")
			.getDimensions()
			.should.eql([1888, 189.75]);

		findWidget("flag")
			.getDimensions()
			.should.eql([1888, 189.75]);

		findWidget("flag").setValue(false);

		findWidget("phoneTable_2")
			.getDimensions()
			.should.eql([1888, 341.5]);

		findWidget("compactScalar1_1")
			.getDimensions()
			.should.eql([1888, 38]);

		findWidget("phoneTable_3")
			.getDimensions()
			.should.eql([1888, 189.75]);

		findWidget("flag")
			.getDimensions()
			.should.eql([1888, 189.75]);
	}
);
