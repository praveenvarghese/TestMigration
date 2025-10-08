/*!
 * @AIMMS_FILE=models/Bugs/GL715-FocusIdentifierNotRemembered/SingleCubePlayModel.aimms
 */

scenario(
	"GL736 When setting a value for the upper and lower threshold of a Table, the change should be visible immediately (i.e. not only after an explicit F5).",
	() => {
		loadPage("Main Project/home");

		// Set the store focus setting to the element 'NogEenSelectedModel'
		findWidget("CameraInfo")
			.openStoreFocusOptionEditor()
			.setStoreFocusSetting({
				name: "Cm",
				value: "NogEenSelectedModel",
				type: "identifier",
			});

		findWidget("CameraInfo")
			.getCell(1, 1)
			.hasAnnotations(["threshold-low"])
			.should.be.equal(false);

		// Check whether the store focus still has the set value
		findWidget("CameraInfo")
			.openStoreFocusOptionEditor()
			.getValue("Cm")
			.should.be.equal("NogEenSelectedModel");
	}
);
