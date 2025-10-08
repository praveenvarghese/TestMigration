/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario(
	"Legend with External Selection from Table (for Parameter) or Scalar (for Element Parameter)",
	() => {
		// Model: Songs

		// Page1: Legend and table with parameter as contents

		loadPage("Main Project/Page1");

		// Legend and table with parameter as contents
		findWidget("table_parameter")
			.getCell(0, 0)
			.getValue()
			.should.be.equal(true);

		findWidget("legend_parameter")
			.getValue()
			.should.be.equal("song_1");

		findWidget("table_parameter")
			.getCell(1, 0)
			.setValue(true);

		findWidget("table_parameter")
			.getCell(0, 0)
			.setValue(false);

		findWidget("legend_parameter")
			.getValue()
			.should.be.equal("song_2");

		// Page1: Legend and scalar with an element parameter as contents

		loadPage("Main Project/Page1");

		findWidget("scalar_element_parameter")
			.getValue()
			.should.be.equal("song_1");

		findWidget("legend_element_parameter")
			.getValue()
			.should.be.equal("song_1");

		findWidget("scalar_element_parameter").setValue("song_2");

		findWidget("legend_element_parameter")
			.getValue()
			.should.be.equal("song_2");
	}
);
