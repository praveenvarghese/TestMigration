/*!
 * @AIMMS_FILE=models/Bugs/GL2305-ScalarDDTest/ScalarDDTest.aimms
 */

scenario(
	"GL2305 - Using a Display Domain in one of the displayed identifiers in a Scalar, which depends on another, did not work right anymore in AIMMS 4.70.",
	() => {
		loadPage("Main Project/home");

		// Upon entering, the scalar should show a SINGLE (empty) value. Assert this by explicitly using te KpiMode.
		findWidget("sc_test")
			.getKpiModeValue("EP_HideOrShow")
			.should.be.equal("");

		findWidget("sc_test").setKpiModeValue("Show");

		// By putting the Show value above into the value, another row has been activated in the scalar (through the display domain), making it a multiple value scalar.
		// So explicitly use the MultipleScalarMode variant to assert the value.
		findWidget("sc_test")
			.getMultipleScalarModeValue("EP_HideOrShow")
			.should.be.equal("Show");

		// For completeness, also verify the value of the row which should have appeared.
		findWidget("sc_test")
			.getMultipleScalarModeValue("P_Test")
			.should.be.equal("10.00");
	}
);
