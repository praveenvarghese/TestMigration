/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("After uploading an image should update image widget", () => {
	loadPage("Main Project/THird Page");

	findWidget("UploadTheFile").uploadFile("AIMMS.LOGO.PNG");

	findWidget("TheUploadedFile")
		.getUrl()
		.should.include("AIMMS.LOGO.PNG");
});
