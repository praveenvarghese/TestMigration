/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify hidden functinalities with fixed size widget when its changed from identifier in GL layout page which has only row part1",
	() => {
		loadPage("Main Project/rowHiddenPageWithIdentifier1");

		findWidget("rowhiddenpagewithidentifier1_1")
			.getVisibleWidgets()
			.should.eql([
				"phoneTable_24",
				"compactScalar1_1_3",
				"button3",
				"phoneTable_25",
				"flag_4",
			]);

		findWidget("phoneTable_24")
			.getDimensions()
			.should.eql([1879, 506]);

		findWidget("compactScalar1_1_3")
			.getDimensions()
			.should.eql([1879, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("button3")
			.getDimensions()
			.should.eql([1879, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable_25")
			.getDimensions()
			.should.eql([1879, 296]);

		findWidget("flag_4")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("flag_4").setValue(false);

		findWidget("rowhiddenpagewithidentifier1_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_24", "phoneTable_25", "flag_4"]);

		findWidget("phoneTable_24")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("phoneTable_25")
			.getDimensions()
			.should.eql([1879, 296]);

		findWidget("flag_4")
			.getDimensions()
			.should.eql([1879, 296]);
	}
);
