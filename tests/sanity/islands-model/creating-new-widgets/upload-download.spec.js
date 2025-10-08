/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Upload and Download widgets and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Upload widget "SmokeTest_Upload"
	createWidget("Upload", ["UploadTheFile"], "SmokeTest_Upload");

	// Create a Download widget "SmokeTest_Download"
	createWidget("Download", ["DownloadJustUploadedFile"], "SmokeTest_Download");

	// Assert "SmokeTest_Upload" is of widget type - Upload
	findWidget("SmokeTest_Upload").should.be.a.widgetOfType("upload");

	// Assert "SmokeTest_Download" is of widget type - Upload
	findWidget("SmokeTest_Download").should.be.a.widgetOfType("download");

	// // Assert Upload widget works
	// findWidget("SmokeTest_Upload").uploadFile("E2E DAW Plant Template.xlsx");

	// // Assert Download widget works
	// findWidget("SmokeTest_Download")
	// 	.click()
	// 	.getDownloadedFile()
	// 	.should.include.something.like({
	// 		filename: "E2E DAW Plant Template.xlsx",
	// 	});
});
