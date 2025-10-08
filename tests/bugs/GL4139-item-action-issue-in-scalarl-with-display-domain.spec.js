/*!
 * @AIMMS_FILE=models/Bugs/GL3594-widgetActionIssue/putstatement.aimms
 */
scenario("GL4139-item action issue in scalar with display domian", () => {
	loadPage("Main Project/home");

	findWidget("itemActionScalar")
		.getScalarCell("binary1")
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([{ title: "Binary1", icon: "aimms-info", state: "active" }]);

	findWidget("itemActionScalar").pressKeys([SPECIAL_KEYS.escape]);

	findWidget("itemActionScalar")
		.getScalarCell("binary3")
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([{ title: "Binary3", icon: "aimms-eraser2", state: "active" }]);

	findWidget("itemActionScalar").setDisplayDomain({
		binary2: "1",
	});

	// Close "Widget Settings" option Editor
	findWidget("itemActionScalar").closeOptionDialog();

	findWidget("itemActionScalar")
		.getScalarCell("binary2")
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([{ title: "Binary2", icon: "aimms-toggle-off", state: "active" }]);

	findWidget("itemActionScalar").pressKeys([SPECIAL_KEYS.escape]);

	findWidget("itemActionScalar")
		.getScalarCell("binary3")
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([{ title: "Binary3", icon: "aimms-eraser2", state: "active" }]);

	findWidget("itemActionScalar").setDisplayDomain({
		binary3: "0",
	});

	// Close "Widget Settings" option Editor
	findWidget("itemActionScalar").closeOptionDialog();

	findWidget("itemActionScalar")
		.getScalarCell("binary2")
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([{ title: "Binary2", icon: "aimms-toggle-off", state: "active" }]);

	findWidget("itemActionScalar").pressKeys([SPECIAL_KEYS.escape]);

	findWidget("itemActionScalar")
		.getScalarCell("binary4")
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([{ title: "Binary4", icon: "aimms-stats-dots", state: "active" }]);
});
