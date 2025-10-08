/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify compact scalar functinalities when its changed from literal in GL layout page which has only row part1",
	() => {
		loadPage("Main Project/rowPageWithLiteral0");

		findWidget("rowpagewithliteral0_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_6", "compactScalar1_3", "phoneTable_7"]);

		findWidget("phoneTable_6")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("compactScalar1_3")
			.getDimensions()
			.should.eql([931.5, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable_7")
			.getDimensions()
			.should.eql([1879, 608]);

		findWidget("compactScalar1_3")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Enable Compact mode (1/0)")
			.setValue({
				value: "1",
			});

		findWidget("phoneTable_6")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("compactScalar1_3")
			.getDimensions()
			.should.eql([931.5, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("phoneTable_7")
			.getDimensions()
			.should.eql([1879, 608]);
	}
);
