/*!
 * @AIMMS_FILE=models/ScalarBugModel/ChartsExample.aimms
 */

scenario(
	"Validate remove button functionality of normal scalar,multi content scalar and in sidepanel page",
	() => {
		loadPage("Main Project/Widgets/Scalar");

		// Remove item from normal scalar without default

		findWidget("normalScalar")
			.getValue()
			.should.be.equal("Bangalore");

		findWidget("normalScalar").removeValue();

		findWidget("normalScalar")
			.getValue()
			.should.be.equal("");

		// Remove item from Multiple scalar with default

		findWidget("MultiSelect_1")
			.getValue("TopSellingFruit")
			.should.be.equal("Yellow Banana");

		findWidget("MultiSelect_1").removeValue("TopSellingFruit");

		findWidget("MultiSelect_1")
			.getValue("TopSellingFruit")
			.should.be.equal("Red Apple");
	}
);
