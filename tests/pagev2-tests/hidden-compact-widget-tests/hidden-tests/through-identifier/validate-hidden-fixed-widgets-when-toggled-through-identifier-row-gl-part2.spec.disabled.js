/*!
 * @AIMMS_FILE=models/compactScalarAndHiddenWidgetModel/compactScalarAndHiddenWidgetModel.aimms
 */

scenario(
	"Test to verify hidden functinalities with fixed size widget when its changed from identifier in GL layout page which has only row part2",
	() => {
		loadPage("Main Project/rowHiddenPageWithIdentifier0");

		findWidget("rowhiddenpagewithidentifier0_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_26", "phoneTable_27", "flag_5"]);

		findWidget("phoneTable_26")
			.getDimensions()
			.should.eql([1879, 557]);

		findWidget("phoneTable_27")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("flag_5")
			.getDimensions()
			.should.eql([1879, 296]);

		findWidget("flag_5").setValue(true);

		findWidget("rowhiddenpagewithidentifier0_1")
			.getVisibleWidgets()
			.should.eql(["phoneTable_26", "compactScalar1_1_3_1", "phoneTable_27", "flag_5"]);

		findWidget("compactScalar1_1_3_1")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("phoneTable_27")
			.getDimensions()
			.should.eql([931.5, 608]);

		findWidget("flag_5")
			.getDimensions()
			.should.eql([931.5, 608]);
	}
);
