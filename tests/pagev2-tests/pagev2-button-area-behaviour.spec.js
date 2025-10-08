/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Checking the layout of buttons (horizontal vs. vertical) depending on the areas they are in",
	() => {
		loadPage("Main Project/Button Page");

		// Open the page with a specific layout.
		openPageConfigurator().selectLayout("Layout 2");

		findWidget("MyButton")
			.getPositionInfoRelativeTo("B4")
			.should.be.similar.to({
				alignment: ["top", "bottom"],
				relativePositioning: "this left of other",
			});

		findWidget("B2")
			.getPositionInfoRelativeTo("B3")
			.should.be.similar.to({
				alignment: ["right", "left"],
				relativePositioning: "this above other",
			});
	}
);
