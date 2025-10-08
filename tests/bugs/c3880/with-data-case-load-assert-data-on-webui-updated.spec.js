/*!
 * @AIMMS_FILE=models/Bugs/c3568-TableCellDataUpdateOrder/c3568.aimms
 */

scenario(
	"Customer Ticket 3880 - With load of Data Case, the identifier values were not updated on WebUI.",
	() => {
		loadPage("Main Project/Bugs/c3880");

		// Assert data on the Scalar widget.
		findWidget("ScalarData")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "NumericParam", value: "5.00" },
				{ label: "BinaryParam", value: "0.00" },
				{ label: "StringParam", value: "Madhu K Gowda" },
				{ label: "ElementParam", value: "5.00" },
			]);

		// Click on this button loads c3880.data Data case to AIMMS.
		findWidget("Loads c3880 Data File").click();

		// Now with data being loaded from the data case, assert Scalar widget on WebUI reflects the updated data.
		findWidget("ScalarData")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "NumericParam", value: "1.00" },
				{ label: "BinaryParam", value: "1.00" },
				{ label: "StringParam", value: "MKG" },
				{ label: "ElementParam", value: "1.00" },
			]);
	}
);
