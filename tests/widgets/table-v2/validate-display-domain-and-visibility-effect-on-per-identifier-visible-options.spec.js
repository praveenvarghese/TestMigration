/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario(
	"Validate display domain is overidden when we toggle the visibilty option to always show",
	() => {
		loadPage("Main Project/FourthPage");

		findWidget("Aircraft Properties_4")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90"],
				["37.57"],
				["63.66"],
				["39.50"],
				["76.28"],
				["46.97"],
				["36.25"],
				["38.66"],
			]);

		findWidget("TableSettings_3").setValue("selectVisibiltyMTOW", "Always Show");

		findWidget("Aircraft Properties_4")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "70,900.00"],
				["37.57", "77,000.00"],
				["63.66", "242,000.00"],
				["39.50", "101,000.00"],
				["76.28", "440,000.00"],
				["46.97", "124,000.00"],
				["36.25", "51,800.00"],
				["38.66", "52,290.00"],
			]);

		findWidget("TableSettings_3").setValue("DisplayDomainMTOW", "1");

		findWidget("Aircraft Properties_4")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "70,900.00"],
				["37.57", "77,000.00"],
				["63.66", "242,000.00"],
				["39.50", "101,000.00"],
				["76.28", "440,000.00"],
				["46.97", "124,000.00"],
				["36.25", "51,800.00"],
				["38.66", "52,290.00"],
			]);

		findWidget("TableSettings_3").setValue("selectVisibiltyMTOW", "Never Show");

		findWidget("Aircraft Properties_4")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90"],
				["37.57"],
				["63.66"],
				["39.50"],
				["76.28"],
				["46.97"],
				["36.25"],
				["38.66"],
			]);

		findWidget("TableSettings_3").setValue("selectVisibiltyMTOW", "Default");

		findWidget("Aircraft Properties_4")
			.getGridValues()
			.should.shallowDeepEqual([
				["34.90", "70,900.00"],
				["37.57", "77,000.00"],
				["63.66", "242,000.00"],
				["39.50", "101,000.00"],
				["76.28", "440,000.00"],
				["46.97", "124,000.00"],
				["36.25", "51,800.00"],
				["38.66", "52,290.00"],
			]);
	}
);
