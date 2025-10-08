/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Test verifying Bubble chart 3-axis labels text shown based on the configured data.",
	() => {
		loadPage("Main Project/Charts");

		// Update the X-Axis label setting of Bubblechart
		findWidget("Bubblechart")
			.openMiscellaneousOptionEditor()
			.getMiscOption("X-axis label")
			.setValue({
				value: "x_Axis_Label",
				valueType: "identifier",
				optionEditorType: "VALUE",
			});

		// Verify the updated texts of Bubble chart 3-axis labels
		let bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("Cost/Mile");
		bubblechart.getYAxisLabelText().should.be.equal("");
		bubblechart.getSizeAxisLabelText().should.be.equal("");

		// Update the Y-Axis label setting of Bubblechart
		bubblechart
			.openMiscellaneousOptionEditor()
			.getMiscOption("Y-axis label")
			.setValue({
				value: "y_Axis_Label",
				valueType: "identifier",
				optionEditorType: "VALUE",
			});

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("Cost/Mile");
		bubblechart.getYAxisLabelText().should.be.equal("Cost/Flight");
		bubblechart.getSizeAxisLabelText().should.be.equal("");

		// Update the Y-Axis label setting of Bubblechart
		bubblechart
			.openMiscellaneousOptionEditor()
			.getMiscOption("Size label")
			.setValue({
				value: "size_Axis_Label",
				valueType: "identifier",
				optionEditorType: "VALUE",
			});

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("Cost/Mile");
		bubblechart.getYAxisLabelText().should.be.equal("Cost/Flight");
		bubblechart.getSizeAxisLabelText().should.be.equal("No. of seats in Flight.");

		// Clear X-Axis label setting of Bubblechart
		findWidget("Bubblechart")
			.openMiscellaneousOptionEditor()
			.getMiscOption("X-axis label")
			.clearValue();

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("");
		bubblechart.getYAxisLabelText().should.be.equal("Cost/Flight");
		bubblechart.getSizeAxisLabelText().should.be.equal("No. of seats in Flight.");

		// Clear Y-Axis label setting of Bubblechart
		bubblechart
			.openMiscellaneousOptionEditor()
			.getMiscOption("Y-axis label")
			.clearValue();

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("");
		bubblechart.getYAxisLabelText().should.be.equal("");
		bubblechart.getSizeAxisLabelText().should.be.equal("No. of seats in Flight.");

		// Clear Y-Axis label setting of Bubblechart
		bubblechart
			.openMiscellaneousOptionEditor()
			.getMiscOption("Size label")
			.clearValue();

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("");
		bubblechart.getYAxisLabelText().should.be.equal("");
		bubblechart.getSizeAxisLabelText().should.be.equal("");

		// Update the X-Axis label setting of Bubblechart
		findWidget("Bubblechart")
			.openMiscellaneousOptionEditor()
			.getMiscOption("X-axis label")
			.setValue({
				value: "Literal X value",
				valueType: "literal",
				optionEditorType: "VALUE",
			});

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("Literal X value");
		bubblechart.getYAxisLabelText().should.be.equal("");
		bubblechart.getSizeAxisLabelText().should.be.equal("");

		// Update the Y-Axis label setting of Bubblechart
		bubblechart
			.openMiscellaneousOptionEditor()
			.getMiscOption("Y-axis label")
			.setValue({
				value: "Y axis literal value",
				valueType: "literal",
				optionEditorType: "VALUE",
			});

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("Literal X value");
		bubblechart.getYAxisLabelText().should.be.equal("Y axis literal value");
		bubblechart.getSizeAxisLabelText().should.be.equal("");

		// Update the Y-Axis label setting of Bubblechart
		bubblechart
			.openMiscellaneousOptionEditor()
			.getMiscOption("Size label")
			.setValue({
				value: "Z Y X label text",
				valueType: "literal",
				optionEditorType: "VALUE",
			});

		// Verify the updated texts of Bubble chart 3-axis labels
		bubblechart = findWidget("Bubblechart");
		bubblechart.getXAxisLabelText().should.be.equal("Literal X value");
		bubblechart.getYAxisLabelText().should.be.equal("Y axis literal value");
		bubblechart.getSizeAxisLabelText().should.be.equal("Z Y X label text");
	}
);
