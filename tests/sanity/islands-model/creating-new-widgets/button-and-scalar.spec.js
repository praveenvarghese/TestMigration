/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Button and Scalar widgets. And assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Button widget "SmokeTest_Button"
	createWidget("button", ["Toggle_Flag"], "SmokeTest_Button");

	// Create a Button widget "SmokeTest_Scalar"
	createWidget(
		"scalar",
		["Flag", "IA_JobStart", "Sp_MyText", "SelectedTeamMember"],
		"SmokeTest_Scalar"
	);

	// Assert "SmokeTest_Button" is of widget type - Button
	findWidget("SmokeTest_Button").should.be.a.widgetOfType("button");
	// Assert "SmokeTest_Scalar" is of widget type - Scalar
	findWidget("SmokeTest_Scalar").should.be.a.widgetOfType("scalar");

	// Click on Button widget
	findWidget("SmokeTest_Button").click();

	// Assert Scalar widget reflects the updated data
	findWidget("SmokeTest_Scalar")
		.getAllMultiContentScalarData()
		.should.be.eql([
			{ label: "Flag", value: "1.00" },
			{ label: "IA_JobStart", value: "3,462.24" },
			{ label: "Sp_MyText", value: "Please maintain silence. MKG testing here!" },
			{ label: "SelectedTeamMember", value: "<empty>" },
		]);
});
