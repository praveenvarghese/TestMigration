/*!
 * @AIMMS_FILE=models/MuseumsRus/multiselect.aimms
 */

scenario("Chaining one Selectionbox to another", () => {
	// Model: MuseumsRus
	loadPage("Main Project/home");

	findWidget("CountrySelection").selectForSpecialCase("France");
	findWidget("CitySelection").selectForSpecialCase("Paris");
	findWidget("MuseumSelection").selectForSpecialCase("Louvre");
	findWidget("ArtworkSelection").selectForSpecialCase("MonaLisaLaGioconda");

	findWidget("ArtworkSelection")
		.getValue()
		.should.be.equal("MonaLisaLaGioconda");

	findWidget("CountrySelection").selectForSpecialCase("Italy");
	findWidget("CitySelection").selectForSpecialCase("Florence");
	findWidget("MuseumSelection").selectForSpecialCase("Uffizi");
	findWidget("ArtworkSelection").selectForSpecialCase("BirthOfVenus");

	findWidget("ArtworkSelection")
		.getValue()
		.should.be.equal("BirthOfVenus");
});
