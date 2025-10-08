/*!
 * @AIMMS_FILE=models/Bugs/GL982-ImageNotUpdatedAfterUpload/FilesWithSpecialCharacters.aimms
 */

scenario(
	"GL982 -> Image widgets were not automatically updated anymore when the underlying string parameter changed.",
	() => {
		loadPage("Main Project/home");

		// Make sure image 1 is empty and image 2 is filled upon entering the page
		findWidget("Image1")
			.isEmpty()
			.should.be.equal(true);

		findWidget("Image 2")
			.isEmpty()
			.should.be.equal(false);

		// Force a change in the images by running a procedure in the AIMMS model
		findWidget("FC").click();

		// Now the first image should be filled
		findWidget("Image1")
			.isEmpty()
			.should.be.equal(false);

		// And the second should be empty
		findWidget("Image 2")
			.isEmpty()
			.should.be.equal(true);
	}
);
