/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario(
	"Validate data is uploaded from Excel file for the table which has Item Actions,Focus Support",
	() => {
		loadPage("Main Project/table/filter-focus-support?_aimms_only_persistence.write=true");

		findWidget("filterTable")
			.getGridValues()
			.should.be.shallowDeepEqual([["18.00"], ["16.00"], ["13.00"], ["12.00"]]);

		findWidget("filterTable")
			.getCell(0, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{ title: "Factory Details", icon: "aimms-info", state: "active" },
				{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			]);

		findWidget("focusSupportScalar")
			.getValue()
			.should.be.equal("i-1");

		findWidget("filterTable")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("filterTable.xlsx");

		pageRefresh();

		findWidget("filterTable")
			.getGridValues()
			.should.be.shallowDeepEqual([["16.00"], ["13.00"], ["12.00"]]);

		findWidget("filterTable")
			.getCell(0, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{ title: "Factory Details", icon: "aimms-info", state: "active" },
				{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			]);

		findWidget("focusSupportScalar")
			.getValue()
			.should.be.equal("i-2");
	}
);
