/*!
 * @AIMMS_FILE=models/Bugs/GL3989-ItemActionBug/ItemActionBug.aimms
 */
scenario(
	"GL3989-Item action is closed when same identifier is used across different widget and the other widget refreshes",
	() => {
		loadPage("Main Project/home");

		findWidget("Table1")
			.getCell(0, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{ title: "Factory Details1", icon: "aimms-info", state: "active" },
				{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
				{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
				{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
			]);

		findWidget("Table1")
			.getCell(1, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{ title: "Factory Details1", icon: "aimms-info", state: "active" },
				{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
				{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
				{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
			]);

		findWidget("scalar1")
			.getValue()
			.should.beEqualTo("Feb");

		findWidget("Table1")
			.getCell(2, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{ title: "Factory Details1", icon: "aimms-info", state: "active" },
				{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
				{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
				{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
			]);

		findWidget("scalar1")
			.getValue()
			.should.beEqualTo("Mar");
	}
);
