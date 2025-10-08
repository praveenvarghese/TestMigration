/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a multi-contents Bar-Line chart on Dialog, assert custom Annotations on chart elements.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		//disabled due to a bug in the product where annotations are not visible

		// Click on the button to get the Dialog Page
		findWidget("Opens Dialog").click();

		//#region Assert no custom annotations are available for chart elements

		let MKG_IA_JobDuration = findWidget("DP_BLC1").findPoints(["MKG", "IA_JobDuration"]);
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		let MKG_IA_JobStart = findWidget("DP_BLC1").findBars(["MKG", "IA_JobStart"]);
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		let MKG_IA_Copy_JobStart = findWidget("DP_BLC1").findBars(["MKG", "IA_Copy_JobStart"]);
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		let MKG_IA_Copy_JobDuration = findWidget("DP_BLC1").findBars([
			"MKG",
			"IA_Copy_JobDuration",
		]);
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		let MB_IA_JobDuration = findWidget("DP_BLC1").findPoints(["MB", "IA_JobDuration"]);
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		let MB_IA_JobStart = findWidget("DP_BLC1").findBars(["MB", "IA_JobStart"]);
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		let MB_IA_Copy_JobStart = findWidget("DP_BLC1").findBars(["MB", "IA_Copy_JobStart"]);
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		let MB_IA_Copy_JobDuration = findWidget("DP_BLC1").findBars(["MB", "IA_Copy_JobDuration"]);
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		//#endregion

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Click on the button that loads Annotations data
		findWidget("Load_Annotations_BarLineChart").click();

		// Click on the button to get the Dialog Page
		findWidget("Opens Dialog").click();

		//#region Assert respective custom annotations are available for chart elements
		MKG_IA_JobDuration = findWidget("DP_BLC1").findPoints(["MKG", "IA_JobDuration"]);
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_JobDuration.should.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		MKG_IA_JobStart = findWidget("DP_BLC1").findBars(["MKG", "IA_JobStart"]);
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_JobStart.should.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_JobStart.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		MKG_IA_Copy_JobStart = findWidget("DP_BLC1").findBars(["MKG", "IA_Copy_JobStart"]);
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_Copy_JobStart.should.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		MKG_IA_Copy_JobDuration = findWidget("DP_BLC1").findBars(["MKG", "IA_Copy_JobDuration"]);
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
		});
		MKG_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
		});
		MKG_IA_Copy_JobDuration.should.include.something.like({
			annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
		});

		MB_IA_JobDuration = findWidget("DP_BLC1").findPoints(["MB", "IA_JobDuration"]);
		MB_IA_JobDuration.should.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_JobDuration.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		MB_IA_JobStart = findWidget("DP_BLC1").findBars(["MB", "IA_JobStart"]);
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_JobStart.should.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_JobStart.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		MB_IA_Copy_JobStart = findWidget("DP_BLC1").findBars(["MB", "IA_Copy_JobStart"]);
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_Copy_JobStart.should.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_Copy_JobStart.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});

		MB_IA_Copy_JobDuration = findWidget("DP_BLC1").findBars(["MB", "IA_Copy_JobDuration"]);
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_1A_Annotation", "MB_Annotation_A1"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_1B_Annotation", "MB_Annotation_B1"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_2A_Annotation", "MB_Annotation_A2"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_2B_Annotation", "MB_Annotation_B2"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_3A_Annotation", "MB_Annotation_A3"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_3B_Annotation", "MB_Annotation_B3"],
		});
		MB_IA_Copy_JobDuration.should.include.something.like({
			annotations: ["MB_4A_Annotation", "MB_Annotation_A4"],
		});
		MB_IA_Copy_JobDuration.should.not.include.something.like({
			annotations: ["MB_4B_Annotation", "MB_Annotation_B4"],
		});
		//#endregion

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
