/*!
 * @AIMMS_FILE=models/Bugs/GLc5802-MultiselectFilterSelect/TransNet.aimms
 */

scenario("Asserting number of elements selected in multiselect with filter", () => {
	loadPage("Main Project/Search/Search_1");

	findWidget("p_DemandMC_multi")
		.getAllEntries()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
			"Center11",
		]);

	findWidget("p_DemandMC_multi").selectAll();

	findWidget("p_DemandMC_multi")
		.getAllEntries()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
			"Center11",
		]);

	findWidget("p_DemandMC_multi").selectNone();

	findWidget("p_DemandMC_multi")
		.getAllEntries()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
			"Center11",
		]);

	findWidget("p_DemandMC_multi").searchItem(["0"]);

	findWidget("p_DemandMC_multi")
		.getAllFilteredEntries()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
		]);

	findWidget("p_DemandMC_multi").selectAll();

	findWidget("p_DemandMC_multi")
		.getSelectedItemsList()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
		]);

	findWidget("p_DemandMC_multi").selectNone();

	findWidget("p_DemandMC_multi")
		.getAllFilteredEntries()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
		]);

	findWidget("p_DemandMC_multi")
		.getSearchBox()
		.click()
		.keys(SPECIAL_KEYS.backspace);

	findWidget("p_DemandMC_multi")
		.getAllEntries()
		.should.eql([
			"Center01",
			"Center02",
			"Center03",
			"Center04",
			"Center05",
			"Center06",
			"Center07",
			"Center08",
			"Center09",
			"Center10",
			"Center11",
		]);
});
