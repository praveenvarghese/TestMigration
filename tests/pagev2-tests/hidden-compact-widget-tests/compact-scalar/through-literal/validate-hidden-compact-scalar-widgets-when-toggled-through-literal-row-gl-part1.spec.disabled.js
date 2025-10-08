/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from literal in GL layout page which has only row part1",
	() => {
		loadPage("Main Project/rowPageWithLiteral1");

		findWidget("home")
			.getVisibleWidgets()
			.should.eql(["phoneTable_1", "compactScalar1", "phoneTable"]);

		findWidget("phoneTable_1")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("compactScalar1")
			.getDimensions()
			.should.eql([931.5, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable")
			.getDimensions()
			.should.eql([1879, 608]);

		findWidget("compactScalar1")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Enable Compact mode (1/0)")
			.setValue({
				value: "0",
			});

		findWidget("phoneTable_1")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("compactScalar1")
			.getDimensions()
			.should.eql([931.5, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable")
			.getDimensions()
			.should.eql([1879, 608]);
	}
);
